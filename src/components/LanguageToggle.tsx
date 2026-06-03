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
      className={`inline-flex items-center rounded-full border border-forest-200 bg-white p-0.5 ${className}`}
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
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
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
