"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import LayerSwitcher from "./LayerSwitcher";
import Zoomable from "./Zoomable";
import { useLang } from "./LanguageProvider";

/**
 * Layout + asset config, matched by index to `t.howItWorks.steps[].media[]`.
 * Callout positions are percentages within the image; their labels come from
 * the dictionary (`media[i].callouts[j]`), so only lead images carry callouts.
 */
const STEP_CONFIG: Array<{
  lead?: { src: string; callouts: { x: number; y: number }[] };
  extra?: { src: string }[];
  dashboard?: boolean;
  forecast?: string;
}> = [
  {
    lead: { src: "/process/fly-3.webp", callouts: [{ x: 55, y: 56 }] },
    extra: [{ src: "/process/fly-2.webp" }, { src: "/process/fly-1.webp" }],
  },
  {
    lead: { src: "/process/process-1.webp", callouts: [{ x: 79, y: 62 }] },
    extra: [{ src: "/process/layer-ndvi.webp" }, { src: "/process/process-3.webp" }],
  },
  {
    lead: {
      src: "/process/layer-insight.webp",
      callouts: [
        { x: 42, y: 45 },
        { x: 18, y: 24 },
      ],
    },
    extra: [{ src: "/process/rx-1-select.webp" }, { src: "/process/rx-3-export.webp" }],
  },
  { dashboard: true, forecast: "/process/layer-forecast.webp" },
];

type Callout = { label: string; x: number; y: number };

function Shot({
  src,
  caption,
  callouts = [],
  cover = false,
}: {
  src: string;
  caption: string;
  callouts?: Callout[];
  cover?: boolean;
}) {
  return (
    <Zoomable src={src} alt={caption}>
      <figure className="relative overflow-hidden rounded-[3px] border border-forest-200 bg-forest-50 shadow-none transition-shadow duration-200 hover:shadow-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={caption}
          loading="lazy"
          className={cover ? "aspect-[4/3] w-full object-cover" : "block w-full"}
        />
        {callouts
          .filter((c) => c.label)
          .map((c, i) => (
            <span
              key={i}
              className="pointer-events-none absolute z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-[2px] bg-white/95 px-2.5 py-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-forest-800 ring-1 ring-forest-300 sm:inline-flex"
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-leaf-500" />
              {c.label}
            </span>
          ))}
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-3 pt-9">
          <p className="text-xs font-medium text-white sm:text-[13px]">{caption}</p>
        </figcaption>
      </figure>
    </Zoomable>
  );
}

export default function HowItWorks() {
  const { t } = useLang();
  const hw = t.howItWorks;

  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHead index="04" kicker={hw.eyebrow} heading={hw.heading} sub={hw.sub} />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {hw.steps.map((step, i) => {
            const cfg = STEP_CONFIG[i];
            const mediaRight = i % 2 === 0;
            return (
              <Reveal key={step.num}>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  {/* Text */}
                  <div className={mediaRight ? "lg:order-1" : "lg:order-2"}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] bg-forest-800 font-display text-sm font-bold text-leaf-300">
                        {step.num}
                      </span>
                      <span className="h-px flex-1 bg-forest-100" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold text-forest-800">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-forest-600">{step.intro}</p>
                    <ul className="mt-5 space-y-2.5">
                      {step.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-[15px] leading-relaxed text-forest-700"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Media */}
                  <div className={mediaRight ? "lg:order-2" : "lg:order-1"}>
                    {cfg.dashboard ? (
                      <div className="grid gap-4 sm:grid-cols-[1.5fr_1fr] sm:items-start">
                        <LayerSwitcher />
                        <Shot src={cfg.forecast!} caption={step.media[0].caption} />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Shot
                          src={cfg.lead!.src}
                          caption={step.media[0].caption}
                          callouts={cfg.lead!.callouts.map((pos, j) => ({
                            ...pos,
                            label: step.media[0].callouts[j],
                          }))}
                        />
                        <div className="grid grid-cols-2 gap-4">
                          {cfg.extra!.map((ex, k) => (
                            <Shot
                              key={ex.src}
                              src={ex.src}
                              caption={step.media[k + 1].caption}
                              cover
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Closing band */}
        <Reveal>
          <div className="mt-16 rounded-[3px] bg-forest-800 p-8 text-center text-white sm:mt-24 sm:p-12">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              {hw.closing.title}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-forest-100/85">
              {hw.closing.body}
            </p>
            <a href="#contact" className="btn-primary mt-7">
              {hw.closing.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
