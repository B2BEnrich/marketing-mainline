import * as React from "react";
import { LazySection } from "@/components/optimization/lazy-section";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { SoftwareAppSchema } from "@/components/seo/software-app-schema";
import { peopleSearchFAQ } from "@/lib/faq-data";
import { ContentSummary } from "@/components/seo/content-summary";
import { generatePageMetadata, flattenCategories } from "@/lib/seo";

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
  title: "B2B Contact Database & People Search API",
  description:
    "Search our B2B contact database of 550M+ professionals. Find contacts by company, job title, or role. B2B contact database provider API to build targeted lead lists at scale.",
  path: "/products/people-search",
  keywords: [
    "b2b contact database",
    "b2b contact database provider",
    "b2b lead database",
    "b2b contacts database",
    "how to find a contact number",
  ],
});

function PeopleSearchFeaturesSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          B2B Contact Database - People Search and B2B Lead Database Access
        </h2>
        <p>
          B2BEnrich's B2B contact database provides API access to 550M+
          professional profiles worldwide. Our B2B contact database provider
          service lets you search for decision-makers by job title, company,
          seniority, department, and location. Build targeted lead lists with
          our B2B lead database and B2B contacts database. Perfect for sales
          prospecting, account-based marketing, and finding contact numbers.
        </p>
        <h3>Search by Job Title and Role - B2B Contact Database Provider</h3>
        <p>
          Find contacts by job title, seniority level, and department in our B2B
          contact database. Search for CEOs, VPs, Directors, Managers, and
          individual contributors across any industry. Our B2B contact database
          provider service includes verified emails and phone numbers. Learn how
          to find a contact number for any professional with our people search
          API.
        </p>
        <h3>Company-Based Search - B2B Contacts Database</h3>
        <p>
          Discover all employees at target companies with our B2B contacts
          database. Search by company name or domain to find decision-makers,
          build buying group lists, and map organizational structures. Our B2B
          lead database includes complete contact information for account-based
          marketing campaigns.
        </p>
        <h3>Location and Industry Filters - B2B Lead Database</h3>
        <p>
          Filter our B2B contact database by geographic location, country,
          state, city, and industry classification. Build region-specific lead
          lists, target local markets, or find contacts in specific verticals.
          Our B2B contact database provider service covers all major industries
          and geographies worldwide.
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
          Explore additional data enrichment tools to complement your B2B
          contact database and people search workflows. Company enrichment API,
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
          B2B Contact Database Pricing - Credit-Based People Search API
        </h2>
        <p>
          Simple credit-based pricing for B2B contact database access and people
          search API. 5 credits per search. No seat fees, no minimums. Pay only
          for the B2B lead database and B2B contacts database searches you
          perform.
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
          B2B Contact Database FAQ - People Search and Lead Database Questions
        </h2>
        <p>
          Common questions about B2BEnrich's B2B contact database, people search
          capabilities, B2B lead database features, and how to find a contact
          number. Learn how to search for contacts, access verified emails, and
          integrate our B2B contact database provider service into your product.
        </p>
      </div>
      <div className="w-full py-16 animate-pulse" aria-hidden="true">
        <div className="h-80 bg-muted rounded-lg mx-4" />
      </div>
    </div>
  );
}

export default function PeopleSearchPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://b2benrich.com/" },
          { name: "Products", url: "https://b2benrich.com/products" },
          {
            name: "B2B Contact Database & People Search",
            url: "https://b2benrich.com/products/people-search",
          },
        ]}
      />
      <FAQSchema items={flattenCategories(peopleSearchFAQ)} />
      <SoftwareAppSchema
        name="B2BEnrich People Search API"
        description="B2B contact database search API with 550M+ professionals. Filter by job title, company, seniority, and location to build targeted lead lists."
        url="https://b2benrich.com/products/people-search"
        category="BusinessApplication"
      />

      <ContentSummary
        title="B2B Contact Database — Search 550M+ Professionals via API"
        description="B2BEnrich's B2B contact database provides API access to 550M+ professional profiles. Search for decision-makers by job title, company, seniority, department, and location. Build targeted lead lists with verified emails and phone numbers. 5 credits per search."
        keyPoints={[
          "Search by Job Title and Role: Find CEOs, VPs, Directors, Managers, and individual contributors across any industry with verified emails and phone numbers.",
          "Company-Based Search: Discover all employees at target companies by domain or name. Build buying group lists and map organizational structures.",
          "Location and Industry Filters: Filter by geographic location, country, state, city, and industry classification across all major industries and geographies worldwide.",
          "Verified Contact Data: All contacts include verified business emails and phone numbers for high-deliverability outreach.",
          "Credit-based pricing: 5 credits per search. No seat fees. Free tier available.",
        ]}
      />

      <SolutionHero
        badge="PEOPLE SEARCH API"
        title="B2B Contact Database — Find People at Any Company"
        description="Search our B2B contact database of 550M+ professionals. Discover employees and decision-makers by filtering on company, job title, seniority, and location to build targeted lead lists."
        primaryCtaLink="https://docs.b2benrich.com/api/search#search-employees-at-a-company"
        showIllustration={true}
        illustrationPreset="people-search"
      />

      <LazySection
        fallback={<PeopleSearchFeaturesSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<PeopleSearchFeaturesSkeleton />}>
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
          <FAQ categories={peopleSearchFAQ} />
        </React.Suspense>
      </LazySection>
    </>
  );
}
