import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import SampleReport from "@/components/SampleReport";
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
    "Drone-based NDVI crop-stress analysis and multispectral aerial imagery for South African farmers.",
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
        <Hero />
        <Services />
        <Process />
        <SampleReport />
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
