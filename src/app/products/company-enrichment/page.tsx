import * as React from "react";
import { LazySection } from "@/components/optimization/lazy-section";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { SoftwareAppSchema } from "@/components/seo/software-app-schema";
import { companyEnrichmentFAQ } from "@/lib/faq-data";
import { ContentSummary } from "@/components/seo/content-summary";
import { generatePageMetadata, flattenCategories } from "@/lib/seo";

import { CTASkeleton } from "@/components/blocks/footer-cta-skeleton";

const FooterCta = React.lazy(() =>
  import("@/components/blocks/footer-cta").then((m) => ({
    default: m.FooterCta,
  })),
);

const CompanyEnrichmentFeatures = React.lazy(() =>
  import("@/components/blocks/company-enrichment-features").then((m) => ({
    default: m.CompanyEnrichmentFeatures,
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
  title: "Company Enrichment API | Company Data Enrichment",
  description:
    "Company enrichment API to enhance company profiles with firmographic data. Turn domains into rich company insights — revenue, headcount, industry, and tech stack. 1 credit per call.",
  path: "/products/company-enrichment",
  keywords: [
    "company enrichment api",
    "company data enrichment",
    "b2b company data",
    "firmographic data API",
  ],
});

function CompanyEnrichmentFeaturesSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          Company Enrichment API - Company Data Enrichment and Firmographic Data
        </h2>
        <p>
          B2BEnrich's company enrichment API transforms company domains into
          comprehensive firmographic profiles. Our company data enrichment
          service returns 250+ data points including revenue, employee count,
          industry classification, funding history, headquarters location, and
          complete technology stack. Essential for B2B company data enrichment,
          CRM enrichment, and account-based marketing workflows.
        </p>
        <h3>Firmographic Data API - Complete Company Profiles</h3>
        <p>
          Get complete firmographic data for any company domain. Our company
          enrichment API provides industry classification, revenue range,
          employee count, year founded, headquarters location, and company type
          (public/private). Perfect for company data enrichment, account
          scoring, and B2B company data analysis. 1 credit per call.
        </p>
        <h3>Technology Stack Detection - Technographic Data</h3>
        <p>
          Discover the complete technology stack for any company. Our company
          enrichment API detects 15+ technology categories including CRM,
          marketing automation, analytics, hosting, and more. Essential for
          technographic segmentation, competitive intelligence, and B2B company
          data enrichment for sales teams.
        </p>
        <h3>Funding and Growth Data - Company Intelligence</h3>
        <p>
          Access funding history, investor information, and growth signals. Our
          company data enrichment service provides total funding raised, latest
          funding round, investor names, and growth indicators. Critical for
          company enrichment workflows targeting high-growth accounts and B2B
          company data analysis.
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
          Explore additional data enrichment tools to complement your company
          enrichment and company data enrichment workflows. People enrichment
          API, email verification, B2B database access, and more.
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
          Company Enrichment API Pricing - Credit-Based Company Data Enrichment
        </h2>
        <p>
          Simple credit-based pricing for company enrichment API and company
          data enrichment services. 1 credit per enrichment call. No seat fees,
          no minimums. Pay only for the firmographic data and B2B company data
          you use.
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
          Company Enrichment API FAQ - Company Data Enrichment Questions
        </h2>
        <p>
          Common questions about B2BEnrich's company enrichment API, company
          data enrichment capabilities, firmographic data features, and B2B
          company data workflows. Learn how to enrich company records, access
          technology stack data, and integrate company enrichment into your
          product.
        </p>
      </div>
      <div className="w-full py-16 animate-pulse" aria-hidden="true">
        <div className="h-80 bg-muted rounded-lg mx-4" />
      </div>
    </div>
  );
}

export default function CompanyEnrichmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://b2benrich.com/" },
          { name: "Products", url: "https://b2benrich.com/products" },
          {
            name: "Company Enrichment API",
            url: "https://b2benrich.com/products/company-enrichment",
          },
        ]}
      />
      <FAQSchema items={flattenCategories(companyEnrichmentFAQ)} />
      <SoftwareAppSchema
        name="B2BEnrich Company Enrichment API"
        description="Company enrichment API that turns domains into rich firmographic profiles — revenue, headcount, industry, tech stack, and funding data. 1 credit per call."
        url="https://b2benrich.com/products/company-enrichment"
        category="BusinessApplication"
      />

      <ContentSummary
        title="Company Enrichment API — Firmographic Data, Tech Stack & Funding Intelligence"
        description="B2BEnrich's company enrichment API transforms company domains into comprehensive firmographic profiles. 250+ data points including revenue, employee count, industry, funding history, HQ location, and complete technology stack. 1 credit per call."
        keyPoints={[
          "Firmographic Data API: Industry classification, revenue range, employee count, year founded, HQ location, and company type (public/private). 1 credit per call.",
          "Technology Stack Detection: Detect 15+ technology categories including CRM (Salesforce, HubSpot), marketing automation, analytics, hosting, and more for technographic segmentation.",
          "Funding and Growth Data: Total funding raised, latest funding round, investor names, and growth indicators for targeting high-growth accounts.",
          "250+ Data Points per Company: Complete company intelligence for account scoring, ABM targeting, and CRM data enrichment workflows.",
          "Credit-based pricing: 1 credit per enrichment call. No seat fees. Free tier available.",
        ]}
      />

      <SolutionHero
        badge="COMPANY ENRICHMENT API"
        title="Company Enrichment API — Company Data Enrichment"
        description="Enhance company profiles with firmographic data. Turn domains into comprehensive company insights — revenue, headcount, industry classification, and full tech stack."
        primaryCtaLink="https://docs.b2benrich.com/api/company#linked-in-url-to-company-1-credit-per-request"
        showIllustration={true}
        illustrationPreset="company-enrichment"
      />

      <LazySection
        fallback={<CompanyEnrichmentFeaturesSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<CompanyEnrichmentFeaturesSkeleton />}>
          <CompanyEnrichmentFeatures />
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
          <FAQ categories={companyEnrichmentFAQ} />
        </React.Suspense>
      </LazySection>
      <LazySection fallback={<CTASkeleton />} rootMargin="400px 0px">
        <React.Suspense fallback={<CTASkeleton />}>
          <FooterCta />
        </React.Suspense>
      </LazySection>
    </>
  );
}
