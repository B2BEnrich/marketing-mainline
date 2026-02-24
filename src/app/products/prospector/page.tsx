import * as React from "react";
import { LazySection } from "@/components/optimization/lazy-section";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { SoftwareAppSchema } from "@/components/seo/software-app-schema";
import { prospectorFAQ } from "@/lib/faq-data";
import { ContentSummary } from "@/components/seo/content-summary";
import { generatePageMetadata, flattenCategories } from "@/lib/seo";

const ProspectorFeatures = React.lazy(() =>
  import("@/components/blocks/prospector-features").then((m) => ({
    default: m.ProspectorFeatures,
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
  title: "B2B Prospector API — B2B Data Providers",
  description:
    "Advanced B2B prospecting API with 30+ filters. One of the leading B2B data providers — find verified contacts and companies by technology, revenue, industry, and intent signals. Build targeted lead lists at scale.",
  path: "/products/prospector",
  keywords: [
    "b2b data providers",
    "b2b database providers",
    "data vendors",
    "b2b data provider",
    "b2b prospecting database",
    "best b2b data providers",
  ],
});

function ProspectorFeaturesSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          B2B Prospector API - Advanced B2B Data Providers and Prospecting
          Database
        </h2>
        <p>
          B2BEnrich is one of the leading B2B data providers offering an
          advanced prospecting API with 30+ filters. Our B2B prospecting
          database lets you build highly targeted lead lists by filtering on job
          title, company size, industry, technology stack, revenue, location,
          and intent signals. Top B2B database providers and data vendors for
          precision prospecting. Best B2B data providers for sales teams.
        </p>
        <h3>Technology Stack Filters - B2B Data Provider</h3>
        <p>
          Find prospects using specific technologies with our B2B data provider
          API. Filter by CRM (Salesforce, HubSpot), marketing automation,
          analytics platforms, hosting providers, and 15+ technology categories.
          Our B2B prospecting database includes comprehensive technographic data.
          Leading B2B data providers for technology-based prospecting.
        </p>
        <h3>Firmographic Filters - B2B Database Providers</h3>
        <p>
          Target companies by revenue range, employee count, industry, and
          growth stage with our B2B database providers service. Filter by
          public/private status, funding stage, and company type. Our B2B data
          provider API includes complete firmographic data for account-based
          marketing. Best B2B data providers for firmographic segmentation.
        </p>
        <h3>Job Title and Seniority Filters - Data Vendors</h3>
        <p>
          Search for decision-makers by job title, seniority level, department,
          and role with our data vendors API. Target C-level executives, VPs,
          Directors, Managers, or individual contributors. Our B2B prospecting
          database includes verified contact information. Top B2B data providers
          for contact-level prospecting.
        </p>
        <h3>Intent Signals and Engagement Data - B2B Data Providers</h3>
        <p>
          Identify high-intent prospects with engagement signals and buying
          indicators. Our B2B data provider service tracks technology adoption,
          funding events, hiring patterns, and growth signals. Leading B2B
          database providers for intent-based prospecting. Best B2B data
          providers for sales intelligence.
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
        <h2>Related B2B Data Enrichment Products</h2>
        <p>
          Explore additional data enrichment tools to complement your B2B
          prospecting workflows. People enrichment API, company enrichment,
          email verification, and more from leading B2B data providers.
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
          B2B Prospector API Pricing - Credit-Based Prospecting from Top B2B
          Data Providers
        </h2>
        <p>
          Simple credit-based pricing for B2B prospecting API from leading B2B
          data providers. 5 credits per search with 30+ filters. No seat fees,
          no minimums. Pay only for the B2B prospecting database searches you
          perform. Best B2B data providers pricing.
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
          B2B Prospector API FAQ - B2B Data Providers and Prospecting Questions
        </h2>
        <p>
          Common questions about B2BEnrich as one of the leading B2B data
          providers, our prospecting API capabilities, B2B prospecting database
          features, and data vendors services. Learn how to build targeted lead
          lists, filter by technology stack, and integrate the best B2B data
          providers into your sales workflow.
        </p>
      </div>
      <div className="w-full py-16 animate-pulse" aria-hidden="true">
        <div className="h-80 bg-muted rounded-lg mx-4" />
      </div>
    </div>
  );
}

export default function ProspectorPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://b2benrich.com/" },
          { name: "Products", url: "https://b2benrich.com/products" },
          {
            name: "B2B Prospector API",
            url: "https://b2benrich.com/products/prospector",
          },
        ]}
      />
      <FAQSchema items={flattenCategories(prospectorFAQ)} />
      <SoftwareAppSchema
        name="B2BEnrich Prospector API"
        description="Advanced B2B prospecting API with 30+ filters. Find verified contacts and companies by technology, revenue, industry, and location to build targeted lead lists."
        url="https://b2benrich.com/products/prospector"
        category="BusinessApplication"
      />

      <ContentSummary
        title="B2B Prospector API — 30+ Filters to Build Precision Lead Lists from 550M+ Contacts"
        description="B2BEnrich's prospector API is one of the leading B2B data providers. Build highly targeted lead lists with 30+ filters including job title, company size, industry, technology stack, revenue, location, and intent signals. 5 credits per search."
        keyPoints={[
          "Technology Stack Filters: Find prospects using specific CRM (Salesforce, HubSpot), marketing automation, analytics, hosting, and 15+ technology categories for technology-based prospecting.",
          "Firmographic Filters: Target companies by revenue range, employee count, industry classification, growth stage, public/private status, and funding stage.",
          "Job Title and Seniority Filters: Search for C-level executives, VPs, Directors, Managers, or individual contributors by job title, seniority, department, and role.",
          "Intent Signals: Identify high-intent prospects via technology adoption signals, funding events, hiring patterns, and growth indicators.",
          "Location Filters: Target prospects by country, state, city, and region for geographic precision.",
          "Credit-based pricing: 5 credits per prospector search. No seat fees. Free tier available.",
        ]}
      />

      <SolutionHero
        badge="B2B DATA PROVIDER API"
        title="B2B Prospector API — Advanced Data Providers"
        description="Build highly targeted lead lists with 30+ filters including technology stack, revenue, and intent signals. One of the most comprehensive B2B data providers — power your prospecting with precision data."
        primaryCtaLink="https://docs.b2benrich.com/api/search#prospector-search"
        showIllustration={true}
        illustrationPreset="prospector"
      />

      <LazySection
        fallback={<ProspectorFeaturesSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<ProspectorFeaturesSkeleton />}>
          <ProspectorFeatures />
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
          <FAQ categories={prospectorFAQ} />
        </React.Suspense>
      </LazySection>
    </>
  );
}
