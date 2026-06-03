"use client";

import { Check, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

// Which tier is visually featured (index into the tiers array).
const FEATURED_INDEX = 1;

export default function Pricing() {
  const { t } = useLang();

  return (
    <section id="pricing" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.pricing.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-forest-800 sm:text-4xl">
            {t.pricing.heading}
          </h2>
          <p className="mt-4 text-lg text-forest-600">{t.pricing.sub}</p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {t.pricing.tiers.map((tier, i) => {
            const featured = i === FEATURED_INDEX;
            return (
              <Reveal key={tier.name} delay={i * 80} className="h-full">
                <div
                  className={`flex h-full flex-col rounded-3xl p-7 ${
                    featured
                      ? "border-2 border-leaf-500 bg-white shadow-card"
                      : "border border-forest-100 bg-white shadow-soft"
                  }`}
                >
                  {featured && (
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-leaf-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {t.pricing.popular}
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold text-forest-800">
                    {tier.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-extrabold text-forest-800">
                      {tier.price}
                    </span>
                    {tier.unit && (
                      <span className="text-sm font-medium text-forest-600">
                        {tier.unit}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-forest-600">
                    {tier.blurb}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-forest-700"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600"
                          aria-hidden="true"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-7 ${featured ? "btn-primary" : "btn-dark"} w-full`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-forest-500">
          {t.pricing.disclaimer}
        </p>
      </div>
    </section>
  );
}
