"use client";

import { useEffect, useRef } from "react";
import { Crosshair, TrendingUp, FileDown, MapPinned } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

const ICONS = [Crosshair, TrendingUp, MapPinned, FileDown];

export default function SampleReport() {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Respect reduced-motion: pause the ambient loop for those users.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  return (
    <section id="sample" className="bg-cream py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="rounded-[28px] border border-forest-100 bg-white p-3 shadow-card">
              <div className="overflow-hidden rounded-3xl bg-forest-900">
                <video
                  ref={videoRef}
                  src="/process/layers-demo.mp4"
                  poster="/process/layers-poster.webp"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={t.sample.cardTitle}
                  className="block w-full"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-1 pt-4">
                <div>
                  <p className="font-display text-sm font-bold text-forest-800">
                    {t.sample.cardTitle}
                  </p>
                  <p className="text-xs text-forest-600">{t.sample.cardMeta}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <span className="eyebrow">{t.sample.eyebrow}</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-forest-800 sm:text-4xl">
              {t.sample.heading}
            </h2>
            <p className="mt-4 text-lg text-forest-600">{t.sample.sub}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.sample.insights.map((item, i) => {
                const Icon = ICONS[i];
                return (
                  <Reveal key={item.title} delay={(i % 2) * 80}>
                    <div className="flex h-full gap-3">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-leaf-100 text-leaf-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-forest-800">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-forest-600">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
