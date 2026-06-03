"use client";

import {
  Plane,
  Aperture,
  Satellite,
  Gauge,
  Ruler,
  SunMedium,
} from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

const ICONS = [Aperture, Satellite, SunMedium, Ruler, Gauge, Plane];

export default function Equipment() {
  const { t } = useLang();

  return (
    <section id="equipment" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">{t.equipment.eyebrow}</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-forest-800 sm:text-4xl">
              {t.equipment.heading}
            </h2>
            <p className="mt-4 text-lg text-forest-600">{t.equipment.p1}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-forest-600">
              {t.equipment.p2}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.equipment.specs.map((s, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={s.label} delay={(i % 2) * 70}>
                  <div className="card h-full">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-leaf-700">
                      {s.label}
                    </p>
                    <p className="mt-1 font-display text-xl font-bold text-forest-800">
                      {s.value}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-forest-600">
                      {s.detail}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
