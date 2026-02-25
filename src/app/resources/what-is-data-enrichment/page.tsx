import * as React from "react";
import { ArrowRight, CheckCircle, BookOpen, Lightbulb, BarChart3, Database, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/blocks/faq";
import { resourcesDataEnrichmentFAQ } from "@/lib/faq-data";
import { generatePageMetadata, flattenCategories } from "@/lib/seo";
import { ArticleSchema } from "@/components/seo/article-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { LazySection } from "@/components/optimization/lazy-section";

import { CTASkeleton } from "@/components/blocks/footer-cta-skeleton";

const FooterCta = React.lazy(() =>
  import("@/components/blocks/footer-cta").then((m) => ({
    default: m.FooterCta,
  })),
);

export const metadata = generatePageMetadata({
  title: "What Is Data Enrichment? A Complete Guide",
  description:
    "Learn what data enrichment is, how it works, and the best techniques and tools for B2B use cases. Covers CRM enrichment, contact data enrichment, data enrichment examples, and best practices for enriching B2B account data.",
  path: "/resources/what-is-data-enrichment",
  keywords: [
    "what is data enrichment",
    "data enrichment examples",
    "data enrichment best practices",
    "data enrichment techniques",
    "data enrichment services",
    "enrich the data",
  ],
});

export default function WhatIsDataEnrichmentPage() {
  return (
    <>
    <article className="max-w-4xl mx-auto px-4 py-16 lg:py-24">

      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex rounded-full border border-border bg-card/50 px-6 py-2 shadow-sm mb-6">
          <span className="text-foreground text-sm font-semibold">DATA ENRICHMENT GUIDE</span>
        </div>
        <h1 className="text-foreground mb-6">
          What Is Data Enrichment? A Complete Guide
        </h1>
        <p className="text-muted-foreground text-balance max-w-3xl mx-auto">
          Data enrichment is the process of enhancing existing records with additional information from external sources. In B2B, this means turning sparse contact and company records into rich, actionable profiles.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-card border border-border rounded-xl p-6 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="size-5 text-primary" />
          <h6 className="text-foreground">In This Guide</h6>
        </div>
        <ol className="space-y-2 text-sm">
          {[
            ["#what-is", "What is data enrichment?"],
            ["#how-it-works", "How does data enrichment work?"],
            ["#b2b-use-cases", "B2B use cases and examples"],
            ["#techniques", "Data enrichment techniques"],
            ["#best-practices", "Best practices for B2B enrichment"],
            ["#crm-enrichment", "CRM data enrichment"],
            ["#icp-definition", "Enriching B2B account data for ICP definition"],
            ["#tools", "Data enrichment tools and services"],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-primary hover:underline">{label}</a>
            </li>
          ))}
        </ol>
      </div>

      {/* Section 1 */}
      <section id="what-is" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Lightbulb className="size-5 text-primary" />
          </div>
          <h2>What is data enrichment?</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          <strong className="text-foreground">Data enrichment</strong> is the process of supplementing your existing data records with additional, verified information sourced externally. When applied to B2B data, enrichment takes incomplete contact or company records — a name and email, a company domain, a job title — and fills them out with a full picture.
        </p>
        <p className="text-muted-foreground mb-4">
          A <strong className="text-foreground">contact enrichment</strong> call might take an email address and return the person&apos;s full name, current job title, company, location, and phone number. A <strong className="text-foreground">company enrichment</strong> call might take a domain and return the company&apos;s industry, employee count, revenue range, technology stack, and funding history.
        </p>
        <div className="bg-muted/40 border border-border rounded-lg p-5 my-6">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-3">Simple example</p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-foreground mb-2">Before enrichment</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>Email: john@acme.com</li>
                <li>Company: Acme Corp</li>
                <li>Source: form fill</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">After data enrichment</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>Full name: John Smith</li>
                <li>Title: VP of Sales</li>
                <li>Company size: 51–200 employees</li>
                <li>Industry: SaaS</li>
                <li>Revenue: $5M–$10M</li>
                <li>Tech stack: Salesforce, HubSpot</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="how-it-works" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <RefreshCw className="size-5 text-primary" />
          </div>
          <h2>How does data enrichment work?</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Modern data enrichment works through an API. You send a known identifier — an email address, a company domain, or a professional profile URL — and the enrichment API returns all associated data it has on file.
        </p>
        <p className="text-muted-foreground mb-4">
          The data enrichment platform maintains a large, continuously updated database of B2B contacts and companies. When you call the API, it looks up the identifier in that database and returns enriched data in real time.
        </p>
        <p className="text-muted-foreground">
          The best data enrichment services do this at scale — supporting bulk enrichment for thousands of records — and keep their database fresh through ongoing data collection and verification. The result is <strong className="text-foreground">enriched data</strong> that your sales, marketing, and product teams can act on immediately.
        </p>
      </section>

      {/* Section 3 */}
      <section id="b2b-use-cases" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <BarChart3 className="size-5 text-primary" />
          </div>
          <h2>B2B use cases and data enrichment examples</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          Data enrichment is used throughout the B2B revenue stack. Here are the most common use cases, with concrete data enrichment examples:
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Lead enrichment on form fill",
              desc: "A prospect submits a demo request with only their email. Your app calls the enrichment API, appends their full name, company, job title, and company size, and routes the lead to the right sales rep — before any human touches it.",
            },
            {
              title: "CRM data enrichment",
              desc: "Your CRM contains thousands of stale contact and account records. You run a bulk enrichment pass to update job titles, emails, phone numbers, and revenue data — cleaning your database and improving outreach accuracy.",
            },
            {
              title: "ICP scoring and segmentation",
              desc: "Enrich every new lead with company firmographics and technology stack data, then score them against your Ideal Customer Profile. Route high-fit accounts to enterprise sales and low-fit to self-serve.",
            },
            {
              title: "Outbound prospecting",
              desc: "Build targeted contact lists by searching the B2B database for people who match your ICP — job title, company size, industry, and technology stack — and enrich each result with a verified email for outreach.",
            },
            {
              title: "Product personalization",
              desc: "Enrich signed-up users in the background. Know their industry, company size, and role without asking. Use that data to personalize onboarding flows, feature discovery, and pricing recommendations.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-lg">
              <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">{item.title}</p>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 */}
      <section id="techniques" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Database className="size-5 text-primary" />
          </div>
          <h2>Data enrichment techniques</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          There are several established <strong className="text-foreground">contact data enrichment techniques</strong>, each suited to different workflows:
        </p>
        <div className="space-y-6">
          {[
            {
              technique: "Real-time API enrichment",
              desc: "The most common technique for product teams. Trigger an enrichment API call the moment a new record is created — on form fill, sign-up, or CRM import. Returns enriched data in milliseconds.",
            },
            {
              technique: "Batch / bulk enrichment",
              desc: "Process a large backlog of existing records in bulk. Upload a CSV of emails or domains and receive enriched data back. Used to clean existing CRM databases or one-time data appending operations.",
            },
            {
              technique: "Scheduled re-enrichment",
              desc: "Job titles, emails, and company data go stale over time. Scheduled re-enrichment runs on a cadence — monthly or quarterly — to keep your data current. Particularly valuable for long sales cycles.",
            },
            {
              technique: "Reverse enrichment (domain-first)",
              desc: "Start with a company domain or IP address and work backwards to identify the company, then enrich with firmographics. Common in de-anonymization tools and website visitor intelligence products.",
            },
          ].map((item, i) => (
            <div key={i} className="border-l-2 border-primary/30 pl-5">
              <h6 className="text-foreground mb-1">{item.technique}</h6>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 */}
      <section id="best-practices" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <CheckCircle className="size-5 text-primary" />
          </div>
          <h2>Data enrichment best practices</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          To get the most out of your data enrichment program, follow these <strong className="text-foreground">data enrichment best practices</strong>:
        </p>
        <ul className="space-y-4">
          {[
            "Enrich at the point of entry — trigger enrichment the moment a new record lands in your system, before it reaches sales or marketing.",
            "Use the highest-fidelity identifier available — profile URLs return the most complete data; emails are second; names alone are least reliable.",
            "Re-enrich on a schedule — job titles and emails change frequently. For active outbound lists, re-enrich every 90 days.",
            "Validate emails separately — enrichment returns an email address, but a dedicated email validation API confirms it is deliverable before you send.",
            "Store raw and enriched data separately — preserve the original record alongside enriched fields so you can re-enrich cleanly without data conflicts.",
            "Choose a GDPR-compliant data enrichment provider — ensure the enrichment data is legally sourced and that your provider offers data subject request handling.",
          ].map((practice, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{practice}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 6 */}
      <section id="crm-enrichment" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <RefreshCw className="size-5 text-primary" />
          </div>
          <h2>CRM data enrichment</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          <strong className="text-foreground">CRM data enrichment</strong> is the practice of automatically appending fresh, verified data to contact and account records inside your CRM — whether that&apos;s HubSpot, Salesforce, or a custom system.
        </p>
        <p className="text-muted-foreground mb-4">
          Without enrichment, CRM data decays. People change jobs, companies change sizes, and email addresses go cold. Studies suggest B2B data decays at 30% per year. CRM enrichment combats this by continuously refreshing key fields.
        </p>
        <p className="text-muted-foreground">
          The most effective approach is to integrate a <strong className="text-foreground">CRM enrichment API</strong> directly into your CRM workflow — triggered on new contact creation and on a scheduled cadence for existing records. This keeps your pipeline data complete and your sales team working with accurate information.
        </p>
      </section>

      {/* Section 7 */}
      <section id="icp-definition" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <BarChart3 className="size-5 text-primary" />
          </div>
          <h2>How to enrich B2B account data for ICP definition</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Enriching your customer accounts with firmographic and technographic data is the foundation of a rigorous Ideal Customer Profile (ICP). Without enriched data, ICP definitions are based on intuition. With enriched data, they are based on patterns in your actual best customers.
        </p>
        <p className="text-muted-foreground mb-4">
          To <strong className="text-foreground">enrich B2B account data for ICP definition</strong>:
        </p>
        <ol className="space-y-4 list-none">
          {[
            "Export your top 50–100 closed-won accounts from your CRM.",
            "Run them through a company enrichment API using their domains. Append industry, employee count, revenue range, funding stage, and technology stack.",
            "Analyze patterns across the enriched fields. Which industries appear most? What employee size range? What technologies do they use?",
            "Define your ICP based on those patterns — not hunches.",
            "Use those same enriched fields as filters in your prospecting search to find lookalike companies.",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="size-7 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-muted-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Section 8 */}
      <section id="tools" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Database className="size-5 text-primary" />
          </div>
          <h2>Data enrichment tools and services</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          <strong className="text-foreground">Data enrichment tools</strong> fall into two broad categories: API-first platforms for developers and product teams, and no-code enrichment services for sales and marketing teams.
        </p>
        <p className="text-muted-foreground mb-4">
          API-first <strong className="text-foreground">data enrichment services</strong> like B2BEnrich give you direct REST API access to enrichment, search, and validation endpoints. You control when and how enrichment happens, integrate it into your own product, and pay only for what you use on a per-call credit model.
        </p>
        <p className="text-muted-foreground">
          When evaluating <strong className="text-foreground">data enrichment providers</strong>, consider data coverage (contact count and company count), freshness (how often the database is updated), compliance (GDPR and CCPA), and API reliability (uptime SLAs and latency).
        </p>
      </section>

      {/* CTA */}
      <div className="bg-card border border-border rounded-2xl p-8 text-center">
        <h2 className="mb-4">Start enriching your B2B data today</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          B2BEnrich provides a complete data enrichment API — people enrichment, company enrichment, email validation, and B2B search — all in one platform.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="https://app.b2benrich.com">
              Get Started Free <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://docs.b2benrich.com">
              Read the API Docs <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>
    </article>
    <FAQ categories={resourcesDataEnrichmentFAQ} />
    <ArticleSchema
      title="What Is Data Enrichment? A Complete Guide"
      description="Learn what data enrichment is, how it works, and the best techniques and tools for B2B use cases."
      publishedAt="2026-02-22"
      url="https://b2benrich.com/resources/what-is-data-enrichment"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://b2benrich.com/" },
        { name: "Resources", url: "https://b2benrich.com/resources" },
        {
          name: "What Is Data Enrichment?",
          url: "https://b2benrich.com/resources/what-is-data-enrichment",
        },
      ]}
    />
    <FAQSchema items={flattenCategories(resourcesDataEnrichmentFAQ)} />
      <LazySection fallback={<CTASkeleton />} rootMargin="400px 0px">
        <React.Suspense fallback={<CTASkeleton />}>
          <FooterCta />
        </React.Suspense>
      </LazySection>
    </>
  );
}
