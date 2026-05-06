"use server";

export type ContactState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Partial<Record<string, string>>;
};

const REQUIRED_FIELDS = ["name", "email", "projectType", "message"] as const;

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const data: Record<string, string> = {};
  for (const [k, v] of formData.entries()) {
    data[k] = typeof v === "string" ? v : "";
  }

  const errors: Record<string, string> = {};
  for (const f of REQUIRED_FIELDS) {
    if (!data[f] || data[f].trim().length < 2) {
      errors[f] = "Required";
    }
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

  // TODO(client): wire to a real endpoint (e.g., Resend, Formspree, or your CRM).
  // Placeholder: pretend to POST and succeed.
  await new Promise((r) => setTimeout(r, 700));

  return {
    ok: true,
    message: "Thanks — we'll be in touch within 1 business day.",
  };
}
