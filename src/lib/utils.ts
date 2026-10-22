import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge the custom tokens from tokens.css so e.g. `py-6` overrides `py-section`.
const twMerge = extendTailwindMerge({
  extend: { theme: { spacing: ["gutter", "section"], container: ["content", "prose"] } },
});

/** Merge class names, letting later Tailwind classes win. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Normalise a phone number for `tel:` links: keeps a leading + and digits only. */
export function formatPhone(phone: string) {
  const trimmed = phone.trim();
  const digits = trimmed.replace(/\D/g, "");
  return trimmed.startsWith("+") ? `+${digits}` : digits;
}

/** Build a wa.me link from a number in international format, with an optional prefilled message. */
export function whatsappLink(phone: string, message?: string) {
  const url = `https://wa.me/${phone.replace(/\D/g, "")}`;
  return message ? `${url}?text=${encodeURIComponent(message)}` : url;
}
