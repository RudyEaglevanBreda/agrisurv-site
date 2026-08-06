"use client";

import { ArrowRight, Check, Plane } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";
import { PORTAL_REGISTER_URL } from "../lib/portal";

/**
 * The offer in one screen: what costs nothing, and what a flight adds.
 *
 * This replaced a six-card "services" menu that still described the 2024
 * business (flights only) and left the free app — the site's primary CTA —
 * unexplained anywhere on the page.
 */
export default function WhatYouGet() {
  const { t } = useLang();
  const o = t.offer;

  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{o.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-forest-800 sm:text-4xl">
            {o.heading}
          </h2>
          <p className="mt-4 text-lg text-forest-600">{o.sub}</p>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          {/* Free */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-forest-100 bg-cream p-7 shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-leaf-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {o.free.label}
                </span>
                <span className="font-display text-3xl font-extrabold text-forest-800">
                  {o.free.price}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-forest-800">{o.free.title}</h3>
              <ul className="mt-5 flex-1 space-y-3">
                {o.free.items.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-forest-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-leaf-600" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={PORTAL_REGISTER_URL} className="btn-primary mt-7 w-full">
                {o.free.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          {/* Paid */}
          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-3xl border-2 border-forest-800 bg-white p-7 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-800 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  <Plane className="h-3.5 w-3.5" aria-hidden="true" />
                  {o.paid.label}
                </span>
                <span className="font-display text-3xl font-extrabold text-forest-800">
                  {o.paid.price}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-forest-800">{o.paid.title}</h3>
              <ul className="mt-5 flex-1 space-y-3">
                {o.paid.items.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-forest-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-leaf-600" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-dark mt-7 w-full">
                {o.paid.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
