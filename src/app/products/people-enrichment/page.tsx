import type { Metadata } from "next";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { PeopleEnrichmentFeatures } from "@/components/blocks/people-enrichment-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "People Enrichment API | Lead & Contact Enrichment",
  description:
    "Lead enrichment API to turn emails, phones, and profile URLs into complete professional profiles. B2B contact enrichment with verified data — job titles, company info, and more. 1 credit per call.",
  openGraph: {
    title: "People Enrichment API | Lead & Contact Enrichment | B2BEnrich",
    description:
      "Lead enrichment API to turn emails, phones, and profile URLs into complete professional profiles. B2B contact enrichment with verified data — job titles, company info, and more.",
  },
};

export default function PeopleEnrichmentPage() {
  return (
    <>
      <SolutionHero 
         badge="PERSON ENRICHMENT API"
         title="Lead Enrichment API — Enrich & Resolve Contact Data"
         description="Turn emails, phones, and profile URLs into complete professional profiles. B2B lead enrichment API with verified contact data, work history, and company insights in real-time."
         showIllustration={true}
         illustrationPreset="people-enrichment" 
      />
      
      <PeopleEnrichmentFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
