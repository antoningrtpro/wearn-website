import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_FROM_EMAIL, CONTACT_NOTIFY_EMAILS } from "@/lib/contact-config";

type ContactPayload = {
  company?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { company, contactName, email, phone, message } = payload;

  if (!company || !contactName || !email || !message) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — contact email not sent.");
    return NextResponse.json({ error: "email_not_configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_NOTIFY_EMAILS,
      replyTo: email,
      subject: `Nouvelle demande de campagne — ${company}`,
      text: [
        `Entreprise : ${company}`,
        `Contact : ${contactName}`,
        `Email : ${email}`,
        phone ? `Téléphone : ${phone}` : null,
        "",
        "Message :",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email send failed:", err);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
