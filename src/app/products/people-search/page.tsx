import type { Metadata } from "next";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { PeopleSearchFeatures } from "@/components/blocks/people-search-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "B2B Contact Database & People Search API",
  description:
    "Search our B2B contact database of 550M+ professionals. Find contacts by company, job title, or role. B2B contact database provider API to build targeted lead lists at scale.",
  openGraph: {
    title: "B2B Contact Database & People Search API | B2BEnrich",
    description:
      "Search our B2B contact database of 550M+ professionals. Find contacts by company, job title, or role to build targeted lead lists at scale.",
  },
};

export default function PeopleSearchPage() {
  return (
    <>
      <SolutionHero 
         badge="PEOPLE SEARCH API"
         title="B2B Contact Database — Find People at Any Company"
         description="Search our B2B contact database of 550M+ professionals. Discover employees and decision-makers by filtering on company, job title, seniority, and location to build targeted lead lists."
         showIllustration={true}
         illustrationPreset="people-search"
      />
      
      <PeopleSearchFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
