import Image from "next/image";
import { site } from "@/lib/site";

// Intrinsic dimensions of the trimmed, optimised logo asset.
const LOGO_W = 784;
const LOGO_H = 487;
const RATIO = LOGO_W / LOGO_H;

/**
 * The brand asset is a horizontal lockup (emblem + "AgriSurv" wordmark +
 * tagline). We size it by height so it sits neatly in headers/footers, and
 * serve it unoptimised — it's already a lean 55 KB palette PNG.
 */
export default function Logo({
  className = "",
  /** Rendered height in px; width is derived from the logo's aspect ratio. */
  height = 44,
  priority = false,
}: {
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  const width = Math.round(height * RATIO);
  return (
    <Image
      src="/agrisurv-logo.png"
      alt={`${site.name} — ${site.tagline}`}
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
