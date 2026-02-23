import type { Metadata } from "next";
import { ApiSection } from "@/components/blocks/apis-block";
import { EnrichmentData } from "@/components/blocks/enrichment-data";
import { FAQ } from "@/components/blocks/faq";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { Hero } from "@/components/blocks/hero";
import { HowCreditsWork } from "@/components/blocks/how-credits-work";
import { homeFAQ } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "B2B Data Enrichment API — 550M+ Contacts & Companies",
  description:
    "The B2B data enrichment API for developers and product teams. Enrich contacts and companies with 250+ data points. Access 550M+ profiles via simple REST API. 1 credit per call.",
  openGraph: {
    title: "B2B Data Enrichment API — 550M+ Contacts & Companies",
    description:
      "The B2B data enrichment API for developers and product teams. Enrich contacts and companies with 250+ data points. Access 550M+ profiles via simple REST API.",
  },
};

export default function Home() {
  return (
    <>
      <div className="px-0 md:px-8 lg:px-12">
        <Hero />
      </div>

      <div className="px-0 md:px-8 lg:px-12">
        <EnrichmentData />
      </div>

      <div className="px-0">
        <ApiSection />
      </div>

      <FooterPricing />

      <HowCreditsWork />

      <FAQ categories={homeFAQ} />
    </>
  );
}

/*
<Logos />
      <FAQ />
      <Features />
      <ResourceAllocation />
      <Testimonials />
      */
