"use client";

import { useLang } from "./LanguageProvider";
import { dictionaries, type Locale } from "@/lib/dictionaries";

const LOCALES: Locale[] = ["en", "af"];

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.lang.choose}
      className={`inline-flex items-center rounded-[2px] border border-forest-200 bg-white p-0.5 ${className}`}
    >
      {LOCALES.map((l) => {
        const active = locale === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            aria-label={l === "en" ? dictionaries[l].lang.english : dictionaries[l].lang.afrikaans}
            /* 40px tall inside a 2px-padded group clears the 44px touch floor on a
               phone; the pointer-only header can shrink it back down. */
            className={`min-h-[40px] min-w-[44px] cursor-pointer rounded-[1px] px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors lg:min-h-0 lg:min-w-0 lg:py-1.5 ${
              active
                ? "bg-leaf-500 text-white"
                : "text-forest-600 hover:text-forest-900"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
