import * as React from "react";
import { LazySection } from "@/components/optimization/lazy-section";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { SoftwareAppSchema } from "@/components/seo/software-app-schema";
import { companySearchFAQ } from "@/lib/faq-data";
import { ContentSummary } from "@/components/seo/content-summary";
import { generatePageMetadata, flattenCategories } from "@/lib/seo";

import { CTASkeleton } from "@/components/blocks/footer-cta-skeleton";

const FooterCta = React.lazy(() =>
  import("@/components/blocks/footer-cta").then((m) => ({
    default: m.FooterCta,
  })),
);

const PeopleSearchFeatures = React.lazy(() =>
  import("@/components/blocks/people-search-features").then((m) => ({
    default: m.PeopleSearchFeatures,
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
  title: "Company Search API | B2B Company Database",
  description:
    "Search our B2B company database of 50M+ companies by industry, location, size, revenue, and technology stack. Professional company database API for building targeted account lists.",
  path: "/products/company-search",
  keywords: [
    "b2b company database",
    "professional data api",
    "company database api",
    "b2b company data",
    "b2b contact database software",
  ],
});

function CompanySearchFeaturesSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          B2B Company Database - Company Search and Professional Data API
        </h2>
        <p>
          B2BEnrich's B2B company database provides API access to 50M+ companies
          worldwide. Our professional data API and company database API let you
          search for target accounts by industry, location, revenue, employee
          count, and technology stack. Build targeted account lists with our B2B
          company data and B2B contact database software. Perfect for
          account-based marketing, sales prospecting, and market research.
        </p>
        <h3>Industry and Vertical Search - B2B Company Database</h3>
        <p>
          Filter our B2B company database by industry classification, vertical,
          and sub-industry. Target specific sectors like SaaS, fintech,
          healthcare, manufacturing, or retail. Our company database API
          includes detailed industry taxonomies and B2B company data for precise
          segmentation.
        </p>
        <h3>Firmographic Filters - Professional Data API</h3>
        <p>
          Search by company size, revenue range, employee count, and growth
          stage in our B2B company database. Target enterprise accounts,
          mid-market companies, or startups with our professional data API.
          Filter by public/private status, funding stage, and revenue bands with
          our company database API and B2B company data.
        </p>
        <h3>Technology Stack Search - B2B Contact Database Software</h3>
        <p>
          Discover companies using specific technologies with our B2B company
          database. Search by CRM, marketing automation, analytics platforms,
          hosting providers, and 15+ technology categories. Our B2B contact
          database software includes comprehensive technographic data for
          technology-based prospecting and competitive intelligence.
        </p>
        <h3>Location-Based Search - Company Database API</h3>
        <p>
          Filter our B2B company database by headquarters location, country,
          state, city, and region. Build location-specific account lists, target
          local markets, or identify expansion opportunities. Our professional
          data API and company database API cover companies worldwide with
          complete B2B company data.
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
          company database and company search workflows. People enrichment API,
          email verification, B2B prospecting, and more.
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
          B2B Company Database Pricing - Credit-Based Company Search API
        </h2>
        <p>
          Simple credit-based pricing for B2B company database access and
          company search API. 5 credits per search. No seat fees, no minimums.
          Pay only for the professional data API and B2B company data searches
          you perform.
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
          B2B Company Database FAQ - Company Search and Professional Data API
          Questions
        </h2>
        <p>
          Common questions about B2BEnrich's B2B company database, company
          search capabilities, professional data API features, and B2B company
          data access. Learn how to search for companies, filter by technology
          stack, and integrate our company database API into your product.
        </p>
      </div>
      <div className="w-full py-16 animate-pulse" aria-hidden="true">
        <div className="h-80 bg-muted rounded-lg mx-4" />
      </div>
    </div>
  );
}

export default function CompanySearchPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.b2benrich.com/" },
          { name: "Products", url: "https://www.b2benrich.com/products" },
          {
            name: "Company Search API",
            url: "https://www.b2benrich.com/products/company-search",
          },
        ]}
      />
      <FAQSchema items={flattenCategories(companySearchFAQ)} />
      <SoftwareAppSchema
        name="B2BEnrich Company Search API"
        description="B2B company database search API with 50M+ companies. Filter by industry, location, revenue, employee count, and technology stack."
        url="https://www.b2benrich.com/products/company-search"
        category="BusinessApplication"
      />

      <ContentSummary
        title="Company Search API — B2B Company Database with 50M+ Companies"
        description="B2BEnrich's B2B company database provides API access to 50M+ companies worldwide. Filter by industry, location, revenue, employee count, and technology stack to build targeted account lists. 5 credits per search."
        keyPoints={[
          "Industry and Vertical Search: Filter by industry classification, vertical, and sub-industry. Target SaaS, fintech, healthcare, manufacturing, retail, and more with detailed industry taxonomies.",
          "Firmographic Filters: Search by company size, revenue range, employee count, growth stage, public/private status, and funding stage for precise account targeting.",
          "Technology Stack Search: Discover companies using specific technologies across 15+ categories including CRM, marketing automation, analytics, and hosting.",
          "Location-Based Search: Filter by headquarters country, state, city, and region to build location-specific account lists worldwide.",
          "Credit-based pricing: 5 credits per search. No seat fees. Free tier available.",
        ]}
      />

      <SolutionHero
        badge="COMPANY SEARCH API"
        title="Company Search API — B2B Company Database"
        description="Search our B2B company database of 50M+ companies. Filter by industry, location, size, revenue, and technology stack to build targeted account lists for your sales and marketing teams."
        primaryCtaLink="https://docs.b2benrich.com/api/search#search-companies"
        showIllustration={true}
        illustrationPreset="company-search"
      />

      <LazySection
        fallback={<CompanySearchFeaturesSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<CompanySearchFeaturesSkeleton />}>
          <PeopleSearchFeatures />
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
          <FAQ categories={companySearchFAQ} />
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
