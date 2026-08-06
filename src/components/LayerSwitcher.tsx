"use client";

import { useState } from "react";
import Zoomable from "./Zoomable";
import { useLang } from "./LanguageProvider";

const LAYERS = [
  { key: "satellite", src: "/process/layer-satellite.webp" },
  { key: "health", src: "/process/layer-ndvi.webp" },
  { key: "terrain", src: "/process/layer-insight.webp" },
] as const;

/**
 * Interactive demo of the farm dashboard — flip the same field between its
 * satellite, crop-health (NDVI) and terrain/water layers. Uses the real
 * exported layers as a stand-in for the live product.
 */
export default function LayerSwitcher() {
  const { t } = useLang();
  const [active, setActive] = useState(0);

  const labelFor = (key: string) =>
    key === "satellite"
      ? t.howItWorks.layers.satellite
      : key === "health"
        ? t.howItWorks.layers.health
        : t.howItWorks.layers.terrain;

  return (
    <div>
      <Zoomable src={LAYERS[active].src} alt={labelFor(LAYERS[active].key)}>
        <div className="relative aspect-square overflow-hidden rounded-[3px] border border-forest-200 bg-forest-900 shadow-none">
          {LAYERS.map((l, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={l.key}
              src={l.src}
              alt={labelFor(l.key)}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute left-3 top-3 rounded-[2px] bg-forest-900/75 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
            {labelFor(LAYERS[active].key)}
          </div>
        </div>
      </Zoomable>

      <div
        className="mt-3 inline-flex flex-wrap gap-1 rounded-[2px] border border-forest-200 bg-white p-1"
        role="group"
      >
        {LAYERS.map((l, i) => (
          <button
            key={l.key}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`rounded-[1px] px-3 py-1.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] transition-colors ${
              i === active
                ? "bg-leaf-500 text-white"
                : "text-forest-600 hover:text-forest-900"
            }`}
          >
            {labelFor(l.key)}
          </button>
        ))}
      </div>
    </div>
  );
}
