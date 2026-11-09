import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strip line breaks so user input can't add extra mail headers
const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

export async function POST(request: NextRequest) {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  // Without credentials the contact page falls back to opening a mailto link
  if (!user || !pass) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 503 }
    );
  }

  try {
    const { from_name, from_email, subject, message } = await request.json();

    if (
      typeof from_name !== "string" ||
      typeof from_email !== "string" ||
      typeof message !== "string" ||
      !from_name.trim() ||
      !message.trim() ||
      !EMAIL_RE.test(from_email)
    ) {
      return NextResponse.json(
        { error: "Missing or invalid fields" },
        { status: 400 }
      );
    }

    const name = oneLine(from_name).slice(0, 100);
    const replyTo = oneLine(from_email).slice(0, 200);
    const emailSubject = oneLine(
      typeof subject === "string" && subject.trim()
        ? subject
        : `New message from ${name}`
    ).slice(0, 200);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: user,
      replyTo: `"${name.replace(/"/g, "")}" <${replyTo}>`,
      subject: `[Portfolio] ${emailSubject}`,
      text: `Name: ${name}\nEmail: ${replyTo}\n\n${message.slice(0, 5000)}`,
    });

    return NextResponse.json({ message: "Message sent" }, { status: 200 });
  } catch (error) {
    console.error(
      "Contact form send failed:",
      error instanceof Error ? error.message : error
    );
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
