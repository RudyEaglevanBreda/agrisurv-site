"use client";

import { ArrowRight, MessageCircle, Smartphone, Plane, ShieldCheck } from "lucide-react";
import { NdviLegend } from "./NdviField";
import Zoomable from "./Zoomable";
import { useLang } from "./LanguageProvider";
import { PORTAL_REGISTER_URL } from "../lib/portal";
import { whatsappLink } from "../lib/site";

const TRUST_ICONS = [Smartphone, Plane, ShieldCheck];

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden border-b border-forest-200 bg-cream">
      {/* A map graticule, not gradient blobs: this is a survey company. */}
      <div className="graticule graticule-fade pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Explicit grid placement so the phone gets copy → picture → trust badges (the
          picture used to sit below all three, off the first screen entirely), while the
          desktop keeps copy and badges stacked beside the image. */}
      <div className="container-page relative flex flex-col gap-8 py-16 sm:py-20 lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-x-10 lg:gap-y-8 lg:py-28">
        {/* Copy */}
        <div className="max-w-xl lg:col-start-1 lg:row-start-1">
          <span className="eyebrow">{t.hero.eyebrow}</span>

          <h1 className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-forest-800 sm:text-[3.4rem] lg:text-[4.1rem]">
            {t.hero.headline.pre}
            {/* The claim is underlined, the way you'd rule a figure on a survey sheet. */}
            <span className="text-leaf-600 [text-decoration:underline] [text-decoration-color:var(--color-leaf-300)] [text-decoration-thickness:3px] [text-underline-offset:6px]">
              {t.hero.headline.highlight}
            </span>
            {t.hero.headline.post}
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-forest-600">
            {t.hero.sub}
          </p>

          {/* One primary action, one low-commitment escape hatch. Three equal-weight
              buttons was three decisions on the first screen of a phone. */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={PORTAL_REGISTER_URL} className="btn-primary">
              {t.cta.portal}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t.cta.whatsapp}
            </a>
          </div>

        </div>

        {/* Visual — real NDVI layer from a drone survey, framed like a map plate */}
        <div className="relative lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div className="ticked rounded-[3px] border border-forest-300 bg-white p-2.5">
            <Zoomable src="/process/hero-ndvi.webp" alt={t.common.mapAria}>
              <div className="relative overflow-hidden rounded-[2px]">
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

            <div className="mt-2.5 flex flex-wrap items-center justify-between gap-3 border-t border-forest-200 px-1 pb-0.5 pt-3">
              <div>
                <p className="readout text-[13px] font-semibold text-forest-800">
                  {t.hero.cardTitle}
                </p>
                <p className="mt-0.5 text-[11.5px] uppercase tracking-wider text-forest-500">
                  {t.hero.cardMeta}
                </p>
              </div>
              <NdviLegend lowLabel={t.common.low} highLabel={t.common.highNdvi} />
            </div>
          </div>

          {/* Floating annotation — points at the stressed patch */}
          <div className="absolute -left-4 top-[16%] hidden max-w-[14.5rem] -translate-y-1/2 rounded-[3px] border border-forest-300 bg-white px-4 py-3 shadow-none md:block">
            <p className="flex items-center gap-2 text-sm font-semibold text-forest-800">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#d6533a]" />
              {t.hero.annTitle}
            </p>
            <p className="mt-0.5 text-xs text-forest-600">{t.hero.annBody}</p>
          </div>
        </div>

        {/* Trust points, set like the key strip along the bottom of a map sheet. */}
        <div className="max-w-xl lg:col-start-1 lg:row-start-2">
          <dl className="grid grid-cols-1 border-t border-forest-200 min-[480px]:grid-cols-3 min-[480px]:divide-x min-[480px]:divide-forest-200">
            {t.hero.trust.map((item, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-3 border-b border-forest-200 py-4 min-[480px]:block min-[480px]:border-b-0 min-[480px]:px-4 min-[480px]:first:pl-0 min-[480px]:last:pr-0"
                >
                  <Icon className="h-4 w-4 shrink-0 text-leaf-600 min-[480px]:mb-2.5" aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="readout text-[15px] font-semibold text-forest-800">
                      {item.value}
                    </dt>
                    <dd className="mt-0.5 text-[13px] leading-snug text-forest-500">{item.label}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
