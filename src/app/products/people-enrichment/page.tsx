import * as React from "react";
import { LazySection } from "@/components/optimization/lazy-section";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { SoftwareAppSchema } from "@/components/seo/software-app-schema";
import { peopleEnrichmentFAQ } from "@/lib/faq-data";
import { generatePageMetadata, flattenCategories } from "@/lib/seo";

const PeopleEnrichmentFeatures = React.lazy(() =>
  import("@/components/blocks/people-enrichment-features").then((m) => ({
    default: m.PeopleEnrichmentFeatures,
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
  title: "People Enrichment API | Lead & Contact Enrichment",
  description:
    "Lead enrichment API to turn emails, phones, and profile URLs into complete professional profiles. B2B contact enrichment with verified data — job titles, company info, and more. 1 credit per call.",
  path: "/products/people-enrichment",
  keywords: [
    "lead enrichment API",
    "email enrichment api",
    "b2b lead enrichment",
    "contact data enrichment",
    "people enrichment API",
  ],
});

function PeopleEnrichmentFeaturesSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          People Enrichment API - Lead Enrichment and Contact Data Enrichment
        </h2>
        <p>
          B2BEnrich's lead enrichment API transforms partial contact identifiers
          into complete professional profiles. Turn emails, phone numbers, or
          LinkedIn URLs into comprehensive contact data with 250+ data points.
          Our people enrichment API provides verified job titles, company
          information, work history, education, and social profiles. Essential
          for B2B lead enrichment, contact data enrichment, and email
          enrichment workflows.
        </p>
        <h3>Email Enrichment API - Resolve Email to Full Profile</h3>
        <p>
          Our email enrichment API takes any business email and returns the
          complete professional profile. Get full name, current job title,
          company name, seniority level, department, location, phone numbers,
          and social media profiles. Perfect for lead enrichment on form fills,
          CRM data enrichment, and contact data enrichment workflows. 1 credit
          per enrichment call.
        </p>
        <h3>Phone Number Enrichment - Contact Data Enrichment</h3>
        <p>
          Enrich phone numbers to reveal full contact profiles. Our people
          enrichment API resolves mobile and business phone numbers to complete
          professional records with verified emails, job titles, and company
          data. Essential for B2B lead enrichment and contact data enrichment
          from phone-based leads.
        </p>
        <h3>LinkedIn Profile Enrichment - Social Profile to Contact Data</h3>
        <p>
          Turn LinkedIn profile URLs into actionable contact data. Our lead
          enrichment API extracts and enriches LinkedIn profiles with verified
          business emails, phone numbers, company firmographics, and work
          history. Complete people enrichment for social selling and B2B lead
          enrichment workflows.
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
          Explore additional data enrichment tools and APIs to complement your
          lead enrichment and people enrichment workflows. Company enrichment
          API, email verification API, B2B prospecting, and more.
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
        <h2>People Enrichment API Pricing - Credit-Based Lead Enrichment</h2>
        <p>
          Simple credit-based pricing for lead enrichment API and people
          enrichment services. 1 credit per enrichment call. No seat fees, no
          minimums. Pay only for the contact data enrichment and email
          enrichment you use.
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
          People Enrichment API FAQ - Lead Enrichment and Contact Data
          Enrichment Questions
        </h2>
        <p>
          Common questions about B2BEnrich's lead enrichment API, people
          enrichment capabilities, email enrichment features, and contact data
          enrichment workflows. Learn how to enrich contacts, verify data
          quality, and integrate B2B lead enrichment into your product.
        </p>
      </div>
      <div className="w-full py-16 animate-pulse" aria-hidden="true">
        <div className="h-80 bg-muted rounded-lg mx-4" />
      </div>
    </div>
  );
}

export default function PeopleEnrichmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://b2benrich.com/" },
          { name: "Products", url: "https://b2benrich.com/products" },
          {
            name: "People Enrichment API",
            url: "https://b2benrich.com/products/people-enrichment",
          },
        ]}
      />
      <FAQSchema items={flattenCategories(peopleEnrichmentFAQ)} />
      <SoftwareAppSchema
        name="B2BEnrich People Enrichment API"
        description="Lead enrichment API turning emails, phones, and profile URLs into complete professional profiles with 250+ data points. 1 credit per call."
        url="https://b2benrich.com/products/people-enrichment"
        category="BusinessApplication"
      />

      <SolutionHero
        badge="PERSON ENRICHMENT API"
        title="Lead Enrichment API — Enrich & Resolve Contact Data"
        description="Turn emails, phones, and profile URLs into complete professional profiles. B2B lead enrichment API with verified contact data, work history, and company insights in real-time."
        primaryCtaLink="https://docs.b2benrich.com/api/person#social-url-to-person-1-credit-per-request"
        showIllustration={true}
        illustrationPreset="people-enrichment"
      />

      <LazySection
        fallback={<PeopleEnrichmentFeaturesSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<PeopleEnrichmentFeaturesSkeleton />}>
          <PeopleEnrichmentFeatures />
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
          <FAQ categories={peopleEnrichmentFAQ} />
        </React.Suspense>
      </LazySection>
    </>
  );
}
