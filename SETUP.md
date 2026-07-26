# Anthology Solutions Inc. - Setup & Deployment Guide

## Overview

This guide walks you through setting up the www.anthology.ooo website for production deployment. The site uses:
- **Frontend**: Next.js 16 + TypeScript + Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Email**: Brevo SMTP
- **Hosting**: Vercel

---

## Step 1: Create Supabase Project

### 1.1 Create Account & Project
1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project:
   - **Name**: `anthology` (or similar)
   - **Database Password**: Save this securely
   - **Region**: Choose closest to your users

### 1.2 Get Your Credentials
Once the project is created:
1. Go to **Project Settings** → **API**
2. Copy and save:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon (public)` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 1.3 Create `contact_submissions` Table
1. Go to **SQL Editor** in Supabase
2. Click **New Query**
3. Paste this SQL:
```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  organisation TEXT NOT NULL,
  email TEXT NOT NULL,
  service_interest TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Optional: Create an index for faster queries
CREATE INDEX idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);
```
4. Click **Run**

---

## Step 2: Set Up Brevo for Email

### 2.1 Create Brevo Account
1. Go to [https://www.brevo.com](https://www.brevo.com)
2. Sign up with your email
3. Create account and verify email

### 2.2 Get API Key
1. Log in to Brevo
2. Go to **Settings** → **SMTP & API**
3. Under **API Keys**, click **Create a new API key**
4. Copy the API key → `BREVO_API_KEY`

### 2.3 Verify Sender Email (Important!)
1. Go to **Settings** → **Senders & Lists**
2. Click **Add a Sender**
3. Add sender: `noreply@anthology.ooo`
4. Verify the email (check inbox)
   - **Note**: Without verification, emails won't send

---

## Step 3: Create Environment Variables

### 3.1 Local Development (`.env.local`)
Create a file `.env.local` in the project root:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Brevo Email
BREVO_API_KEY=your_brevo_api_key
```

**Don't commit `.env.local` to Git** (it's in `.gitignore`)

### 3.2 Test Locally
```bash
npm run dev
```

Navigate to `http://localhost:3000/` and test the contact form.

---

## Step 4: Deploy to Vercel

### 4.1 Install Vercel CLI (Optional)
```bash
npm install -g vercel
```

### 4.2 Connect to Vercel
**Option A: Via GitHub (Recommended)**
1. Go to [https://vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Select **Import Git Repository**
4. Authenticate with GitHub and select `rishvitta/anthology`
5. Vercel will auto-detect Next.js settings
6. Click **Deploy**

**Option B: Via Vercel CLI**
```bash
vercel
```
Follow the prompts and link your project.

### 4.3 Add Environment Variables to Vercel
1. Go to your Vercel project dashboard
2. **Settings** → **Environment Variables**
3. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = (your Supabase URL)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (your Supabase anon key)
   - `BREVO_API_KEY` = (your Brevo API key)

**Important**: Click **Save** after each variable

### 4.4 Update DNS for www.anthology.ooo
1. Vercel will provide a deployment URL (something like `anthology-ruby.vercel.app`)
2. Update your domain DNS:
   - Remove old GitHub Pages CNAME
   - Add Vercel domain as CNAME
3. Or use Vercel's nameservers (easier if no other DNS records)

---

## Step 5: Test Everything

### 5.1 Test Contact Form
1. Go to [https://www.anthology.ooo](https://www.anthology.ooo) (or your preview URL)
2. Fill out and submit the contact form
3. Check:
   - Email arrives in `rish@anthology.ooo` (from Brevo)
   - Data appears in Supabase table: **contact_submissions**

### 5.2 Test All Pages
- ✓ Home (all sections load)
- ✓ Products page (`/products`)
- ✓ Privacy Policy (`/privacy-policy`)
- ✓ Terms of Service (`/terms-of-service`)
- ✓ Navigation links work
- ✓ Responsive on mobile

---

## Troubleshooting

### Email not sending?
1. **Check Brevo sender verification**: Go to Brevo → Settings → Senders, verify `noreply@anthology.ooo` is active
2. **Check API key**: Verify `BREVO_API_KEY` is correct in Vercel
3. **Check Supabase**: Contact data should still be stored even if email fails

### Form not working?
1. Check browser console for errors (F12)
2. Verify Supabase credentials in Vercel
3. Ensure `contact_submissions` table exists

### Domain not working?
1. DNS changes take 24-48 hours to propagate
2. Test with IP: Check Vercel dashboard for your app's IP
3. Use Vercel's built-in domain if DNS is problematic

---

## Post-Deployment Tasks

### 6.1 Set Up Monitoring
- Enable **Analytics** in Vercel dashboard
- Monitor Supabase database usage
- Set up email alerts for errors

### 6.2 Future Enhancements
- [ ] Add blog section (infrastructure ready, just add MDX content)
- [ ] Enable Clients section (hidden route `/clients` ready)
- [ ] Add form validation/spam protection (reCAPTCHA)
- [ ] Set up automated backups for Supabase

### 6.3 Cleanup
When ready, delete old repositories:
- `Vitta-Realty-Group` (old HTML version)
- `asi` (empty placeholder)

---

## Support

If you hit issues:
1. Check the error message in Vercel logs
2. Verify all environment variables are set
3. Check Supabase/Brevo status pages for service issues

---

**Last Updated**: July 26, 2025  
**Site**: https://www.anthology.ooo  
**Status**: Ready for production
