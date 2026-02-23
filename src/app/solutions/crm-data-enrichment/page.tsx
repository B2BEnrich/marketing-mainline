import * as React from "react";
import { LazySection } from "@/components/optimization/lazy-section";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { SoftwareAppSchema } from "@/components/seo/software-app-schema";
import { crmEnrichmentFAQ } from "@/lib/faq-data";
import { generatePageMetadata, flattenCategories } from "@/lib/seo";

const CRMEnrichmentFeatures = React.lazy(() =>
  import("@/components/blocks/crm-enrichment-features").then((m) => ({
    default: m.CRMEnrichmentFeatures,
  })),
);

const RelatedProducts = React.lazy(() =>
  import("@/components/blocks/related-products").then((m) => ({
    default: m.RelatedProducts,
  })),
);

const FooterPricing = React.lazy(() =>
  import("@/components/blocks/footer-pricing").then((m) => ({
    default: m.FooterPricing,
  })),
);

const FAQ = React.lazy(() =>
  import("@/components/blocks/faq").then((m) => ({ default: m.FAQ })),
);

export const metadata = generatePageMetadata({
  title: "CRM Data Enrichment — HubSpot & Salesforce Enrichment",
  description:
    "Automate CRM data enrichment for HubSpot, Salesforce, and Pipedrive. Keep your CRM records fresh with verified contact data, company insights, and real-time updates. Native CRM integrations.",
  path: "/solutions/crm-data-enrichment",
  keywords: [
    "CRM data enrichment",
    "HubSpot enrichment",
    "Salesforce enrichment",
    "CRM enrichment",
    "enrich CRM data",
  ],
});

function CrmEnrichmentFeaturesSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          CRM Data Enrichment - HubSpot Enrichment and Salesforce Enrichment
        </h2>
        <p>
          B2BEnrich provides automated CRM data enrichment for HubSpot,
          Salesforce, and Pipedrive. Our CRM enrichment service keeps your CRM
          records fresh with verified contact data, job titles, company
          insights, and firmographic information. Native integrations for
          HubSpot enrichment and Salesforce enrichment. Essential for sales
          teams to enrich CRM data automatically.
        </p>
        <h3>HubSpot Enrichment - Automated CRM Data Enrichment</h3>
        <p>
          Automate HubSpot enrichment with our native integration. Enrich
          contacts and companies in HubSpot with verified emails, job titles,
          phone numbers, and firmographic data. Our CRM data enrichment service
          updates HubSpot records in real-time. Best HubSpot enrichment solution
          to enrich CRM data automatically.
        </p>
        <h3>Salesforce Enrichment - Real-Time CRM Enrichment</h3>
        <p>
          Enable Salesforce enrichment with our native Salesforce integration.
          Automatically enrich leads, contacts, and accounts with complete
          professional and company data. Our CRM data enrichment service keeps
          Salesforce records up-to-date. Leading Salesforce enrichment solution
          for CRM enrichment workflows.
        </p>
        <h3>Pipedrive and Other CRM Enrichment</h3>
        <p>
          Enrich CRM data in Pipedrive and other platforms with our CRM data
          enrichment API. Connect via Zapier, Make, or direct API integration to
          automate CRM enrichment. Our service supports any CRM that accepts
          webhooks or API calls. Universal CRM data enrichment solution.
        </p>
        <h3>Automated Data Quality - Enrich CRM Data Continuously</h3>
        <p>
          Keep your CRM data fresh with automated enrichment workflows. Our CRM
          data enrichment service monitors for stale records, missing fields,
          and outdated information. Automatically enrich CRM data as new
          contacts are added. Best CRM enrichment for data quality and HubSpot
          enrichment and Salesforce enrichment automation.
        </p>
      </div>
      <div className="container px-4 animate-pulse" aria-hidden="true">
        <div className="mx-auto max-w-4xl space-y-12">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="h-8 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-5/6" />
              </div>
              <div className="h-64 bg-muted rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RelatedProductsSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>Related CRM Data Enrichment Products</h2>
        <p>
          Explore additional data enrichment tools to complement your CRM
          enrichment, HubSpot enrichment, and Salesforce enrichment workflows.
          People enrichment, company enrichment, email verification, and more.
        </p>
      </div>
      <div className="container px-4 animate-pulse" aria-hidden="true">
        <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-48 bg-muted rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}

function FooterPricingSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          CRM Data Enrichment Pricing - Credit-Based CRM Enrichment
        </h2>
        <p>
          Simple credit-based pricing for CRM data enrichment, HubSpot
          enrichment, and Salesforce enrichment. 1 credit per enrichment call.
          No seat fees, no minimums. Pay only for the CRM enrichment you use to
          enrich CRM data.
        </p>
      </div>
      <div className="container px-4 animate-pulse" aria-hidden="true">
        <div className="h-64 bg-muted rounded-lg" />
      </div>
    </div>
  );
}

function FAQSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          CRM Data Enrichment FAQ - HubSpot Enrichment and Salesforce Enrichment
          Questions
        </h2>
        <p>
          Common questions about B2BEnrich's CRM data enrichment, HubSpot
          enrichment, Salesforce enrichment, and CRM enrichment capabilities.
          Learn how to enrich CRM data, automate data quality, and integrate CRM
          enrichment into HubSpot and Salesforce.
        </p>
      </div>
      <div className="w-full py-16 animate-pulse" aria-hidden="true">
        <div className="h-80 bg-muted rounded-lg mx-4" />
      </div>
    </div>
  );
}

export default function CrmDataEnrichmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://b2benrich.com/" },
          { name: "Solutions", url: "https://b2benrich.com/solutions" },
          {
            name: "CRM Data Enrichment",
            url: "https://b2benrich.com/solutions/crm-data-enrichment",
          },
        ]}
      />
      <FAQSchema items={flattenCategories(crmEnrichmentFAQ)} />
      <SoftwareAppSchema
        name="B2BEnrich CRM Data Enrichment"
        description="Automate CRM data enrichment for HubSpot, Salesforce, and Pipedrive. Keep CRM records fresh with verified contact data and company insights."
        url="https://b2benrich.com/solutions/crm-data-enrichment"
        category="BusinessApplication"
      />

      <SolutionHero
        badge="CRM DATA ENRICHMENT"
        title="CRM Data Enrichment — HubSpot & Salesforce"
        description="Automate CRM data enrichment for HubSpot, Salesforce, and Pipedrive. Keep your CRM records fresh with verified contact data, company insights, and real-time updates through native integrations."
        showIllustration={true}
        illustrationPreset="company-enrichment"
      />

      <LazySection
        fallback={<CrmEnrichmentFeaturesSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<CrmEnrichmentFeaturesSkeleton />}>
          <CRMEnrichmentFeatures />
        </React.Suspense>
      </LazySection>

      <LazySection
        fallback={<RelatedProductsSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<RelatedProductsSkeleton />}>
          <RelatedProducts />
        </React.Suspense>
      </LazySection>

      <LazySection
        fallback={<FooterPricingSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<FooterPricingSkeleton />}>
          <FooterPricing />
        </React.Suspense>
      </LazySection>

      <LazySection fallback={<FAQSkeleton />} rootMargin="200px 0px">
        <React.Suspense fallback={<FAQSkeleton />}>
          <FAQ categories={crmEnrichmentFAQ} />
        </React.Suspense>
      </LazySection>
    </>
  );
}
