import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    // Get form data
    const formData = await request.formData();
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const company = formData.get('company');
    const phone = formData.get('phone');
    const interest = formData.get('interest');
    const message = formData.get('message');

    // Validate required fields
    if (!firstName || !lastName || !email || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      New Demo Request
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company || 'Not provided'}
      Phone: ${phone || 'Not provided'}
      Interest: ${interest}
      
      Additional Information:
      ${message || 'No additional information provided'}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself or a designated email
      subject: `Demo Request from ${firstName} ${lastName}`,
      text: emailContent,
    });

    // Send confirmation email to the user
    const confirmationContent = `
      Dear ${firstName},

      Thank you for your interest in CX-Kitchen! We've received your demo request and will be in touch shortly.

      Here's a summary of your request:
      - Interest: ${interest}
      ${company ? `- Company: ${company}` : ''}
      
      We look forward to showing you how our AI-powered solutions can help transform your business.

      Best regards,
      The CX-Kitchen Team
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email as string,
      subject: 'Thank You for Your Demo Request - CX-Kitchen',
      text: confirmationContent,
    });

    return NextResponse.json(
      { message: 'Demo request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Failed to process demo request' },
      { status: 500 }
    );
  }
} 