import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Server-side verification
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER || "isharapathumsenarath@gmail.com";

    // If SMTP credentials aren't filled yet, log the message data mock-style and return success
    if (!user || !pass) {
      console.warn(
        "\x1b[33m%s\x1b[0m",
        "[CONTACT API WARNING] SMTP_USER or SMTP_PASS environment variables are missing from .env.local."
      );
      console.log("[CONTACT API MOCK DATA LOG]:", { name, email, subject, message });

      return NextResponse.json(
        { message: "Simulated mail transfer success (SMTP config missing)" },
        { status: 200 }
      );
    }

    // Configure SMTP transport engine
    const transporter = nodemailer.createTransport({
      host,
      port: Number(port) || 587,
      secure: Number(port) === 465, // True for port 465, false for 587
      auth: {
        user,
        pass,
      },
    });

    // Formulate structured HTML email
    const mailOptions = {
      from: `"${name}" <${user}>`, // Enforce authenticated sender envelope
      replyTo: email,              // Sets the visitor's email as the Reply-To address
      to: receiver,
      subject: `[Portfolio Inquiry] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; background-color: #f9fafb;">
          <h2 style="font-size: 18px; color: #2563eb; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">New Message Received</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 120px; color: #4b5563;">Visitor Name:</td>
              <td style="padding: 6px 0; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Visitor Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Subject Title:</td>
              <td style="padding: 6px 0; color: #111827; font-weight: 500;">${subject}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 16px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 13px; color: #374151; white-space: pre-wrap;">
            <strong style="display: block; margin-bottom: 6px; color: #4b5563;">Message Details:</strong>
            ${message}
          </div>
          
          <p style="font-size: 10px; color: #9ca3af; margin-top: 28px; text-align: center; border-t: 1px solid #e5e7eb; padding-top: 12px;">
            This email was sent dynamically via the API service on Ishara Senarath's Personal Portfolio.
          </p>
        </div>
      `,
    };

    // Dispatches the mail packet
    const info = await transporter.sendMail(mailOptions);
    console.log("[CONTACT API SUCCESS] Email successfully dispatched:", info.messageId);

    return NextResponse.json(
      { message: "Email sent successfully", messageId: info.messageId },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[CONTACT API ERROR] SMTP dispatch failed:", error);
    return NextResponse.json(
      { error: "Failed to dispatch email", details: error.message },
      { status: 500 }
    );
  }
}
