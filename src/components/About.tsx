"use client";

import { Target, Handshake, Tractor, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

const ICONS = [Target, Tractor, ShieldCheck, Handshake];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-forest-800 sm:text-4xl">
              {t.about.heading}
            </h2>
            <div className="mt-5 space-y-4 text-lg text-forest-600">
              {t.about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            {/* TODO: add founder/operator bios + photos when available. */}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.about.values.map((v, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={v.title} delay={(i % 2) * 80}>
                  <div className="card h-full bg-cream">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-leaf-700 shadow-soft">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-forest-800">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest-600">
                      {v.body}
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
