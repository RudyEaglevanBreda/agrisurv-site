"use client";

import { ArrowRight, MessageCircle, Tractor, Usb } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
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

const SHARE_ICONS = [MessageCircle, Usb, Tractor];

/** Terminals and controllers that import the standard prescription shapefile we export.
 * Brand names stay out of the dictionary — they don't translate. */
const SYSTEMS = [
  "John Deere (Gen 4 / G5, Operations Center)",
  "Trimble GFX / TMX",
  "Case IH AFS Pro",
  "New Holland IntelliView",
  "Ag Leader InCommand",
  "Topcon Horizon",
  "Raven Viper",
  "DJI Agras spray drones",
  "XAG spray drones",
];

export default function AppTour() {
  const { t } = useLang();
  const a = t.appTour;

  return (
    <section id="app" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHead index="03" kicker={a.eyebrow} heading={a.heading} sub={a.sub} />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {a.phones.map((ph, i) => (
            <Reveal key={ph.title} delay={(i % 4) * 80}>
              <figure className="h-full">
                <Zoomable src={PHONE_SHOTS[i]} alt={ph.title}>
                  <div className="overflow-hidden rounded-[4px] border-[6px] border-forest-800 bg-forest-800 shadow-none transition-shadow duration-300 hover:border-forest-400">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={PHONE_SHOTS[i]}
                      alt={ph.title}
                      loading="lazy"
                      className="block w-full rounded-[2px]"
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
          <div className="mt-14 grid items-center gap-8 rounded-[3px] border border-forest-200 bg-white p-6 shadow-none sm:p-8 lg:grid-cols-[1.4fr_1fr]">
            <Zoomable src="/process/app-desktop-field.webp" alt={a.desktop.title}>
              <div className="overflow-hidden rounded-[3px] border border-forest-200 shadow-none">
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

        {/* From the app to the machine: share the files, load them, spray */}
        <Reveal>
          <div className="mt-14">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="font-display text-2xl font-bold tracking-tight text-forest-800 sm:text-3xl">
                {a.share.heading}
              </h3>
              <p className="mt-3 text-forest-600">{a.share.sub}</p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {a.share.steps.map((s, i) => {
                const Icon = SHARE_ICONS[i];
                return (
                  <Reveal key={s.title} delay={i * 80}>
                    <article className="card h-full">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[3px] bg-leaf-50 text-leaf-700">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <span className="font-display text-sm font-bold text-forest-300">
                          {i + 1}
                        </span>
                      </div>
                      <h4 className="mt-4 font-display text-lg font-bold text-forest-800">
                        {s.title}
                      </h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-forest-600">{s.body}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-8 rounded-[3px] border border-forest-200 bg-white p-6 shadow-none sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-forest-500">
                {a.share.systemsHeading}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {SYSTEMS.map((s) => (
                  <span
                    key={s}
                    className="rounded-[2px] border border-forest-200 bg-cream px-3 py-1.5 font-mono text-[12px] font-medium text-forest-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-forest-600">{a.share.systemsNote}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
