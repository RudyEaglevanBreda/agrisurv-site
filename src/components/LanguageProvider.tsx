"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Dict, type Locale } from "@/lib/dictionaries";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "agrisurv-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Restore the visitor's saved choice on first mount.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "af") setLocaleState(saved);
  }, []);

  // Keep <html lang> in sync for accessibility / SEO.
  useEffect(() => {
    document.documentElement.lang = locale === "af" ? "af" : "en-ZA";
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* localStorage unavailable — ignore */
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
