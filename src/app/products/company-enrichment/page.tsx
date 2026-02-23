import type { Metadata } from "next";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { CompanyEnrichmentFeatures } from "@/components/blocks/company-enrichment-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "Company Enrichment API | Company Data Enrichment",
  description:
    "Company enrichment API to enhance company profiles with firmographic data. Turn domains into rich company insights — revenue, headcount, industry, and tech stack. 1 credit per call.",
  openGraph: {
    title: "Company Enrichment API | Company Data Enrichment | B2BEnrich",
    description:
      "Company enrichment API to enhance company profiles with firmographic data. Turn domains into rich company insights — revenue, headcount, industry, and tech stack.",
  },
};

export default function CompanyEnrichmentPage() {
  return (
    <>
      <SolutionHero 
         badge="COMPANY ENRICHMENT API"
         title="Company Enrichment API — Company Data Enrichment"
         description="Enhance company profiles with firmographic data. Turn domains into comprehensive company insights — revenue, headcount, industry classification, and full tech stack."
         showIllustration={true}
         illustrationPreset="company-enrichment"
      />
      
      <CompanyEnrichmentFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
