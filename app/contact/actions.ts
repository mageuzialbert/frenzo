"use server";

import { Resend } from "resend";
import { CONTACT, BRAND } from "@/lib/content";

export type ContactState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Partial<Record<string, string>>;
};

const REQUIRED_FIELDS = ["name", "email", "projectType", "message"] as const;

const FROM = `${BRAND.short} Website <briefs@${new URL(BRAND.url).hostname.replace(/^www\./, "")}>`;
const TO = CONTACT.email;

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const data: Record<string, string> = {};
  for (const [k, v] of formData.entries()) {
    data[k] = typeof v === "string" ? v.trim() : "";
  }

  // --- validation ---
  const errors: Record<string, string> = {};
  for (const f of REQUIRED_FIELDS) {
    if (!data[f] || data[f].length < 2) errors[f] = "Required";
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Looks invalid";
  }
  if (Object.keys(errors).length) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: errors,
    };
  }

  // --- send ---
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return {
      ok: false,
      message:
        "Sorry — our message system is briefly offline. Please WhatsApp or call us instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const subject = `New Frenzo brief — ${data.name}${data.company ? ` (${data.company})` : ""}`;

    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: data.email,
      subject,
      text: buildText(data),
      html: buildHtml(data),
      headers: {
        "X-Entity-Ref-ID": `frenzo-${Date.now()}`,
      },
      tags: [
        { name: "source", value: "website-contact" },
        { name: "project_type", value: slug(data.projectType) },
      ],
    });

    if (error) {
      console.error("[contact] resend error:", error);
      return {
        ok: false,
        message:
          "Couldn't send right now. Please WhatsApp or call us — we'd still love to hear from you.",
      };
    }

    return {
      ok: true,
      message: "Thanks — we'll be in touch within 1 business day.",
    };
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return {
      ok: false,
      message:
        "Something went wrong on our side. Please WhatsApp or call us instead.",
    };
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function buildText(d: Record<string, string>) {
  return [
    `New brief from the Frenzo website`,
    ``,
    `Name:        ${d.name}`,
    d.company ? `Company:     ${d.company}` : null,
    `Email:       ${d.email}`,
    d.phone ? `Phone:       ${d.phone}` : null,
    `Project:     ${d.projectType}`,
    d.quantity ? `Quantity:    ${d.quantity}` : null,
    d.deadline ? `Deadline:    ${d.deadline}` : null,
    ``,
    `Message:`,
    d.message,
    ``,
    `— Reply directly to this email to reach ${d.name}.`,
  ]
    .filter(Boolean)
    .join("\n");
}

function buildHtml(d: Record<string, string>) {
  const row = (label: string, value?: string) =>
    value
      ? `<tr><td style="padding:6px 16px 6px 0;color:#6B7280;font-size:13px;white-space:nowrap;vertical-align:top;">${escape(label)}</td><td style="padding:6px 0;color:#0A0A0F;font-size:14px;">${escape(value)}</td></tr>`
      : "";

  return `<!doctype html>
<html><body style="margin:0;background:#FAFAF7;font-family:-apple-system,Segoe UI,Inter,Roboto,Helvetica,Arial,sans-serif;color:#0A0A0F;">
  <div style="max-width:560px;margin:0 auto;padding:32px 24px;">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:24px;">
      <span style="font-weight:700;font-size:20px;letter-spacing:-0.02em;">Frenzo</span>
      <span style="display:inline-block;width:8px;height:8px;border-radius:999px;background:#E5097F;"></span>
    </div>

    <h1 style="margin:0 0 8px;font-size:22px;letter-spacing:-0.02em;">New brief — ${escape(d.name)}</h1>
    <p style="margin:0 0 24px;color:#6B7280;font-size:14px;">From the website contact form.</p>

    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      ${row("Name", d.name)}
      ${row("Company", d.company)}
      ${row("Email", d.email)}
      ${row("Phone", d.phone)}
      ${row("Project", d.projectType)}
      ${row("Quantity", d.quantity)}
      ${row("Deadline", d.deadline)}
    </table>

    <div style="border-top:1px solid #E5E7EB;padding-top:16px;">
      <div style="color:#6B7280;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:8px;">Message</div>
      <div style="white-space:pre-wrap;font-size:15px;line-height:1.55;">${escape(d.message)}</div>
    </div>

    <p style="margin-top:32px;color:#6B7280;font-size:12px;">
      Reply to this email to reach <strong style="color:#0A0A0F;">${escape(d.name)}</strong> at ${escape(d.email)}.
    </p>
  </div>
</body></html>`;
}
