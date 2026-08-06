"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { useLang } from "./LanguageProvider";
import { PORTAL_REGISTER_URL } from "../lib/portal";

export default function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The nav mirrors the page order. #app and #boundary used to be unreachable from
  // here — over a thousand words and nine screenshots that only scrolling could find.
  const navItems = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.boundary, href: "#boundary" },
    { label: t.nav.app, href: "#app" },
    { label: t.nav.how, href: "#process" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-forest-200 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
        <a href="#top" className="flex items-center" aria-label={t.cta.home}>
          <Logo height={44} priority className="sm:hidden" />
          <Logo height={56} priority className="hidden sm:block" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[2px] px-3 py-2 text-[13.5px] font-medium text-forest-700 transition-colors hover:bg-forest-50 hover:text-forest-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageToggle />
          <a href="#contact" className="btn-ghost btn-sm">
            {t.cta.quote}
          </a>
          <a href={PORTAL_REGISTER_URL} className="btn-primary btn-sm">
            {t.cta.portalShort}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] text-forest-800 transition-colors hover:bg-forest-50"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.cta.closeMenu : t.cta.openMenu}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-forest-200 bg-white lg:hidden"
        >
          <nav className="container-page flex flex-col py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[3px] px-3 py-3 text-base font-medium text-forest-800 transition-colors hover:bg-forest-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href={PORTAL_REGISTER_URL}
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              {t.cta.portal}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-ghost mt-2 w-full"
            >
              {t.cta.quote}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
