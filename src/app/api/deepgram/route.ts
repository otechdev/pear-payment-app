import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
    return NextResponse.json({
      key: "demo-key-api-disabled-for-deployment",
      message: "This is a mock API key for demo purposes"
    });
}
