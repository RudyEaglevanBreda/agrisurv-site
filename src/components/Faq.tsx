"use client";

import { Plus } from "lucide-react";
import SectionHead from "./SectionHead";
import { useLang } from "./LanguageProvider";

export default function Faq() {
  const { t } = useLang();

  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHead index="08" kicker={t.faq.eyebrow} heading={t.faq.heading} sub={t.faq.sub} />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {t.faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-[3px] border border-forest-200 bg-white px-5 shadow-none transition-colors open:border-leaf-200"
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
