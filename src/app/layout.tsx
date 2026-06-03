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
    default: `${site.name} — Drone NDVI Crop Stress Analysis`,
    template: `%s — ${site.name}`,
  },
  description:
    "AgriSurv flies state-of-the-art multispectral drones to map crop stress, water issues and yield risk across South African farms — turning aerial imagery into field-ready insights.",
  keywords: [
    "NDVI",
    "drone crop analysis",
    "precision agriculture",
    "crop stress mapping",
    "multispectral imagery",
    "South Africa farming",
    "agritech",
    "variable rate application",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Drone NDVI Crop Stress Analysis`,
    description:
      "Multispectral drone imagery and NDVI analysis that helps South African farmers spot crop stress early and lift yields.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Drone NDVI Crop Stress Analysis`,
    description:
      "Multispectral drone imagery and NDVI analysis for South African farms.",
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
