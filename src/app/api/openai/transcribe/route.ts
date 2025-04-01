import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // For demo purposes, return a mocked response
  return NextResponse.json({
    success: true,
    text: "This is a mock transcription for demo purposes.",
    message: "API mocked for demo deployment"
  });
}
