import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY || '');
const fromEmail = process.env.FROM_EMAIL || '';

export async function POST(req) {
  try {
    // Check for required environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: "Server configuration error: Missing API key" },
        { status: 500 }
      );
    }

    if (!process.env.FROM_EMAIL) {
      console.error('FROM_EMAIL is not set');
      return NextResponse.json(
        { error: "Server configuration error: Missing sender email" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
