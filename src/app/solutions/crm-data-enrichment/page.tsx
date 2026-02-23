import type { Metadata } from "next";
import { crmEnrichmentFAQ } from "@/lib/faq-data";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { CRMEnrichmentFeatures } from "@/components/blocks/crm-enrichment-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "CRM Data Enrichment API — HubSpot & Salesforce Enrichment",
  description:
    "CRM data enrichment API to keep HubSpot, Salesforce, and Clay contacts up to date. Enrich CRM contacts and accounts with verified emails, job titles, and firmographic data. B2B data integration via REST API.",
  openGraph: {
    title: "CRM Data Enrichment API — HubSpot & Salesforce Enrichment | B2BEnrich",
    description:
      "CRM data enrichment API to keep HubSpot, Salesforce, and Clay contacts up to date. Enrich CRM contacts and accounts with verified emails, job titles, and firmographic data.",
  },
};

export default function CRMDataEnrichmentPage() {
  return (
    <>
      <SolutionHero
        badge="CRM DATA ENRICHMENT API"
        title="CRM Data Enrichment — HubSpot, Salesforce & Clay"
        description="Keep your CRM data clean, complete, and current. Enrich every contact and account with verified emails, job titles, company firmographics, and technology data. Integrates with any CRM via our B2B data enrichment API."
        showIllustration={true}
        illustrationPreset="company-enrichment"
      />

      <CRMEnrichmentFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ categories={crmEnrichmentFAQ} />
    </>
  );
}
