"use client";

import { CalendarCheck, Plane, Cpu, FileBarChart } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

const ICONS = [CalendarCheck, Plane, Cpu, FileBarChart];

export default function Process() {
  const { t } = useLang();

  return (
    <section id="process" className="bg-forest-800 py-20 text-white sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-leaf-400/30 bg-leaf-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-leaf-300">
            {t.process.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.process.heading}
          </h2>
          <p className="mt-4 text-lg text-forest-100/80">{t.process.sub}</p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.title} delay={i * 90}>
                <li className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="font-display text-sm font-bold text-leaf-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-500/20 text-leaf-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-100/75">
                    {s.body}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
