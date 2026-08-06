"use client";

import { ArrowRight, Check, Plane } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
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
    <section id="services" className="border-b border-forest-200 bg-white py-20 sm:py-24">
      <div className="container-page">
        <SectionHead index="01" kicker={o.eyebrow} heading={o.heading} sub={o.sub} />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          {/* Free */}
          <Reveal>
            <div className="flex h-full flex-col rounded-[3px] border border-forest-200 bg-cream p-7">
              <div className="flex items-baseline justify-between gap-3 border-b border-forest-200 pb-4">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-forest-500">
                  {o.free.label}
                </span>
                <span className="readout text-3xl font-semibold text-forest-800">
                  {o.free.price}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold tracking-[-0.01em] text-forest-800">{o.free.title}</h3>
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
            <div className="flex h-full flex-col rounded-[3px] border-2 border-forest-800 bg-white p-7 shadow-none">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-[2px] bg-forest-800 px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white">
                  <Plane className="h-3.5 w-3.5" aria-hidden="true" />
                  {o.paid.label}
                </span>
                <span className="readout text-3xl font-semibold text-forest-800">
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
