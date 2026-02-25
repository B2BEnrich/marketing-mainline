import * as React from "react";
import { LazySection } from "@/components/optimization/lazy-section";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { SoftwareAppSchema } from "@/components/seo/software-app-schema";
import { validationFAQ } from "@/lib/faq-data";
import { ContentSummary } from "@/components/seo/content-summary";
import { generatePageMetadata, flattenCategories } from "@/lib/seo";

import { CTASkeleton } from "@/components/blocks/footer-cta-skeleton";

const FooterCta = React.lazy(() =>
  import("@/components/blocks/footer-cta").then((m) => ({
    default: m.FooterCta,
  })),
);

const ValidationFeatures = React.lazy(() =>
  import("@/components/blocks/validation-features").then((m) => ({
    default: m.ValidationFeatures,
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
  title: "Email Verification & Validation API",
  description:
    "Real-time email verification and email validation API. Check email deliverability, validate phone numbers, and reduce bounce rates. Email checker API with SMTP verification. 1 credit per check.",
  path: "/products/validation",
  keywords: [
    "email verification API",
    "email validation API",
    "email checker api",
    "email validator api",
    "verify email api",
    "email finder api",
    "email lookup api",
  ],
});

function ValidationFeaturesSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          Email Verification API - Email Validation and Email Checker Services
        </h2>
        <p>
          B2BEnrich's email verification API provides real-time email validation
          with SMTP-level checks. Our email checker API verifies deliverability,
          detects disposable addresses, validates MX records, checks breach
          history, and scores email quality. Essential for reducing bounce
          rates, protecting sender reputation, and ensuring clean email lists.
          Also includes email finder API and email lookup API capabilities.
        </p>
        <h3>Real-Time Email Validation API - SMTP Verification</h3>
        <p>
          Our email validation API performs comprehensive SMTP verification in
          real-time. Check if an email address exists, verify the mailbox is
          active, validate MX records, and detect catch-all domains. Our email
          verification API provides instant deliverability scoring to reduce
          bounce rates. Perfect for form validation, CRM cleaning, and email
          list hygiene. 1 credit per verification.
        </p>
        <h3>Email Checker API - Disposable and Temporary Email Detection</h3>
        <p>
          Detect disposable email addresses, temporary mailboxes, and role-based
          emails with our email checker API. Our email verification service
          identifies spam traps, free email providers, and risky domains. Verify
          email quality before adding to your database with comprehensive email
          validation.
        </p>
        <h3>Email Finder API and Email Lookup API</h3>
        <p>
          Find and verify business emails with our email finder API. Look up
          email addresses by name and company domain, then validate
          deliverability with our email verification API. Our email lookup API
          combines discovery and validation for complete email intelligence. 1
          credit per lookup.
        </p>
        <h3>Phone Validation API - Verify Phone Numbers</h3>
        <p>
          Validate phone numbers with our phone validation API. Check number
          format, verify carrier information, detect line type (mobile/landline),
          and validate country codes. Essential for SMS campaigns and contact
          data quality. 1 credit per validation.
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
          Explore additional data enrichment tools to complement your email
          verification and validation workflows. People enrichment API, company
          enrichment, B2B database access, and more.
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
          Email Verification API Pricing - Credit-Based Email Validation
        </h2>
        <p>
          Simple credit-based pricing for email verification API and email
          validation services. 1 credit per verification. No seat fees, no
          minimums. Pay only for the email checker and verify email API calls
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
          Email Verification API FAQ - Email Validation and Email Checker
          Questions
        </h2>
        <p>
          Common questions about B2BEnrich's email verification API, email
          validation capabilities, email checker features, and verify email
          workflows. Learn how to validate emails, reduce bounce rates, and
          integrate email verification into your product.
        </p>
      </div>
      <div className="w-full py-16 animate-pulse" aria-hidden="true">
        <div className="h-80 bg-muted rounded-lg mx-4" />
      </div>
    </div>
  );
}

export default function ValidationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.b2benrich.com/" },
          { name: "Products", url: "https://www.b2benrich.com/products" },
          {
            name: "Email Verification & Validation API",
            url: "https://www.b2benrich.com/products/validation",
          },
        ]}
      />
      <FAQSchema items={flattenCategories(validationFAQ)} />
      <SoftwareAppSchema
        name="B2BEnrich Email Verification & Validation API"
        description="Real-time email verification API with SMTP checks, deliverability scoring, disposable address detection, and phone validation. 1 credit per check."
        url="https://www.b2benrich.com/products/validation"
        category="BusinessApplication"
      />

      <ContentSummary
        title="Email Verification & Validation API — SMTP Checks, Disposable Detection & Phone Validation"
        description="B2BEnrich provides real-time email verification with SMTP-level checks. Verifies deliverability, detects disposable addresses, validates MX records, checks breach history, and scores email quality. Also includes email finder and phone validation. 1 credit per check."
        keyPoints={[
          "Real-Time Email Validation API: Comprehensive SMTP verification — checks mailbox existence, validates MX records, detects catch-all domains, and provides instant deliverability scoring. 1 credit per verification.",
          "Disposable and Temporary Email Detection: Identifies disposable email addresses, temporary mailboxes, role-based emails, spam traps, free email providers, and risky domains.",
          "Email Finder API: Look up business email addresses by name and company domain, then validate deliverability instantly. 1 credit per lookup.",
          "Phone Validation API: Check number format, verify carrier information, detect line type (mobile/landline), and validate country codes. 1 credit per validation.",
          "Breach History Checks: Cross-references emails against known data breaches to flag compromised addresses before adding to your database.",
          "Credit-based pricing: 1 credit per verification or validation. No seat fees. Free tier available.",
        ]}
      />

      <SolutionHero
        badge="EMAIL VALIDATION API"
        title="Email Verification & Validation API"
        description="Real-time email verification and phone validation API. Check email deliverability with SMTP verification, detect disposable addresses, and validate phone numbers to reduce bounce rates."
        primaryCtaLink="https://docs.b2benrich.com/api/validation#validate-an-email-address-1-credit"
        showIllustration={true}
        illustrationPreset="validation"
      />

      <LazySection
        fallback={<ValidationFeaturesSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<ValidationFeaturesSkeleton />}>
          <ValidationFeatures />
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
          <FAQ categories={validationFAQ} />
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
