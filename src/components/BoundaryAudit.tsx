"use client";

import { ArrowRight, Banknote, Ruler, Scale } from "lucide-react";
import Reveal from "./Reveal";
import Zoomable from "./Zoomable";
import { useLang } from "./LanguageProvider";

/** Real screens from the boundary wizard over our Swellendam demo pivot — matched by index
 * to `t.boundary.phones[]`. The middle one carries the whole argument: a 93.3 ha record
 * against a 69.6 ha crop. */
const PHONE_SHOTS = [
  "/process/app-boundary-entry.webp",
  "/process/app-boundary-compare.webp",
  "/process/app-boundary-adjust.webp",
];

const COST_ICONS = [Banknote, Scale, Ruler];

export default function BoundaryAudit() {
  const { t } = useLang();
  const b = t.boundary;

  return (
    <section id="boundary" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{b.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-forest-800 sm:text-4xl">
            {b.heading}
          </h2>
          <p className="mt-4 text-lg text-forest-600">{b.sub}</p>
        </div>

        {/* the measurement, in the farmer's own hand */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {b.phones.map((ph, i) => (
            <Reveal key={ph.title} delay={i * 80}>
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

        {/* what the error actually costs */}
        <Reveal>
          <div className="mt-16">
            <h3 className="text-center font-display text-2xl font-bold tracking-tight text-forest-800 sm:text-3xl">
              {b.costHeading}
            </h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {b.costs.map((c, i) => {
                const Icon = COST_ICONS[i];
                return (
                  <Reveal key={c.title} delay={i * 80}>
                    <article className="card h-full">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h4 className="mt-4 font-display text-lg font-bold text-forest-800">{c.title}</h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-forest-600">{c.body}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* The price sits here, where the farmer is actually reading about it, rather than
            as a second add-on strip down in Pricing saying the same thing twice. */}
        <Reveal>
          <div className="mt-10 flex flex-col items-center gap-5 text-center">
            <p className="rounded-2xl bg-cream px-5 py-3 text-[15px] font-semibold text-forest-800">
              {b.priceLine}
            </p>
            <a href="#contact" className="btn-primary">
              {b.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="max-w-2xl text-[14px] leading-relaxed text-forest-500">{b.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
