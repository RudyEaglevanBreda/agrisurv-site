"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Standard section opening: a numbered margin note, a left-ranged headline and a
 * short lead. Left-ranged on purpose — a column of centred eyebrow-pill blocks is
 * the house style of every generated marketing page, and it reads as decoration.
 * A survey sheet indexes its sections down the left edge, so this does too.
 */
export default function SectionHead({
  index,
  kicker,
  heading,
  sub,
  align = "left",
  children,
}: {
  /** Sheet number shown in the margin, e.g. "02". */
  index?: string;
  kicker: string;
  heading: ReactNode;
  sub?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const centred = align === "center";

  return (
    <Reveal>
      <div className={centred ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
        <div className={`flex items-center gap-3 ${centred ? "justify-center" : ""}`}>
          {/* forest-500 on cream is 4.75:1 — forest-300 measured 2.35:1 and failed AA. */}
          {index && (
            <span className="readout text-[11px] font-semibold text-forest-500">{index}</span>
          )}
          <span className="eyebrow">{kicker}</span>
        </div>

        <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.08] tracking-[-0.02em] text-forest-800 sm:text-[2.6rem] lg:text-[3rem]">
          {heading}
        </h2>

        {sub && (
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-forest-600">{sub}</p>
        )}
        {children}
      </div>
    </Reveal>
  );
}
