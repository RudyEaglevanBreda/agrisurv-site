"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { site, whatsappLink, mailtoLink } from "@/lib/site";
import { useLang } from "./LanguageProvider";

type Status = "idle" | "submitting" | "success" | "error";

const isFormConfigured = !site.formspreeId.includes("{{");

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — silently accept bot submissions without sending.
    if (data.get("_gotcha")) {
      setStatus("success");
      return;
    }

    setStatus("submitting");

    // No Formspree ID yet → open the user's email client with the details.
    if (!isFormConfigured) {
      const body = [
        `Name: ${data.get("name") ?? ""}`,
        `Farm / business: ${data.get("farm") ?? ""}`,
        `Email: ${data.get("email") ?? ""}`,
        `Phone: ${data.get("phone") ?? ""}`,
        `Approx. hectares: ${data.get("hectares") ?? ""}`,
        `Crop(s): ${data.get("crop") ?? ""}`,
        "",
        `${data.get("message") ?? ""}`,
      ].join("\n");
      window.location.href = mailtoLink(
        `Quote request — ${data.get("name") ?? "AgriSurv"}`,
        body,
      );
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const hasPhone = !site.phoneDisplay.includes("{{");

  // Only surface contact methods that are actually configured, so no
  // placeholder tokens ever leak into the UI.
  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.methods.email,
      value: site.email,
      href: mailtoLink("Enquiry from agrisurv.co.za"),
    },
    {
      icon: MessageCircle,
      label: t.contact.methods.whatsapp,
      value: t.contact.methods.whatsappValue,
      href: whatsappLink(),
      external: true,
    },
    ...(hasPhone
      ? [
          {
            icon: Phone,
            label: t.contact.methods.phone,
            value: site.phoneDisplay,
            href: `tel:${site.phoneDisplay.replace(/\s/g, "")}`,
          },
        ]
      : []),
    {
      icon: MapPin,
      label: t.contact.methods.serviceArea,
      value: t.common.serviceArea,
    },
  ];

  return (
    <section id="contact" className="bg-forest-800 py-20 text-white sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: invitation + methods */}
          <div>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-leaf-300">
              {t.contact.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t.contact.heading}
            </h2>
            <p className="mt-4 text-lg text-forest-100/80">{t.contact.sub}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactMethods.map((m) => {
                const content = (
                  <>
                    <div className="flex h-10 w-10 items-center justify-center rounded-[3px] bg-white/10 text-leaf-300">
                      <m.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-forest-100/60">
                        {m.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-white">
                        {m.value}
                      </p>
                    </div>
                  </>
                );
                return m.href ? (
                  <a
                    key={m.label}
                    href={m.href}
                    {...(m.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-3 rounded-[3px] border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={m.label}
                    className="flex items-center gap-3 rounded-[3px] border border-white/10 bg-white/5 p-3"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-6 w-full bg-[#25D366] text-white hover:bg-[#1ebe5a] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t.contact.whatsappBtn}
            </a>
          </div>

          {/* Right: form */}
          <div className="rounded-[3px] bg-white p-6 text-forest-800 shadow-none sm:p-8">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-leaf-500" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold text-forest-800">
                  {t.contact.successTitle}
                </h3>
                <p className="mt-2 max-w-sm text-forest-600">
                  {isFormConfigured
                    ? t.contact.successBodyConfigured
                    : t.contact.successBodyFallbackPre + site.email + "."}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-ghost mt-6"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="font-display text-lg font-bold text-forest-800">
                  {t.contact.formTitle}
                </p>

                {/* Honeypot (hidden from humans) */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label={t.contact.fields.name}
                    name="name"
                    required
                    autoComplete="name"
                    placeholder={t.contact.placeholders.name}
                  />
                  <Field
                    label={t.contact.fields.farm}
                    name="farm"
                    autoComplete="organization"
                    placeholder={t.contact.placeholders.farm}
                  />
                  <Field
                    label={t.contact.fields.email}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={t.contact.placeholders.email}
                  />
                  <Field
                    label={t.contact.fields.phone}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={t.contact.placeholders.phone}
                  />
                  <Field
                    label={t.contact.fields.hectares}
                    name="hectares"
                    type="number"
                    min={0}
                    placeholder={t.contact.placeholders.hectares}
                  />
                  <Field
                    label={t.contact.fields.crop}
                    name="crop"
                    placeholder={t.contact.placeholders.crop}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-forest-800"
                  >
                    {t.contact.fields.message}{" "}
                    <span className="text-leaf-600" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={t.contact.placeholders.message}
                    className="w-full rounded-[3px] border border-forest-200 bg-cream px-3.5 py-2.5 text-[15px] text-forest-800 placeholder:text-forest-400 focus:border-leaf-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf-500/30"
                  />
                </div>

                {status === "error" && (
                  <p
                    role="alert"
                    className="rounded-[3px] bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-700"
                  >
                    {t.contact.errorPre}
                    <a href={mailtoLink("Enquiry")} className="underline">
                      {site.email}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.send}
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-forest-500">
                  {t.contact.preferEmailPre}
                  <a
                    href={mailtoLink("Enquiry")}
                    className="font-medium text-forest-700 underline"
                  >
                    {site.email}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Reusable labelled input
---------------------------------------------------------------------------- */
function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  min?: number;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-forest-800"
      >
        {label}{" "}
        {required && (
          <span className="text-leaf-600" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        min={min}
        className="w-full rounded-[3px] border border-forest-200 bg-cream px-3.5 py-2.5 text-[15px] text-forest-800 placeholder:text-forest-400 focus:border-leaf-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf-500/30"
      />
    </div>
  );
}
