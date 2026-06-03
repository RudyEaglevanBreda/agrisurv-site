"use client";

import {
  Leaf,
  Droplets,
  Map,
  Sprout,
  Layers,
  FileBarChart,
} from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

const ICONS = [Leaf, Droplets, Sprout, Layers, Map, FileBarChart];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-forest-800 sm:text-4xl">
            {t.services.heading}
          </h2>
          <p className="mt-4 text-lg text-forest-600">{t.services.sub}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.cards.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <article className="card group h-full transition-shadow duration-300 hover:shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-50 text-leaf-700 transition-colors duration-300 group-hover:bg-leaf-100">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-forest-800">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-forest-600">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
