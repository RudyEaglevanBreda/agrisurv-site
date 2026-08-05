"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Zoomable from "./Zoomable";
import { useLang } from "./LanguageProvider";
import { PORTAL_REGISTER_URL } from "../lib/portal";

/** Real, unretouched screenshots from app.agrisurv.co.za over our Swellendam demo field —
 * matched by index to `t.appTour.phones[]`. */
const PHONE_SHOTS = [
  "/process/app-today.webp",
  "/process/app-field-ndvi.webp",
  "/process/app-spot-clean.webp",
  "/process/app-wizard-zones.webp",
];

export default function AppTour() {
  const { t } = useLang();
  const a = t.appTour;

  return (
    <section id="app" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{a.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-forest-800 sm:text-4xl">
            {a.heading}
          </h2>
          <p className="mt-4 text-lg text-forest-600">{a.sub}</p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {a.phones.map((ph, i) => (
            <Reveal key={ph.title} delay={(i % 4) * 80}>
              <figure className="h-full">
                <Zoomable src={PHONE_SHOTS[i]} alt={ph.title}>
                  <div className="overflow-hidden rounded-[1.75rem] border-[6px] border-forest-800 bg-forest-800 shadow-card transition-shadow duration-300 hover:shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={PHONE_SHOTS[i]}
                      alt={ph.title}
                      loading="lazy"
                      className="block w-full rounded-[1.4rem]"
                    />
                  </div>
                </Zoomable>
                <figcaption className="mt-4">
                  <h3 className="font-display text-base font-bold text-forest-800">{ph.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-forest-600">{ph.body}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 grid items-center gap-8 rounded-3xl border border-forest-100 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1.4fr_1fr]">
            <Zoomable src="/process/app-desktop-field.webp" alt={a.desktop.title}>
              <div className="overflow-hidden rounded-2xl border border-forest-100 shadow-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/process/app-desktop-field.webp"
                  alt={a.desktop.title}
                  loading="lazy"
                  className="block w-full"
                />
              </div>
            </Zoomable>
            <div>
              <h3 className="font-display text-xl font-bold text-forest-800 sm:text-2xl">
                {a.desktop.title}
              </h3>
              <p className="mt-3 leading-relaxed text-forest-600">{a.desktop.body}</p>
              <p className="mt-4 text-[13px] font-medium text-forest-500">{a.note}</p>
              <a href={PORTAL_REGISTER_URL} className="btn-primary mt-6">
                {a.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
