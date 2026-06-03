import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in `out/` — deployable to any static host
  // (Cloudflare Pages, Netlify, etc.) with no Node.js server required.
  output: "export",

  // Required for static export when using next/image (the logo is already a
  // pre-optimised 55 KB asset, so no build-time optimisation is needed).
  images: { unoptimized: true },

  // Emit folder-style URLs (/page/ -> /page/index.html) for clean static hosting.
  trailingSlash: true,
};

export default nextConfig;
