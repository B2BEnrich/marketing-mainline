import * as React from "react";
import { LazySection } from "@/components/optimization/lazy-section";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { SoftwareAppSchema } from "@/components/seo/software-app-schema";
import { dataEnrichmentFAQ } from "@/lib/faq-data";
import { generatePageMetadata, flattenCategories } from "@/lib/seo";

const EnrichmentData = React.lazy(() =>
  import("@/components/blocks/enrichment-data").then((m) => ({
    default: m.EnrichmentData,
  })),
);

const DataEnrichmentFeatures = React.lazy(() =>
  import("@/components/blocks/data-enrichment-features").then((m) => ({
    default: m.DataEnrichmentFeatures,
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
  title: "Data Enrichment API & Services",
  description:
    "B2B data enrichment API for product builders. Enrich contacts, companies, and CRM records with verified data at scale. Real-time enrichment tools, 250+ data points, 1 credit per call.",
  path: "/solutions/data-enrichment",
  keywords: [
    "data enrichment API",
    "b2b data enrichment",
    "contact data enrichment",
    "CRM data enrichment",
    "data enrichment services",
    "data enrichment tools",
  ],
});

function EnrichmentDataSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          Data Enrichment API - B2B Data Enrichment and Contact Data Enrichment
        </h2>
        <p>
          B2BEnrich provides comprehensive data enrichment services through a
          developer-first API. Our data enrichment tools cover people
          enrichment, company enrichment, and CRM data enrichment with 250+ data
          points per record. Essential for B2B data enrichment, contact data
          enrichment, and automated data quality workflows.
        </p>
        <h3>People Enrichment - Contact Data Enrichment Services</h3>
        <p>
          Turn emails, phones, and profile URLs into complete professional
          profiles with our contact data enrichment API. Get verified job
          titles, company information, work history, and social profiles. Our
          data enrichment tools provide real-time B2B data enrichment for lead
          scoring, CRM data enrichment, and contact data quality. 1 credit per
          call.
        </p>
        <h3>Company Enrichment - B2B Data Enrichment Tools</h3>
        <p>
          Resolve company domains into rich firmographic profiles with our B2B
          data enrichment API. Returns industry, revenue range, employee count,
          funding history, HQ location, and technology stack. Essential data
          enrichment services for account scoring, CRM data enrichment, and
          company intelligence workflows.
        </p>
      </div>
      <div className="container px-4 animate-pulse" aria-hidden="true">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <div className="h-8 bg-muted rounded-lg w-3/4 mx-auto mb-4" />
          <div className="h-4 bg-muted rounded w-full mb-2" />
          <div className="h-4 bg-muted rounded w-2/3 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1].map((i) => (
            <div key={i} className="h-64 bg-muted rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}

function DataEnrichmentFeaturesSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          Data Enrichment Tools - CRM Data Enrichment and Data Enrichment
          Services
        </h2>
        <p>
          B2BEnrich's data enrichment tools integrate seamlessly with your
          existing workflows. Our data enrichment API supports real-time
          enrichment, bulk processing, CRM data enrichment for HubSpot and
          Salesforce, and automated data quality workflows. Leading data
          enrichment services for B2B data enrichment and contact data
          enrichment.
        </p>
        <h3>Real-Time Data Enrichment API</h3>
        <p>
          Enrich contacts and companies in real-time with our data enrichment
          API. Perfect for form fills, lead capture, and instant data quality
          checks. Our B2B data enrichment service returns 250+ data points in
          milliseconds. Best data enrichment tools for real-time workflows.
        </p>
        <h3>CRM Data Enrichment - HubSpot and Salesforce Integration</h3>
        <p>
          Automate CRM data enrichment with native integrations for HubSpot,
          Salesforce, and Pipedrive. Our data enrichment services keep your CRM
          records fresh with verified contact data and company information.
          Leading data enrichment tools for CRM data quality and B2B data
          enrichment.
        </p>
        <h3>Bulk Data Enrichment Services</h3>
        <p>
          Process large datasets with our bulk data enrichment API. Upload CSV
          files or use batch endpoints to enrich thousands of records. Our data
          enrichment tools support high-volume B2B data enrichment and contact
          data enrichment workflows at scale.
        </p>
      </div>
      <div className="container px-4 animate-pulse" aria-hidden="true">
        <div className="mx-auto max-w-4xl space-y-12">
          {[0, 1, 2].map((i) => (
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
        <h2>Related B2B Data Enrichment Products</h2>
        <p>
          Explore additional data enrichment tools and services to complement
          your B2B data enrichment and CRM data enrichment workflows. Email
          verification, B2B prospecting, and more.
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
          Data Enrichment API Pricing - Credit-Based Data Enrichment Services
        </h2>
        <p>
          Simple credit-based pricing for data enrichment API and data
          enrichment services. 1 credit per enrichment call. No seat fees, no
          minimums. Pay only for the B2B data enrichment and contact data
          enrichment you use. Best data enrichment tools pricing.
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
          Data Enrichment API FAQ - B2B Data Enrichment and CRM Data Enrichment
          Questions
        </h2>
        <p>
          Common questions about B2BEnrich's data enrichment API, data
          enrichment services, data enrichment tools, and B2B data enrichment
          capabilities. Learn how to enrich contacts, automate CRM data
          enrichment, and integrate contact data enrichment into your product.
        </p>
      </div>
      <div className="w-full py-16 animate-pulse" aria-hidden="true">
        <div className="h-80 bg-muted rounded-lg mx-4" />
      </div>
    </div>
  );
}

export default function DataEnrichmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://b2benrich.com/" },
          { name: "Solutions", url: "https://b2benrich.com/solutions" },
          {
            name: "Data Enrichment API",
            url: "https://b2benrich.com/solutions/data-enrichment",
          },
        ]}
      />
      <FAQSchema items={flattenCategories(dataEnrichmentFAQ)} />
      <SoftwareAppSchema
        name="B2BEnrich Data Enrichment API"
        description="B2B data enrichment API for product builders. Enrich contacts, companies, and CRM records with verified data — 250+ data points, 1 credit per call."
        url="https://b2benrich.com/solutions/data-enrichment"
        category="BusinessApplication"
      />

      <SolutionHero
        badge="B2B DATA ENRICHMENT API"
        title="Data Enrichment API & Services for Product Builders"
        description="Enhance your application data with rich profile information, company insights, and verified contact data. Reliable, high-quality B2B data enrichment at scale through a simple RESTful API."
        showIllustration={true}
        illustrationPreset="people-enrichment"
      />

      <LazySection
        fallback={<EnrichmentDataSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<EnrichmentDataSkeleton />}>
          <div className="px-0 md:px-8 lg:px-12">
            <EnrichmentData />
          </div>
        </React.Suspense>
      </LazySection>

      <LazySection
        fallback={<DataEnrichmentFeaturesSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<DataEnrichmentFeaturesSkeleton />}>
          <DataEnrichmentFeatures />
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
          <FAQ categories={dataEnrichmentFAQ} />
        </React.Suspense>
      </LazySection>
    </>
  );
}
