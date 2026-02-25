import * as React from "react";
import { LazySection } from "@/components/optimization/lazy-section";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { SoftwareAppSchema } from "@/components/seo/software-app-schema";
import { dataExtractionFAQ } from "@/lib/faq-data";
import { ContentSummary } from "@/components/seo/content-summary";
import { generatePageMetadata, flattenCategories } from "@/lib/seo";

import { CTASkeleton } from "@/components/blocks/footer-cta-skeleton";

const FooterCta = React.lazy(() =>
  import("@/components/blocks/footer-cta").then((m) => ({
    default: m.FooterCta,
  })),
);

const EnrichmentData = React.lazy(() =>
  import("@/components/blocks/enrichment-data").then((m) => ({
    default: m.EnrichmentData,
  })),
);

const DataExtractionFeatures = React.lazy(() =>
  import("@/components/blocks/data-extraction-features").then((m) => ({
    default: m.DataExtractionFeatures,
  })),
);

const DiscoveryRelatedProducts = React.lazy(() =>
  import("@/components/blocks/discovery-related-products").then((m) => ({
    default: m.DiscoveryRelatedProducts,
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
  title: "B2B Data Extraction API & Services",
  description:
    "B2B data extraction API and services for developers. Extract professional profiles and company data from 500M+ contacts and 50M+ companies. Real-time data extraction tools via REST API.",
  path: "/solutions/data-extraction",
  keywords: [
    "data extraction API",
    "data extraction services",
    "data extraction tools",
    "B2B data extraction",
    "data extraction company",
  ],
});

function EnrichmentDataSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          Data Extraction API - B2B Data Extraction Services and Tools
        </h2>
        <p>
          B2BEnrich provides comprehensive B2B data extraction services through
          a developer-first API. Our data extraction tools enable real-time
          extraction of professional profiles and company data from 500M+
          contacts and 50M+ companies. Essential for building data-driven
          products, sales intelligence tools, and market research platforms.
          Leading data extraction company for B2B data extraction.
        </p>
        <h3>People Data Extraction - Professional Profile Extraction</h3>
        <p>
          Extract complete professional profiles with our data extraction API.
          Get full name, job title, company, email, phone, work history,
          education, and social profiles. Our data extraction services provide
          real-time access to 500M+ professional contacts. Best data extraction
          tools for people data and B2B data extraction workflows.
        </p>
        <h3>Company Data Extraction - Firmographic Data Extraction</h3>
        <p>
          Extract comprehensive company profiles with our B2B data extraction
          API. Returns industry, revenue, employee count, funding history,
          technology stack, and headquarters location. Our data extraction
          services cover 50M+ companies worldwide. Leading data extraction
          company for firmographic data and company intelligence.
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

function DataExtractionFeaturesSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          Data Extraction Tools - Data Extraction Services and B2B Data
          Extraction Features
        </h2>
        <p>
          B2BEnrich's data extraction tools provide flexible APIs for extracting
          B2B data at scale. Our data extraction services support real-time
          extraction, bulk processing, search and discovery, and automated data
          pipelines. Leading data extraction company for B2B data extraction and
          professional data extraction.
        </p>
        <h3>Real-Time Data Extraction API</h3>
        <p>
          Extract contact and company data in real-time with our data extraction
          API. Perfect for on-demand lookups, instant profile resolution, and
          real-time data enrichment. Our B2B data extraction service returns
          complete records in milliseconds. Best data extraction tools for
          real-time workflows.
        </p>
        <h3>Bulk Data Extraction Services</h3>
        <p>
          Process large datasets with our bulk data extraction API. Upload CSV
          files or use batch endpoints to extract thousands of records. Our data
          extraction tools support high-volume B2B data extraction and
          professional data extraction at scale. Leading data extraction company
          for bulk processing.
        </p>
        <h3>Search and Discovery - Data Extraction Tools</h3>
        <p>
          Discover new contacts and companies with our search-based data
          extraction services. Filter by job title, industry, technology,
          revenue, and location to build targeted datasets. Our data extraction
          API includes 30+ filters for precision B2B data extraction and market
          research.
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

function DiscoveryRelatedProductsSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>Related B2B Data Extraction Products</h2>
        <p>
          Explore additional data extraction tools and services to complement
          your B2B data extraction workflows. People enrichment, company
          enrichment, email verification, and more from a leading data
          extraction company.
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
          Data Extraction API Pricing - Credit-Based Data Extraction Services
        </h2>
        <p>
          Simple credit-based pricing for data extraction API and data
          extraction services. 1 credit per extraction call. No seat fees, no
          minimums. Pay only for the B2B data extraction and professional data
          extraction you use. Best data extraction tools pricing from a leading
          data extraction company.
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
          Data Extraction API FAQ - B2B Data Extraction and Data Extraction
          Services Questions
        </h2>
        <p>
          Common questions about B2BEnrich's data extraction API, data
          extraction services, data extraction tools, and B2B data extraction
          capabilities. Learn how to extract professional profiles, access
          company data, and integrate data extraction into your product as a
          leading data extraction company.
        </p>
      </div>
      <div className="w-full py-16 animate-pulse" aria-hidden="true">
        <div className="h-80 bg-muted rounded-lg mx-4" />
      </div>
    </div>
  );
}

