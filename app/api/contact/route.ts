import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Resend lazily to avoid build-time errors
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, source } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: 'Stephen\'s Local Sites <stephen@krezzo.com>',
      to: ['stephen@krezzo.com'],
      subject: `New Inquiry from ${source || 'Website'}: ${name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Source:</strong> ${source || 'Website'}</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              ${message ? `<hr /><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
            `,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error, null, 2));
      return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

