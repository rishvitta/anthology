import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, organisation, email, serviceInterest, message } = body;

    // Validate required fields
    if (!fullName || !organisation || !email || !serviceInterest || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Store in Supabase
    const { data, error } = await supabase.from('contact_submissions').insert([
      {
        full_name: fullName,
        organisation,
        email,
        service_interest: serviceInterest,
        message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      // Continue even if Supabase fails, try to send email
    }

    // Send email notification via Brevo
    try {
      const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': process.env.BREVO_API_KEY || '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: {
            name: 'Anthology Contact Form',
            email: 'noreply@anthology.ooo',
          },
          to: [
            {
              name: 'Rish',
              email: 'rish@anthology.ooo',
            },
          ],
          subject: `New Contact Submission from ${fullName}`,
          htmlContent: `
            <h2>New Contact Submission</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Organisation:</strong> ${organisation}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service Interest:</strong> ${serviceInterest}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        }),
      });

      if (!brevoResponse.ok) {
        console.error('Brevo error:', await brevoResponse.text());
        // Don't fail if email doesn't send, data is already in Supabase
      }
    } catch (emailError) {
      console.error('Email send error:', emailError);
      // Don't fail if email doesn't send, data is already in Supabase
    }

    return NextResponse.json(
      { message: 'Contact submission received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
