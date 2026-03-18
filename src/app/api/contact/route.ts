import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.replace(/\r/g, "").trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMessageHtml(message: string): string {
  return escapeHtml(message).replace(/\n/g, "<br />");
}

function formatMessageText(message: string): string {
  return message.replace(/\n{3,}/g, "\n\n");
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      organization: body.organization ? sanitize(body.organization) : "",
      subject: sanitize(body.subject),
      message: sanitize(body.message),
    };

    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number(getRequiredEnv("SMTP_PORT"));
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS");
    const smtpFrom = getRequiredEnv("SMTP_FROM");
    const contactRecipient = getRequiredEnv("CONTACT_RECIPIENT");

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const organizationLine = sanitizedData.organization || "Not provided";
    const submittedAt = new Intl.DateTimeFormat("en-GB", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Africa/Kampala",
    }).format(new Date());

    const html = `
      <div style="margin:0;padding:32px 16px;background:#f4f7fb;font-family:Arial,sans-serif;color:#10233f;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #dbe5f0;border-radius:18px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px;background:linear-gradient(135deg,#0f3d7a 0%,#1f7a8c 100%);color:#ffffff;">
              <p style="margin:0 0 8px;font-size:12px;letter-spacing:1.6px;text-transform:uppercase;opacity:0.85;">CECOS Website</p>
              <h1 style="margin:0;font-size:28px;line-height:1.2;">New contact form submission</h1>
              <p style="margin:12px 0 0;font-size:14px;line-height:1.6;opacity:0.9;">A visitor has sent a new message through the website contact page.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:0 0 24px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                      <tr>
                        <td style="width:50%;padding:0 16px 16px 0;vertical-align:top;">
                          <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:#5f738c;">Name</p>
                          <p style="margin:0;font-size:16px;line-height:1.6;color:#10233f;">${escapeHtml(sanitizedData.name)}</p>
                        </td>
                        <td style="width:50%;padding:0 0 16px 16px;vertical-align:top;">
                          <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:#5f738c;">Email</p>
                          <p style="margin:0;font-size:16px;line-height:1.6;color:#10233f;">${escapeHtml(sanitizedData.email)}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="width:50%;padding:0 16px 16px 0;vertical-align:top;">
                          <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:#5f738c;">Organization</p>
                          <p style="margin:0;font-size:16px;line-height:1.6;color:#10233f;">${escapeHtml(organizationLine)}</p>
                        </td>
                        <td style="width:50%;padding:0 0 16px 16px;vertical-align:top;">
                          <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:#5f738c;">Submitted</p>
                          <p style="margin:0;font-size:16px;line-height:1.6;color:#10233f;">${escapeHtml(submittedAt)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 24px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:#5f738c;">Subject</p>
                    <div style="padding:16px 18px;border:1px solid #dbe5f0;border-radius:14px;background:#f8fbff;font-size:16px;line-height:1.6;color:#10233f;">
                      ${escapeHtml(sanitizedData.subject)}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;color:#5f738c;">Message</p>
                    <div style="padding:18px;border:1px solid #dbe5f0;border-radius:14px;background:#f8fbff;font-size:16px;line-height:1.7;color:#10233f;">
                      ${formatMessageHtml(sanitizedData.message)}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    `;

    const text = [
      "New contact form submission from the CECOS website",
      "",
      `Name: ${sanitizedData.name}`,
      `Email: ${sanitizedData.email}`,
      `Organization: ${organizationLine}`,
      `Submitted: ${submittedAt}`,
      `Subject: ${sanitizedData.subject}`,
      "",
      "Message:",
      formatMessageText(sanitizedData.message),
    ].join("\n");

    await transporter.sendMail({
      from: smtpFrom,
      to: contactRecipient,
      replyTo: sanitizedData.email,
      subject: `[CECOS Website] ${sanitizedData.subject}`,
      text,
      html,
    });

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
