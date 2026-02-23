import type { Metadata } from "next";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { ProspectorFeatures } from "@/components/blocks/prospector-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "B2B Prospector API — B2B Data Providers",
  description:
    "Advanced B2B prospecting API with 30+ filters. One of the leading B2B data providers — find verified contacts and companies by technology, revenue, industry, and intent signals. Build targeted lead lists at scale.",
  openGraph: {
    title: "B2B Prospector API — B2B Data Providers | B2BEnrich",
    description:
      "Advanced B2B prospecting API with 30+ filters. One of the leading B2B data providers — find verified contacts and companies by technology, revenue, and intent signals.",
  },
};

export default function ProspectorPage() {
  return (
    <>
      <SolutionHero 
         badge="B2B DATA PROVIDER API"
         title="B2B Prospector API — Advanced Data Providers"
         description="Build highly targeted lead lists with 30+ filters including technology stack, revenue, and intent signals. One of the most comprehensive B2B data providers — power your prospecting with precision data."
         showIllustration={true}
         illustrationPreset="prospector"
      />
      
      <ProspectorFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
