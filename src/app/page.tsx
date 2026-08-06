import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatYouGet from "@/components/WhatYouGet";
import HowItWorks from "@/components/HowItWorks";
import AppTour from "@/components/AppTour";
import BoundaryAudit from "@/components/BoundaryAudit";
import Equipment from "@/components/Equipment";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "A free farm-mapping app with satellite crop health and daily spray windows, plus centimetre-accurate drone crop surveys, field-size (boundary) audits and variable-rate prescription files for South African farmers.",
  url: site.url,
  email: site.email,
  areaServed: site.serviceArea,
  serviceType: "Precision agriculture / drone crop analysis",
  slogan: site.tagline,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-forest-800 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* Order matters: the two things no competitor can say — the app and the
            hectare audit — sit in the first four screens, not below the fold. */}
        <Hero />
        <WhatYouGet />
        <BoundaryAudit />
        <AppTour />
        <HowItWorks />
        <Equipment />
        <Pricing />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
