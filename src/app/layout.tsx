import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { LanguageProvider } from "@/components/LanguageProvider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Free Farm Mapping App & Drone Crop Surveys`,
    template: `%s — ${site.name}`,
  },
  description:
    "Map your farm free: field boundaries, satellite crop health and daily spray windows on your phone. Then add a centimetre-accurate drone survey — crop-health maps, true block sizes and prescription files for your sprayer. Western Cape, flying nationwide.",
  keywords: [
    "free farm mapping app",
    "farm management app South Africa",
    "drone crop survey",
    "NDVI crop health",
    "field size measurement",
    "variable rate prescription shapefile",
    "spray window weather",
    "precision agriculture Western Cape",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Free Farm Mapping App & Drone Crop Surveys`,
    description:
      "Map your farm free, get daily spray windows, and fly a centimetre-accurate survey when a block is worth it — crop health, true hectares and sprayer-ready files.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Free Farm Mapping App & Drone Crop Surveys`,
    description:
      "Free farm mapping and spray windows, plus centimetre-accurate drone crop surveys for South African farms.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
