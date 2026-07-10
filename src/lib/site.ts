/**
 * Single source of truth for site-wide content and contact details.
 *
 * ⚠️ PLACEHOLDERS to replace before launch are wrapped in {{ }}:
 *   - WHATSAPP_NUMBER  → international format, digits only (e.g. 27821234567)
 *   - PHONE_DISPLAY    → human-readable phone (e.g. +27 82 123 4567)
 *   - FORMSPREE_ID     → create a free form at https://formspree.io and paste the ID
 *                        (or swap the form action for your own endpoint)
 */

export const site = {
  name: "AgriSurv",
  tagline: "Crop health. Data insights. Better yields.",
  domain: "agrisurv.co.za",
  url: "https://agrisurv.co.za",

  email: "info@technosurveys.co.za",
  phoneDisplay: "069 808 6428",
  whatsappNumber: "27698086428",

  // --- Replace this placeholder ------------------------------------------
  formspreeId: "{{FORMSPREE_ID}}",
  // ------------------------------------------------------------------------

  serviceArea: "South Africa",

  // Parent company / credentials
  parentCompany: "Techno Survey Solutions",
  parentUrl: "https://technosurveys.co.za",
  sacaaLicence: "SACAA.UASOC.0001.2004/G1240D",
  whatsappMessage:
    "Hi AgriSurv, I'd like a quote for drone NDVI crop analysis on my farm.",
} as const;

/** Build a click-to-chat WhatsApp link with a pre-filled message. */
export function whatsappLink(message: string = site.whatsappMessage): string {
  const digits = site.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Build a mailto link with subject + body. */
export function mailtoLink(subject: string, body = ""): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${site.email}?${params.toString()}`;
}

export const nav = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "Equipment", href: "#equipment" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
] as const;
