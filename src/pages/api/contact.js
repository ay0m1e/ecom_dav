import { Resend } from "resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ENQUIRY_TYPES = ["Solo talking drum", "Klassic Band", "Other"];

// Shared inbox for both the bookings and contact forms.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { formType, name, email, message, enquiryType, ...rest } = req.body ?? {};

  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ error: "name is required" });
  }
  if (!email || typeof email !== "string" || !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: "email is invalid" });
  }
  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "message is required" });
  }
  if (formType === "booking" && !ENQUIRY_TYPES.includes(enquiryType)) {
    return res.status(400).json({ error: "enquiryType is invalid" });
  }

  const label = formType === "booking" ? "booking" : "contact";
  const subject = `[Kay Drumz ${label}] ${name}`;

  const fields = {
    formType: label,
    name,
    email,
    ...(enquiryType ? { enquiryType } : {}),
    message,
    ...rest,
  };
  const body = Object.entries(fields)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: process.env.CONTACT_EMAIL,
      subject,
      text: body,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again shortly." });
  }
}
