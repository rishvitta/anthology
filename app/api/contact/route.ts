import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email notification
    try {
      await resend.emails.send({
        from: 'noreply@anthology.ooo',
        to: 'rish@anthology.ooo',
        subject: `New Contact Submission from ${fullName}`,
        html: `
          <h2>New Contact Submission</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Organisation:</strong> ${organisation}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Interest:</strong> ${serviceInterest}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });
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
