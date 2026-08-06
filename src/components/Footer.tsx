"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { site, whatsappLink, mailtoLink } from "@/lib/site";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  // The footer carries the full list, including the sections the header nav drops.
  const navItems = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.boundary, href: "#boundary" },
    { label: t.nav.app, href: "#app" },
    { label: t.nav.how, href: "#process" },
    { label: t.nav.equipment, href: "#equipment" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <footer className="border-t border-forest-100 bg-cream">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo height={64} />
            <p className="mt-4 text-sm leading-relaxed text-forest-600">
              {t.footer.description}
            </p>
            <p className="mt-4 text-sm text-forest-600">
              {t.footer.divisionPre}
              <a
                href={site.parentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-forest-700 underline decoration-forest-200 underline-offset-2 transition-colors hover:text-leaf-700"
              >
                {site.parentCompany}
              </a>
            </p>
            <p className="mt-1 text-xs text-forest-500">
              {t.footer.licence} · {site.sacaaLicence}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-forest-800">
              {t.footer.explore}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-forest-600 transition-colors hover:text-leaf-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-forest-800">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={mailtoLink("Enquiry from agrisurv.co.za")}
                  className="flex items-center gap-2 text-sm text-forest-600 transition-colors hover:text-leaf-700"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-forest-600 transition-colors hover:text-leaf-700"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {t.footer.whatsappUs}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${site.whatsappNumber}`}
                  className="flex items-center gap-2 text-sm text-forest-600 transition-colors hover:text-leaf-700"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="text-sm text-forest-600">{t.common.serviceArea}</li>
            </ul>
            <a href="#contact" className="btn-primary mt-5">
              {t.footer.quote}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-forest-100 pt-6 text-sm text-forest-500 sm:flex-row">
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
          <p>
            {site.domain} · {t.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
