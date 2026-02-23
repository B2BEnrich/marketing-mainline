import type { Metadata } from "next";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { EnrichmentData } from "@/components/blocks/enrichment-data";
import { DataEnrichmentFeatures } from "@/components/blocks/data-enrichment-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "Data Enrichment API & Services",
  description:
    "B2B data enrichment API for product builders. Enrich contacts, companies, and CRM records with verified data at scale. Real-time enrichment tools, 250+ data points, 1 credit per call.",
  openGraph: {
    title: "Data Enrichment API & Services | B2BEnrich",
    description:
      "B2B data enrichment API for product builders. Enrich contacts, companies, and CRM records with verified data at scale. Real-time enrichment tools, 250+ data points.",
  },
};

export default function DataEnrichmentPage() {
  return (
    <>
      <SolutionHero 
         badge="B2B DATA ENRICHMENT API"
         title="Data Enrichment API & Services for Product Builders"
         description="Enhance your application data with rich profile information, company insights, and verified contact data. Reliable, high-quality B2B data enrichment at scale through a simple RESTful API."
         showIllustration={true}
         illustrationPreset="people-enrichment"
      />
      
      <div className="px-0 md:px-8 lg:px-12">
        <EnrichmentData />
      </div>

      <DataEnrichmentFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
