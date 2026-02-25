import * as React from "react";
import { LazySection } from "@/components/optimization/lazy-section";
import { Hero } from "@/components/blocks/hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { ContentSummary } from "@/components/seo/content-summary";
import { FAQSchema } from "@/components/seo/faq-schema";
import { ServiceSchema } from "@/components/seo/service-schema";
import { SoftwareAppSchema } from "@/components/seo/software-app-schema";
import { homeFAQ } from "@/lib/faq-data";
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

const ApiSection = React.lazy(() =>
  import("@/components/blocks/apis-block").then((m) => ({
    default: m.ApiSection,
  })),
);

const FooterPricing = React.lazy(() =>
  import("@/components/blocks/footer-pricing").then((m) => ({
    default: m.FooterPricing,
  })),
);

const HowCreditsWork = React.lazy(() =>
  import("@/components/blocks/how-credits-work").then((m) => ({
    default: m.HowCreditsWork,
  })),
);

const FAQ = React.lazy(() =>
  import("@/components/blocks/faq").then((m) => ({ default: m.FAQ })),
);

export const metadata = generatePageMetadata({
  title: "B2B Data Enrichment API — 550M+ Contacts & Companies",
  description:
    "The B2B data enrichment API for developers and product teams. Enrich contacts and companies with 250+ data points. Access 550M+ profiles via simple REST API. 1 credit per call.",
  path: "/",
  keywords: [
    "B2B data enrichment API",
    "b2b data api",
    "data enrichment API",
    "lead enrichment API",
    "b2b data providers",
  ],
});

function EnrichmentDataSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          B2B Data Enrichment API - Enrich Contacts and Companies with 250+
          Data Points
        </h2>
        <p>
          B2BEnrich provides comprehensive B2B data enrichment services through
          a simple REST API. Access 550M+ professional contacts and 50M+
          companies with verified data. Our data enrichment API returns 250+
          data points per record including verified emails, job titles, company
          firmographics, and technology stack. Leading B2B data providers for
          developers and product teams.
        </p>
        <h3>People Enrichment - Lead Enrichment API</h3>
        <p>
          Turn emails, phones, and profile URLs into complete professional
          profiles with our lead enrichment API. Get full name, current job
          title, company name, verified email address, phone numbers, and
          location data. Perfect for contact data enrichment and B2B lead
          enrichment workflows. 1 credit per enrichment call.
        </p>
        <h3>Company Enrichment - Company Data Enrichment API</h3>
        <p>
          Resolve company domains into rich firmographic profiles with our
          company enrichment API. Returns industry, revenue range, employee
          count, funding history, HQ location, and full technology stack across
          15+ categories. Essential for B2B company data enrichment and CRM data
          enrichment. 1 credit per call.
        </p>
      </div>
      <div className="container px-4" aria-hidden="true">
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

function ApiSectionSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>B2B Data API Endpoints - Complete Data Enrichment Tools</h2>
        <p>
          B2BEnrich offers a complete suite of B2B data API endpoints for all
          data enrichment needs. Our data enrichment tools cover people
          enrichment, company enrichment, email verification API, email
          validation API, B2B contact database search, company search, and
          advanced prospecting. All endpoints return JSON and support real-time
          and bulk processing.
        </p>
        <h3>Email Verification API and Email Validation API</h3>
        <p>
          Real-time email verification API with SMTP-level checks. Our email
          validation API verifies deliverability, detects disposable addresses,
          validates MX records, and checks breach history. Also includes email
          finder API and email checker API functionality. 1 credit per
          validation.
        </p>
        <h3>B2B Contact Database and People Search</h3>
        <p>
          Search our B2B contact database of 550M+ professionals. Find contacts
          by job title, company, seniority, and location. Leading B2B contact
          database provider with verified emails and complete profiles. Perfect
          for building targeted lead lists and B2B prospecting.
        </p>
        <h3>Company Search and B2B Database Access</h3>
        <p>
          Query our B2B database of 50M+ companies by industry, employee range,
          revenue, and technology stack. Professional data API for building
          target account lists. Access the most comprehensive B2B company
          database via REST API.
        </p>
      </div>
      <div className="container px-4" aria-hidden="true">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="h-8 bg-muted rounded-lg w-1/2 mx-auto mb-4" />
          <div className="h-4 bg-muted rounded w-full mb-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
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
        <h2>B2BEnrich Pricing - Credit-Based Data Enrichment Services</h2>
        <p>
          B2BEnrich uses transparent credit-based pricing for all data
          enrichment services. No seat fees, no annual contracts, no minimum
          commitments. Pay only for the data enrichment API calls you make.
          Leading B2B data providers with flexible pricing for teams of all
          sizes.
        </p>
        <h3>Enrichment and Validation - 1 Credit Per Call</h3>
        <p>
          People enrichment API, company enrichment API, email verification API,
          email validation API, email finder API, and phone validation all cost
          1 credit per successful call. Get 250+ data points per person record
          and complete firmographic data per company record. Best data
          enrichment tools with simple per-call pricing.
        </p>
        <h3>Prospector Search - 5 Credits Per Search</h3>
        <p>
          Advanced B2B prospecting with 30+ filters costs 5 credits per search
          call. Query the full B2B database and B2B contact database with
          filters for job title, company size, industry, location, and
          technology stack. Top B2B data providers for precision prospecting.
        </p>
        <h3>Free Tier and Paid Plans</h3>
        <p>
          Start with a free tier to explore the data enrichment API. Paid plans
          available at app.b2benrich.com/pricing with volume discounts. All
          plans include access to the full B2B data API, data enrichment
          services, and B2B contact database. GDPR-compliant data enrichment
          company.
        </p>
      </div>
      <div className="container px-4" aria-hidden="true">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="h-8 bg-muted rounded-lg w-1/2 mx-auto mb-4" />
          <div className="h-4 bg-muted rounded w-full mb-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="border border-muted rounded-lg p-6 space-y-4"
            >
              <div className="h-6 bg-muted rounded w-1/2" />
              <div className="h-8 bg-muted rounded w-1/3" />
              <div className="space-y-2">
                {[0, 1, 2, 3].map((j) => (
                  <div key={j} className="h-4 bg-muted rounded" />
                ))}
              </div>
              <div className="h-10 bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HowCreditsWorkSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>How B2BEnrich Credits Work - Data Enrichment API Pricing</h2>
        <p>
          B2BEnrich uses a simple credit system for all data enrichment services
          and B2B data API calls. Every API request consumes credits from your
          account balance. Credits never expire and can be purchased at any time
          without upgrading plans. Transparent pricing from leading B2B data
          providers.
        </p>
        <h3>Credit Costs for Data Enrichment Tools</h3>
        <p>
          People enrichment: 1 credit per call. Company enrichment: 1 credit per
          call. Email verification API: 1 credit per check. Email validation
          API: 1 credit per check. Phone validation: 1 credit per check. Email
          finder API: 1 credit per lookup. Prospector search: 5 credits per
          search with 30+ filters. All data enrichment API endpoints return
          complete records with 250+ data points.
        </p>
        <h3>Check Your Credit Balance</h3>
        <p>
          View your remaining credit balance at any time via the API or
          dashboard. No hidden fees or surprise charges. Best data enrichment
          tools with transparent credit-based pricing for B2B data enrichment
          services.
        </p>
      </div>
      <div className="container px-4" aria-hidden="true">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <div className="h-8 bg-muted rounded-lg w-1/2 mx-auto mb-4" />
          <div className="h-4 bg-muted rounded w-full mb-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-muted rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          Frequently Asked Questions About B2BEnrich Data Enrichment API
        </h2>
        <h3>What is the B2BEnrich data enrichment API?</h3>
        <p>
          B2BEnrich is a B2B data enrichment API that turns partial identifiers
          — an email, a company domain, or a profile URL — into complete
          professional and firmographic profiles. Access 550M+ contacts and 50M+
          companies via a simple RESTful API. Each enrichment call returns 250+
          data points including verified emails, job titles, company revenue,
          employee count, and technology stack. It costs 1 credit per call.
          Leading B2B data providers for developers.
        </p>
        <h3>
          What makes B2BEnrich different from other B2B data providers?
        </h3>
        <p>
          Unlike static B2B databases that go stale, B2BEnrich provides
          real-time data enrichment through a developer-first API. We cover
          people enrichment, company enrichment, email verification, people
          search, company search, and advanced prospecting — all in one
          platform. Our data is GDPR-compliant, continuously refreshed, and
          priced per call with no seat fees or minimum commitments. Best data
          enrichment tools for product teams.
        </p>
        <h3>
          Which data enrichment tools and use cases does B2BEnrich support?
        </h3>
        <p>
          B2BEnrich supports lead enrichment on form fill, CRM data enrichment
          (HubSpot, Salesforce, Clay), B2B prospecting with 30+ filters, bulk
          contact data enrichment, email validation, company tech stack
          detection, and AI agent data pipelines. It's used by product teams,
          sales ops teams, and growth engineers who need reliable B2B data at
          scale. Top data enrichment services and data enrichment company.
        </p>
        <h3>How does the credit-based pricing work?</h3>
        <p>
          Every API call consumes credits from your account balance. Most
          enrichment and validation endpoints cost 1 credit per request.
          Prospector search costs 5 credits. You can check your remaining
          balance at any time via the API. Credits never expire, and you can
          purchase more at any time without upgrading to a higher tier.
          Transparent pricing from leading B2B data providers.
        </p>
        <h3>
          How many contacts and companies are in the B2BEnrich B2B database?
        </h3>
        <p>
          B2BEnrich covers 550M+ professional profiles and 50M+ companies
          worldwide. The B2B contact database spans every major industry,
          company size, and geography. Each contact record includes job title,
          company, location, and verified email address. Each company record
          includes industry, revenue range, employee count, tech stack, funding
          data, and headquarters location. Most comprehensive B2B database from
          top B2B data providers.
        </p>
        <h3>Is the data GDPR-compliant?</h3>
        <p>
          Yes. B2BEnrich only indexes publicly available professional data. We
          provide mechanisms for data subject access requests and comply with
          GDPR, CCPA, and other applicable data privacy regulations. All API
          traffic is encrypted via HTTPS. GDPR-compliant data enrichment
          services and B2B data API.
        </p>
      </div>
      <div className="w-full py-16" aria-hidden="true">
        <div className="h-80 bg-muted rounded-lg mx-4" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Home", url: "https://b2benrich.com/" }]}
      />
      <FAQSchema items={flattenCategories(homeFAQ)} />
      <SoftwareAppSchema
        name="B2BEnrich — B2B Data Enrichment API"
        description="Real-time REST API providing people enrichment, company enrichment, email verification, B2B contact search, and prospecting across 550M+ contacts and 50M+ companies."
        url="https://b2benrich.com"
        category="BusinessApplication"
      />
      <ServiceSchema
        name="B2BEnrich — B2B Data Enrichment API & Services"
        description="Real-time B2B data enrichment API for developers and product teams. Enrich contacts and companies with 250+ data points. Access 550M+ profiles via REST API. 1 credit per call."
      />

      <ContentSummary
        title="B2BEnrich — B2B Data Enrichment API for Developers and Product Teams"
        description="B2BEnrich provides real-time B2B data enrichment through a simple REST API. Access 550M+ professional contacts and 50M+ companies with 250+ data points per record. Credit-based pricing — 1 credit per enrichment call, 5 credits per search. GDPR-compliant. Integrates with HubSpot, Salesforce, Clay, and any system that accepts HTTP."
        keyPoints={[
          "People Enrichment API: Turn emails, phones, and LinkedIn URLs into complete professional profiles — verified job title, company, seniority, location, work history, and social profiles. 1 credit per call.",
          "Company Enrichment API: Resolve company domains into rich firmographic profiles — industry, revenue range, employee count, funding history, HQ location, and technology stack across 15+ categories. 1 credit per call.",
          "Email Verification API: Real-time SMTP-level verification with deliverability scoring, disposable address detection, MX record validation, and breach history checks. 1 credit per check.",
          "B2B Contact Database — People Search: Search 550M+ professional profiles by job title, company, seniority, department, and location to build targeted lead lists. 5 credits per search.",
          "Company Search API: Query 50M+ companies by industry, revenue range, employee count, and technology stack for targeted account lists. 5 credits per search.",
          "B2B Prospector — Advanced Filtering: Build highly targeted lead lists with 30+ filters including technology stack, revenue, intent signals, and seniority. 5 credits per prospector search.",
          "CRM Data Enrichment: Native integrations for HubSpot, Salesforce, and Pipedrive to keep CRM records fresh automatically with verified contact and company data.",
          "Credit-based pricing: 1 credit per enrichment or validation, 5 credits per search. No seat fees, no annual contracts. Credits never expire. Free tier available.",
          "GDPR-compliant: Ethically sourced public professional data with full compliance for GDPR, CCPA, and data privacy regulations.",
        ]}
      />

      <div className="px-0 md:px-8 lg:px-12">
        <Hero />
      </div>

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

      <LazySection fallback={<ApiSectionSkeleton />} rootMargin="200px 0px">
        <React.Suspense fallback={<ApiSectionSkeleton />}>
          <div className="px-0">
            <ApiSection />
          </div>
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

      <LazySection
        fallback={<HowCreditsWorkSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<HowCreditsWorkSkeleton />}>
          <HowCreditsWork />
        </React.Suspense>
      </LazySection>

      <LazySection fallback={<FAQSkeleton />} rootMargin="200px 0px">
        <React.Suspense fallback={<FAQSkeleton />}>
          <FAQ categories={homeFAQ} />
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
