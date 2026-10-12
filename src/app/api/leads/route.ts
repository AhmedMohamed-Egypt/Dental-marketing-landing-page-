import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { lead, turnstileToken } = body;

    const {
      name,
      phone,
      interest,
      preferredDay,
      preferredTime,
      website,
    } = lead ?? {};

    // Honeypot
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (
      !name ||
      !phone ||
      !interest ||
      !preferredDay ||
      !preferredTime
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Turnstile token validation
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Turnstile verification is required" },
        { status: 400 }
      );
    }

    // Verify Turnstile with Cloudflare
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: turnstileToken,
        }),
      }
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      console.error(
        "Turnstile verification failed:",
        turnstileResult
      );

      return NextResponse.json(
        { error: "Human verification failed" },
        { status: 403 }
      );
    }

    // Insert lead into Supabase
    const { error } = await supabase
      .from("leads")
      .insert({
        name,
        phone,
        interest,
        preferred_day: preferredDay,
        preferred_time: preferredTime,
        source: "website",
      });

    if (error) {
      console.error("Supabase error:", error);

      return NextResponse.json(
        { error: "Failed to submit lead" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);

    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}