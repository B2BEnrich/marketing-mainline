import type { Metadata } from "next";
import { b2bDatabaseFAQ } from "@/lib/faq-data";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { B2BDatabaseFeatures } from "@/components/blocks/b2b-database-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "B2B Database — B2B Data Providers & Contact Database",
  description:
    "Access the most comprehensive B2B database with 550M+ contacts and 50M+ companies. Top B2B data provider with verified emails, firmographic data, and real-time API access. GDPR-compliant B2B contact database.",
  openGraph: {
    title: "B2B Database — B2B Data Providers & Contact Database | B2BEnrich",
    description:
      "Access the most comprehensive B2B database with 550M+ contacts and 50M+ companies. Top B2B data provider with verified emails, firmographic data, and real-time API access.",
  },
};

export default function B2BDatabasePage() {
  return (
    <>
      <SolutionHero
        badge="B2B DATABASE API"
        title="B2B Database — 550M+ Contacts & 50M+ Companies"
        description="The most comprehensive B2B database accessible via API. Get verified contact data, firmographic insights, and business emails from the leading B2B data provider. GDPR-compliant, real-time, and always fresh."
        showIllustration={true}
        illustrationPreset="people-search"
      />

      <B2BDatabaseFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ categories={b2bDatabaseFAQ} />
    </>
  );
}
