"use client";

import { ArrowRight, Sparkles, Plane, Clock, ShieldCheck } from "lucide-react";
import { NdviLegend } from "./NdviField";
import Zoomable from "./Zoomable";
import { useLang } from "./LanguageProvider";
import { PORTAL_REGISTER_URL } from "../lib/portal";

const TRUST_ICONS = [Plane, Clock, ShieldCheck];

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-leaf-200/40 blur-3xl" />
        <div className="absolute top-40 -left-32 h-96 w-96 rounded-full bg-forest-200/30 blur-3xl" />
      </div>

      <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-28">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-forest-800 sm:text-5xl lg:text-6xl">
            {t.hero.headline.pre}
            <span className="text-leaf-600">{t.hero.headline.highlight}</span>
            {t.hero.headline.post}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-forest-700/90">
            {t.hero.sub}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={PORTAL_REGISTER_URL} className="btn-primary">
              {t.cta.portal}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost">
              {t.cta.quote}
            </a>
            <a href="#process" className="btn-ghost">
              {t.cta.seeHow}
            </a>
          </div>

          {/* Trust points — stacked list on narrow phones, 3-up once there's room */}
          <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-forest-100 pt-6 min-[480px]:grid-cols-3">
            {t.hero.trust.map((item, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-3 min-[480px]:block"
                >
                  <Icon
                    className="h-5 w-5 shrink-0 text-leaf-600 min-[480px]:mb-2"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <dt className="font-display text-base font-bold text-forest-800">
                      {item.value}
                    </dt>
                    <dd className="text-sm text-forest-600">{item.label}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>

        {/* Visual — real NDVI layer from a drone survey */}
        <div className="relative">
          <div className="rounded-[28px] border border-forest-100 bg-white p-3 shadow-card">
            <Zoomable src="/process/hero-ndvi.webp" alt={t.common.mapAria}>
              <div className="relative overflow-hidden rounded-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/process/hero-ndvi.webp"
                  alt={t.common.mapAria}
                  fetchPriority="high"
                  className="block w-full"
                />
                {/* Ring marker over the main stressed patch */}
                <span
                  className="pointer-events-none absolute left-[46%] top-[26%] block h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#d6533a]/15 shadow-[0_0_0_2px_rgba(214,83,58,0.35)]"
                  aria-hidden="true"
                >
                  <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                </span>
              </div>
            </Zoomable>

            <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-1 pt-4">
              <div>
                <p className="font-display text-sm font-bold text-forest-800">
                  {t.hero.cardTitle}
                </p>
                <p className="text-xs text-forest-600">{t.hero.cardMeta}</p>
              </div>
              <NdviLegend lowLabel={t.common.low} highLabel={t.common.highNdvi} />
            </div>
          </div>

          {/* Floating annotation — points at the stressed patch */}
          <div className="absolute -left-4 top-[16%] hidden max-w-[14.5rem] -translate-y-1/2 rounded-2xl border border-forest-100 bg-white px-4 py-3 shadow-card md:block">
            <p className="flex items-center gap-2 text-sm font-semibold text-forest-800">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#d6533a]" />
              {t.hero.annTitle}
            </p>
            <p className="mt-0.5 text-xs text-forest-600">{t.hero.annBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
