import * as React from "react";
import { LazySection } from "@/components/optimization/lazy-section";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { SoftwareAppSchema } from "@/components/seo/software-app-schema";
import { technographicDataFAQ } from "@/lib/faq-data";
import { ContentSummary } from "@/components/seo/content-summary";
import { generatePageMetadata, flattenCategories } from "@/lib/seo";

const TechnographicDataFeatures = React.lazy(() =>
  import("@/components/blocks/technographic-data-features").then((m) => ({
    default: m.TechnographicDataFeatures,
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
  title: "B2B Technographic Data — Technology Stack Intelligence",
  description:
    "Access comprehensive B2B technographic data for 50M+ companies. Discover technology stacks, software usage, and tech adoption signals. Technographic segmentation API for sales and marketing teams.",
  path: "/solutions/b2b-technographic-data",
  keywords: [
    "b2b technographic data",
    "technographic data",
    "technographic segmentation",
    "technology stack data",
    "tech stack intelligence",
  ],
});

function TechnographicDataFeaturesSkeleton(): React.JSX.Element {
  return (
    <div className="w-full py-16">
      <div className="sr-only">
        <h2>
          B2B Technographic Data - Technology Stack Intelligence and
          Technographic Segmentation
        </h2>
        <p>
          B2BEnrich provides comprehensive B2B technographic data for 50M+
          companies worldwide. Our technographic data API reveals complete
          technology stacks, software usage patterns, and tech adoption signals
          across 15+ technology categories. Essential for technographic
          segmentation, competitive intelligence, and technology-based
          prospecting. Leading provider of technographic data and technology
          stack intelligence.
        </p>
        <h3>Technology Stack Detection - B2B Technographic Data</h3>
        <p>
          Discover the complete technology stack for any company with our B2B
          technographic data API. Detect CRM systems (Salesforce, HubSpot),
          marketing automation platforms, analytics tools, hosting providers,
          payment processors, and more. Our technographic data covers 15+
          technology categories. Best technographic segmentation for
          technology-based targeting.
        </p>
        <h3>Technographic Segmentation - Target by Technology</h3>
        <p>
          Build targeted account lists with technographic segmentation. Filter
          companies by the technologies they use, identify prospects using
          competitor products, or find accounts ready for migration. Our B2B
          technographic data enables precision targeting based on technology
          stack intelligence. Leading technographic data for sales prospecting.
        </p>
        <h3>Tech Adoption Signals - Technographic Data Intelligence</h3>
        <p>
          Identify companies adopting new technologies with our technographic
          data API. Track technology changes, detect recent implementations, and
          discover early adopters. Our B2B technographic data includes adoption
          timing and technology stack evolution. Best technographic segmentation
          for intent-based prospecting.
        </p>
        <h3>Competitive Intelligence - Technology Stack Data</h3>
        <p>
          Analyze competitor customer bases with our B2B technographic data.
          Discover which companies use competitor products, identify
          dissatisfied customers, and find replacement opportunities. Our
          technographic data provides complete technology stack intelligence for
          competitive analysis and technographic segmentation.
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
        <h2>Related B2B Technographic Data Products</h2>
        <p>
          Explore additional data enrichment tools to complement your B2B
          technographic data and technographic segmentation workflows. Company
          enrichment, B2B prospecting, and more technology stack intelligence
          solutions.
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
          B2B Technographic Data Pricing - Credit-Based Technographic
          Segmentation
        </h2>
        <p>
          Simple credit-based pricing for B2B technographic data and
          technographic segmentation. 1 credit per company enrichment with
          technology stack data. No seat fees, no minimums. Pay only for the
          technographic data and technology stack intelligence you use.
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
          B2B Technographic Data FAQ - Technographic Segmentation and Technology
          Stack Questions
        </h2>
        <p>
          Common questions about B2BEnrich's B2B technographic data,
          technographic segmentation capabilities, technology stack intelligence,
          and technographic data API. Learn how to access technology stack data,
          build technographic segments, and integrate technographic data into
          your sales workflow.
        </p>
      </div>
      <div className="w-full py-16 animate-pulse" aria-hidden="true">
        <div className="h-80 bg-muted rounded-lg mx-4" />
      </div>
    </div>
  );
}

export default function B2BTechnographicDataPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://b2benrich.com/" },
          { name: "Solutions", url: "https://b2benrich.com/solutions" },
          {
            name: "B2B Technographic Data",
            url: "https://b2benrich.com/solutions/b2b-technographic-data",
          },
        ]}
      />
      <FAQSchema items={flattenCategories(technographicDataFAQ)} />
      <SoftwareAppSchema
        name="B2BEnrich Technographic Data API"
        description="B2B technographic data API providing technology stack intelligence for 50M+ companies. Discover software usage, tech adoption signals, and technographic segmentation."
        url="https://b2benrich.com/solutions/b2b-technographic-data"
        category="BusinessApplication"
      />

      <ContentSummary
        title="B2B Technographic Data — Technology Stack Intelligence for 50M+ Companies"
        description="B2BEnrich provides comprehensive B2B technographic data for 50M+ companies worldwide. Reveals complete technology stacks, software usage patterns, and tech adoption signals across 15+ categories. Essential for technographic segmentation and competitive intelligence."
        keyPoints={[
          "Technology Stack Detection: Detect CRM systems (Salesforce, HubSpot), marketing automation, analytics tools, hosting providers, payment processors, and 15+ technology categories for any company.",
          "Technographic Segmentation: Build targeted account lists by filtering companies on the technologies they use. Identify prospects on competitor products or find accounts ready for migration.",
          "Tech Adoption Signals: Track technology changes, detect recent implementations, and discover early adopters. Includes adoption timing and technology stack evolution data.",
          "Competitive Intelligence: Analyze competitor customer bases, identify dissatisfied customers, and find replacement opportunities using full technology stack data.",
          "Credit-based pricing: 1 credit per company enrichment with full technology stack. No seat fees. Free tier available.",
        ]}
      />

      <SolutionHero
        badge="TECHNOGRAPHIC DATA API"
        title="B2B Technographic Data — Technology Stack Intelligence"
        description="Access comprehensive technographic data for 50M+ companies. Discover complete technology stacks, software usage patterns, and tech adoption signals for precision targeting and competitive intelligence."
        primaryCtaLink="https://docs.b2benrich.com/api/search#search-companies"
        showIllustration={true}
        illustrationPreset="company-enrichment"
      />

      <LazySection
        fallback={<TechnographicDataFeaturesSkeleton />}
        rootMargin="200px 0px"
      >
        <React.Suspense fallback={<TechnographicDataFeaturesSkeleton />}>
          <TechnographicDataFeatures />
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
          <FAQ categories={technographicDataFAQ} />
        </React.Suspense>
      </LazySection>
    </>
  );
}
