import * as React from "react";
import { LazySection } from "@/components/optimization/lazy-section";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { SoftwareAppSchema } from "@/components/seo/software-app-schema";
import { b2bDatabaseFAQ } from "@/lib/faq-data";
import { generatePageMetadata, flattenCategories } from "@/lib/seo";

const B2BDatabaseFeatures = React.lazy(() =>
  import("@/components/blocks/b2b-database-features").then((m) => ({
    default: m.B2BDatabaseFeatures,
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
  title: "B2B Database — B2B Data Providers & Contact Database",
  description:
    "Access the most comprehensive B2B database with 550M+ contacts and 50M+ companies. Top B2B data provider with verified emails, firmographic data, and real-time API access. GDPR-compliant B2B contact database.",
  path: "/solutions/b2b-database",
  keywords: [
    "b2b database",
    "b2b data providers",
    "b2b contact database",
    "b2b email database",
    "b2b database providers",
    "b2b data provider",
  ],
});

function B2BDatabaseFeaturesSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          B2B Database - B2B Data Providers and B2B Contact Database Access
        </h2>
        <p>
          B2BEnrich is one of the leading B2B data providers offering API access
          to the most comprehensive B2B database. Our B2B contact database
          includes 550M+ professional contacts and 50M+ companies with verified
          emails, phone numbers, and firmographic data. Top B2B database
          providers and B2B data provider for sales teams, marketing teams, and
          product builders. GDPR-compliant B2B email database.
        </p>
        <h3>B2B Contact Database - 550M+ Professional Contacts</h3>
        <p>
          Access our B2B contact database of 550M+ verified professional
          profiles. Get complete contact information including business emails,
          phone numbers, job titles, seniority levels, and company affiliations.
          Our B2B email database is continuously updated and GDPR-compliant.
          Leading B2B data providers for contact data and B2B database access.
        </p>
        <h3>Company Database - 50M+ Companies Worldwide</h3>
        <p>
          Query our B2B database of 50M+ companies with complete firmographic
          data. Access industry classification, revenue range, employee count,
          funding history, technology stack, and headquarters location. Top B2B
          database providers for company intelligence and firmographic data. B2B
          data provider for account-based marketing.
        </p>
        <h3>Real-Time API Access - B2B Database Providers</h3>
        <p>
          Access our B2B database through a simple REST API with real-time data
          updates. No stale data, no outdated records. Our B2B data provider
          service ensures you always get the freshest information from our B2B
          contact database and B2B email database. Best B2B database providers
          for API access.
        </p>
        <h3>GDPR-Compliant B2B Data Provider</h3>
        <p>
          Our B2B database is fully GDPR-compliant with proper data sourcing and
          consent mechanisms. All data in our B2B contact database and B2B email
          database is ethically sourced and legally compliant. Trusted B2B data
          providers and B2B database providers for enterprise teams.
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
        <h2>Related B2B Data Provider Products</h2>
        <p>
          Explore additional products from leading B2B data providers to
          complement your B2B database and B2B contact database access. Data
          enrichment, email verification, prospecting, and more.
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
          B2B Database Pricing - Credit-Based Access from Top B2B Data Providers
        </h2>
        <p>
          Simple credit-based pricing for B2B database access from leading B2B
          data providers. 1 credit per enrichment, 5 credits per search. No seat
          fees, no minimums. Pay only for the B2B contact database and B2B email
          database access you use. Best B2B database providers pricing.
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
          B2B Database FAQ - B2B Data Providers and B2B Contact Database
          Questions
        </h2>
        <p>
          Common questions about B2BEnrich as one of the leading B2B data
          providers, our B2B database capabilities, B2B contact database
          features, and B2B email database access. Learn how to query the B2B
          database, access verified contacts, and integrate top B2B database
          providers into your workflow.
        </p>
      </div>
      <div className="w-full py-16 animate-pulse" aria-hidden="true">
        <div className="h-80 bg-muted rounded-lg mx-4" />
      </div>
    </div>
  );
}

export default function B2BDatabasePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://b2benrich.com/" },
          { name: "Solutions", url: "https://b2benrich.com/solutions" },
          {
            name: "B2B Database",
            url: "https://b2benrich.com/solutions/b2b-database",
          },
        ]}
      />
      <FAQSchema items={flattenCategories(b2bDatabaseFAQ)} />
      <SoftwareAppSchema
        name="B2BEnrich B2B Database API"
        description="B2B database with 550M+ contacts and 50M+ companies. Access verified emails, firmographic data, and company intelligence via real-time REST API."
        url="https://b2benrich.com/solutions/b2b-database"
        category="BusinessApplication"
      />

      <SolutionHero
        badge="B2B DATABASE API"
        title="B2B Database — 550M+ Contacts & 50M+ Companies"
        description="The most comprehensive B2B database accessible via API. Get verified contact data, firmographic insights, and business emails from the leading B2B data provider. GDPR-compliant, real-time, and always fresh."
        primaryCtaLink="https://docs.b2benrich.com/api/search#search-companies"
        showIllustration={true}
        illustrationPreset="people-search"
      />

      <LazySection
        fallback={<B2BDatabaseFeaturesSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<B2BDatabaseFeaturesSkeleton />}>
          <B2BDatabaseFeatures />
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
          <FAQ categories={b2bDatabaseFAQ} />
        </React.Suspense>
      </LazySection>
    </>
  );
}
