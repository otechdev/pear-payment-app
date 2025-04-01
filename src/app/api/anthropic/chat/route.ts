import { NextResponse } from 'next/server';

export const runtime = "edge";

export async function POST(req: Request) {
  // For demo purposes, return a mocked response
  return new Response(
    JSON.stringify({
      content: [
        {
          text: "This is a mock response for demo purposes. The Anthropic API integration has been disabled for this deployment."
        }
      ]
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}
