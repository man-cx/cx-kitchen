import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    // Check if environment variables exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      return NextResponse.json({
        success: false,
        stage: 'env_check',
        error: 'Missing email configuration. Please check EMAIL_USER and EMAIL_PASSWORD in .env.local'
      });
    }

    console.log('Testing connection with:', process.env.EMAIL_USER);

    // Try different SMTP configurations
    const configs = [
      {
        name: 'Gmail (Primary)',
        settings: {
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          }
        }
      },
      {
        name: 'Gmail (Alternative)',
        settings: {
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          }
        }
      }
    ];

    const results = [];

    // Test each configuration
    for (const config of configs) {
      try {
        console.log(`Testing ${config.name}...`);
        const transporter = nodemailer.createTransport(config.settings);
        
        // Try to verify the connection
        const verified = await transporter.verify();
        results.push({
          name: config.name,
          success: true,
          verified
        });
      } catch (error) {
        results.push({
          name: config.name,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    // Check if any configuration worked
    const anySuccess = results.some(r => r.success);

    return NextResponse.json({
      success: anySuccess,
      stage: 'connection_test',
      results,
      credentials: {
        email: process.env.EMAIL_USER,
        // Don't send the actual password, just its length for verification
        passwordLength: process.env.EMAIL_PASSWORD?.length
      }
    });

  } catch (error) {
    console.error('Test failed:', error);
    return NextResponse.json({
      success: false,
      stage: 'unknown',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 