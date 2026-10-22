"use server";

import { siteConfig } from "@/config/site.config";

export type ContactField = "name" | "email" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<ContactField, string>>;
  /** Echoed back on error so the form keeps what the visitor typed. */
  values?: Partial<Record<ContactField, string>>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Stub handler: validates and returns. Wire up delivery (Resend, Formspree, a CRM…)
 * where marked before going live.
 */
export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (formData.get("company")) return { status: "success" };

  const values = {
    name: String(formData.get("name") ?? "").trim().slice(0, 200),
    email: String(formData.get("email") ?? "").trim().slice(0, 200),
    message: String(formData.get("message") ?? "").trim().slice(0, 5000),
  };

  const messages = siteConfig.contact.form.errors;
  const errors: ContactState["errors"] = {};
  if (!values.name) errors.name = messages.name;
  if (!EMAIL.test(values.email)) errors.email = messages.email;
  if (values.message.length < 10) errors.message = messages.message;
  if (Object.keys(errors).length) return { status: "error", errors, values };

  // TODO: send `values` somewhere before launch.
  return { status: "success" };
}
