"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useLang } from "./LanguageProvider";

/**
 * Wraps any visual in a click-to-enlarge lightbox. The trigger is a real
 * button (keyboard accessible); the overlay closes on click, Esc or the ✕.
 */
export default function Zoomable({
  src,
  alt,
  className = "",
  children,
}: {
  /** Full-size image shown in the lightbox. */
  src: string;
  alt: string;
  className?: string;
  children: ReactNode;
}) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${t.common.enlarge}: ${alt}`}
        className={`block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500 focus-visible:ring-offset-2 ${className}`}
      >
        {children}
      </button>

      {/* Portal to <body>: ancestors with CSS transforms (the Reveal animation) turn
          position:fixed into position:relative-to-them, trapping the overlay inside the
          card — exactly the "image in a black border" bug. */}
      {open && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            /* h/w-full + object-contain actually ENLARGES: with max-h/max-w alone, images
               smaller than the viewport (the phone screenshots) stayed tiny in the dark. */
            className="h-full w-full cursor-zoom-out object-contain"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.common.close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>,
        document.body,
      )}
    </>
  );
}
