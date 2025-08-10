import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { from_name, from_email, subject, message } = await request.json();

    // Basic validation
    if (!from_name || !from_email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // For now, we'll use a simple approach that creates a formatted message
    // You can integrate with services like EmailJS, Formspree, or SendGrid later

    // Create formatted email content for backup method
    const emailSubject = subject || `New message from ${from_name}`;
    const emailBody = `
Hello Meraj,

You have received a new message from your portfolio contact form:

Name: ${from_name}
Email: ${from_email}
Subject: ${emailSubject}

Message:
${message}

---
This message was sent from your portfolio contact form.
You can reply directly to: ${from_email}
    `.trim();

    // For development, we'll log the message and return success
    console.log("📧 New Contact Form Message:");
    console.log("From:", from_name, `<${from_email}>`);
    console.log("Subject:", emailSubject);
    console.log("Message:", message);
    console.log("---");

    // Create mailto URL for fallback
    const mailtoUrl = `mailto:mdmerajmridha34@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    return NextResponse.json(
      {
        message: "Message received successfully",
        mailtoUrl: mailtoUrl,
        fallback: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
