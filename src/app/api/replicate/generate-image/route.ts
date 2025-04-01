import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // For demo purposes, return a mocked response
  return NextResponse.json({
    success: true,
    image: "https://placehold.co/600x400?text=Demo+Image",
    message: "API mocked for demo deployment"
  });
}
