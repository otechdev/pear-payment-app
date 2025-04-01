import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for waitlist emails (will reset on server restart)
const waitlistEmails: { email: string, timestamp: Date, source?: string }[] = [];

export async function POST(req: NextRequest) {
  try {
    // Get request body
    const { email, source } = await req.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address', success: false },
        { status: 400 }
      );
    }

    // Check if email already exists
    const emailExists = waitlistEmails.some(entry => entry.email === email);
    if (emailExists) {
      return NextResponse.json(
        { 
          message: 'This email is already on our waitlist',
          success: false 
        },
        { status: 409 }
      );
    }

    // Add to waitlist
    waitlistEmails.push({
      email,
      timestamp: new Date(),
      source: source || 'website'
    });

    console.log(`Added to waitlist: ${email} (total: ${waitlistEmails.length})`);

    // Return success response
    return NextResponse.json(
      { 
        message: 'Successfully added to waitlist',
        success: true 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in waitlist API:', error);

    // Generic error response
    return NextResponse.json(
      { 
        message: 'Failed to add to waitlist', 
        success: false 
      },
      { status: 500 }
    );
  }
}

// GET endpoint for retrieving waitlist entries
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { 
      entries: waitlistEmails,
      count: waitlistEmails.length
    },
    { status: 200 }
  );
} 