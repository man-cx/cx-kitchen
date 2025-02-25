import nodemailer from 'nodemailer';

// Create a transporter using Office 365 SMTP
export const emailTransporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Function to send newsletter emails
export async function sendNewsletterEmail(recipientEmail: string) {
  try {
    const info = await emailTransporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: 'Welcome to CX-Kitchen Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #E76F51;">Welcome to CX-Kitchen!</h1>
          <p>Thank you for subscribing to our newsletter. We're excited to share with you:</p>
          <ul>
            <li>Latest AI trends in business</li>
            <li>Productivity tips and tricks</li>
            <li>Exclusive offers and updates</li>
          </ul>
          <p>Stay tuned for our next update!</p>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 12px;">
              CX-Kitchen - Your recipe for success
            </p>
          </div>
        </div>
      `,
    });
    return { success: true, messageId: info.messageId };
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
} 