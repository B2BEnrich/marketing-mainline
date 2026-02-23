import type { Metadata } from "next";
import { technographicDataFAQ } from "@/lib/faq-data";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { TechnographicDataFeatures } from "@/components/blocks/technographic-data-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "B2B Technographic Data API — Company Technology Stack",
  description:
    "Access B2B technographic data for 50M+ companies via API. Get full technology stacks — CRM, marketing automation, cloud, analytics, and more. Filter companies by tech stack for precision B2B prospecting.",
  openGraph: {
    title: "B2B Technographic Data API — Company Technology Stack | B2BEnrich",
    description:
      "Access B2B technographic data for 50M+ companies via API. Get full technology stacks — CRM, marketing automation, cloud, analytics, and more.",
  },
};

export default function B2BTechnographicDataPage() {
  return (
    <>
      <SolutionHero
        badge="B2B TECHNOGRAPHIC DATA API"
        title="B2B Technographic Data — Company Technology Stack"
        description="Discover what technology every company uses. Our B2B technographic data API covers CRM, marketing automation, analytics, cloud, and development tools across 50M+ companies. Use tech stack as a prospecting filter or enrich your B2B data platform."
        showIllustration={true}
        illustrationPreset="prospector"
      />

      <TechnographicDataFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ categories={technographicDataFAQ} />
    </>
  );
}
