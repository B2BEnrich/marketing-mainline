import type { Metadata } from "next";
import { dataExtractionFAQ } from "@/lib/faq-data";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { EnrichmentData } from "@/components/blocks/enrichment-data";
import { DataExtractionFeatures } from "@/components/blocks/data-extraction-features";
import { DiscoveryRelatedProducts } from "@/components/blocks/discovery-related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "B2B Data Extraction API & Services",
  description:
    "B2B data extraction API and services for developers. Extract professional profiles and company data from 500M+ contacts and 50M+ companies. Real-time data extraction tools via REST API.",
  openGraph: {
    title: "B2B Data Extraction API & Services | B2BEnrich",
    description:
      "B2B data extraction API and services for developers. Extract professional profiles and company data from 500M+ contacts and 50M+ companies via REST API.",
  },
};

export default function DataExtractionPage() {
  return (
    <>
      <SolutionHero 
         badge="B2B DATA EXTRACTION API"
         title="B2B Data Extraction API & Services"
         description="Build your product features with reliable B2B data extraction. Query 500M+ professional profiles and 50M+ companies through our simple RESTful API. Real-time data, always fresh."
         showIllustration={true}
         illustrationPreset="data-extraction"
      />
      
      <div className="px-0 md:px-8 lg:px-12">
        <EnrichmentData />
      </div>

      <DataExtractionFeatures />

      <DiscoveryRelatedProducts />

      <FooterPricing />

      <FAQ categories={dataExtractionFAQ} />
    </>
  );
}
