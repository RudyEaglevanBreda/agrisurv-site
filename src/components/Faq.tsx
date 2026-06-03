"use client";

import { Plus } from "lucide-react";
import { useLang } from "./LanguageProvider";

export default function Faq() {
  const { t } = useLang();

  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-forest-800 sm:text-4xl">
            {t.faq.heading}
          </h2>
          <p className="mt-4 text-lg text-forest-600">{t.faq.sub}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {t.faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-forest-100 bg-white px-5 shadow-soft transition-colors open:border-leaf-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-display text-base font-semibold text-forest-800 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-leaf-50 text-leaf-700 transition-transform duration-200 group-open:rotate-45">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="pb-5 pr-10 text-[15px] leading-relaxed text-forest-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