export default function DataExtractionPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.b2benrich.com/" },
          { name: "Solutions", url: "https://www.b2benrich.com/solutions" },
          {
            name: "Data Extraction API",
            url: "https://www.b2benrich.com/solutions/data-extraction",
          },
        ]}
      />
      <FAQSchema items={flattenCategories(dataExtractionFAQ)} />
      <SoftwareAppSchema
        name="B2BEnrich Data Extraction API"
        description="B2B data extraction API for developers. Extract professional profiles and company data from 500M+ contacts and 50M+ companies via REST API."
        url="https://www.b2benrich.com/solutions/data-extraction"
        category="BusinessApplication"
      />

      <ContentSummary
        title="B2B Data Extraction API & Services — 500M+ Contacts, 50M+ Companies"
        description="B2BEnrich provides B2B data extraction for developers and product builders. Extract professional profiles and company data from 500M+ contacts and 50M+ companies via a simple REST API. Real-time, always fresh."
        keyPoints={[
          "People Data Extraction: Extract full name, job title, company, email, phone, work history, education, and social profiles. Real-time access to 500M+ contacts. 1 credit per call.",
          "Company Data Extraction: Extract industry, revenue, employee count, funding history, technology stack, and HQ location for 50M+ companies. 1 credit per call.",
          "Real-Time Extraction: On-demand lookups and instant profile resolution in milliseconds. Perfect for product features requiring live B2B data.",
          "Bulk Data Extraction: Upload CSVs or use batch endpoints to extract thousands of records at scale for high-volume workflows.",
          "Search and Discovery: 30+ filters for building targeted datasets by job title, industry, technology, revenue, and location.",
          "Credit-based pricing: 1 credit per extraction call. No seat fees. Free tier available.",
        ]}
      />

      <SolutionHero
        badge="B2B DATA EXTRACTION API"
        title="B2B Data Extraction API & Services"
        description="Build your product features with reliable B2B data extraction. Query 500M+ professional profiles and 50M+ companies through our simple RESTful API. Real-time data, always fresh."
        primaryCtaLink="https://docs.b2benrich.com/api/search#prospector-search"
        showIllustration={true}
        illustrationPreset="data-extraction"
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
        fallback={<DataExtractionFeaturesSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<DataExtractionFeaturesSkeleton />}>
          <DataExtractionFeatures />
        </React.Suspense>
      </LazySection>

      <LazySection
        fallback={<DiscoveryRelatedProductsSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<DiscoveryRelatedProductsSkeleton />}>
          <DiscoveryRelatedProducts />
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
          <FAQ categories={dataExtractionFAQ} />
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
