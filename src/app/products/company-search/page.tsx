import type { Metadata } from "next";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { PeopleSearchFeatures } from "@/components/blocks/people-search-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "Company Search API | B2B Company Database",
  description:
    "Search our B2B company database of 50M+ companies by industry, location, size, revenue, and technology stack. Professional company database API for building targeted account lists.",
  openGraph: {
    title: "Company Search API | B2B Company Database | B2BEnrich",
    description:
      "Search our B2B company database of 50M+ companies by industry, location, size, and tech stack. Build targeted account lists via REST API.",
  },
};

export default function CompanySearchPage() {
  return (
    <>
      <SolutionHero 
         badge="COMPANY SEARCH API"
         title="Company Search API — B2B Company Database"
         description="Search our B2B company database of 50M+ companies. Filter by industry, location, size, revenue, and technology stack to build targeted account lists for your sales and marketing teams."
         showIllustration={true}
         illustrationPreset="company-search"
      />
      
      <PeopleSearchFeatures /> {/* Using shared search features component for now */}

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
