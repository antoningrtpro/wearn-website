const DEFAULT_NOTIFY_EMAILS = ["antonin@wearn.fr"];

// Admins can add more recipients without touching code by setting
// CONTACT_NOTIFY_EMAILS to a comma-separated list in the environment.
export const CONTACT_NOTIFY_EMAILS = process.env.CONTACT_NOTIFY_EMAILS
  ? process.env.CONTACT_NOTIFY_EMAILS.split(",").map((email) => email.trim()).filter(Boolean)
  : DEFAULT_NOTIFY_EMAILS;

export const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Wearn <onboarding@resend.dev>";
