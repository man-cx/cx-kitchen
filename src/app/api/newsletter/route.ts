import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Verify environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create transporter with Gmail settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      }
    });

    // Log connection attempt
    console.log('Attempting to connect with email:', process.env.EMAIL_USER);

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP Verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Send confirmation email
    const info = await transporter.sendMail({
      from: {
        name: 'CX-Kitchen',
        address: process.env.EMAIL_USER
      },
      to: email,
      subject: 'Welcome to CX-Kitchen Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E76F51;">Welcome to CX-Kitchen!</h2>
          <p style="color: #333333;">Thank you for subscribing to our newsletter. You'll receive updates about:</p>
          <ul style="color: #333333;">
            <li>New AI solutions and features</li>
            <li>Productivity tips and best practices</li>
            <li>Industry insights and trends</li>
          </ul>
          <p style="color: #666666;">If you didn't subscribe to our newsletter, please ignore this email.</p>
        </div>
      `,
    });

    console.log('Message sent successfully:', info.messageId);

    // Also send notification to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Newsletter Subscription',
      text: `New subscription from: ${email}`,
    });

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    // Return more specific error message
    return NextResponse.json(
      { 
        error: 'Failed to process subscription',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 