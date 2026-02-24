"use client";

import { useState } from "react";
import { Check, Copy, Cpu, Filter, BarChart2, type LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { CodeBlockCode } from "@/components/ui/code-block";
import { ArrowRight } from "lucide-react";

const TECHSTACK_CODE = `curl --request POST \\
  --url https://api.b2benrich.com/v1/enrich/companies/domain-to-company \\
  --header 'Content-Type: application/json' \\
  --header 'X-Api-Key: YOUR_API_KEY' \\
  --data '{
  "input": "acme.com"
}'
# Response includes full technology stack:
# { "technologies": { "crm": ["Salesforce"],
#   "marketing_automation": ["HubSpot"],
#   "analytics": ["Google Analytics", "Segment"],
#   "cloud_provider": ["AWS"] } }`;

const TECH_FILTER_CODE = `curl --request POST \\
  --url https://api.b2benrich.com/v1/search/companies \\
  --header 'Content-Type: application/json' \\
  --header 'X-Api-Key: YOUR_API_KEY' \\
  --data '{
  "crm_technologies": ["Salesforce"],
  "employees_range": "51-500",
  "hq_country": "US"
}'
# Find all companies using Salesforce with 51-500 employees
# Returns: company name, domain, industry, revenue, and full tech stack`;

const TECH_META_CODE = `curl --request POST \\
  --url https://api.b2benrich.com/v1/search/meta/crm_technologies \\
  --header 'Content-Type: application/json' \\
  --header 'X-Api-Key: YOUR_API_KEY' \\
  --data '{
  "search": "sales",
  "page": 1
}'
# Browse all valid CRM technology filter values
# Also available: marketing_automation, analytics,
# cloud_provider, cms, development, ecommerce, erp`;

interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  code: string;
  language: string;
  badge: string;
  link: string;
  linkText: string;
  align?: "left" | "right";
}

const FeatureSection = ({
  title,
  description,
  features,
  icon: Icon,
  code,
  language,
  badge,
  link,
  linkText,
  align = "left",
}: FeatureSectionProps) => {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-16 lg:py-24 border-b border-border/40 last:border-0">
      <div className={`lg:col-span-5 flex flex-col gap-8 ${align === "right" ? "lg:order-last" : ""}`}>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="size-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{badge}</span>
          </div>
          <div className="space-y-4">
            <h3>{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-4">
            <a href={link}>
              {linkText} <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="flex items-center justify-between gap-2 px-4 py-2 border-b bg-card">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary">
                POST
              </span>
              <span className="text-xs text-muted-foreground font-mono">Example Request</span>
            </div>
          </div>
          <div className="relative group">
            <div className="overflow-auto bg-background p-4">
              <CodeBlockCode
                code={code}
                language={language}
                theme={resolvedTheme === "dark" ? "github-dark" : "github-light"}
                className="text-xs md:text-sm font-mono"
              />
            </div>
            <span className="absolute top-2 right-3 text-[11px] font-mono text-muted-foreground/60 pointer-events-none uppercase">
              {language}
            </span>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 size-8 p-2 opacity-0 group-hover:opacity-100 inline-flex items-center justify-center rounded-md border bg-background shadow-sm hover:bg-accent transition-all"
            >
              {copied ? (
                <Check className="size-4 text-green-600" />
              ) : (
                <Copy className="size-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TechnographicDataFeatures = () => {
  return (
    <section className="container">
      <FeatureSection
        badge="Technographic Data"
        title="Get the full technology stack for any company"
        description="Our B2B technographic data reveals the exact tools and platforms every company uses — from their CRM and marketing automation to cloud infrastructure and development frameworks. Enrich any company domain with full tech stack data via one API call."
        features={[
          "CRM, marketing automation, and analytics tools",
          "Cloud providers, development, and security tools",
          "E-commerce, ERP, and ABM platform detection",
          "Updated continuously from live web signals",
        ]}
        icon={Cpu}
        code={TECHSTACK_CODE}
        language="bash"
        link="/products/company-enrichment"
        linkText="Explore Company Enrichment API"
      />

      <FeatureSection
        badge="Technology-Based Prospecting"
        title="Find companies by their technology stack"
        description="Use B2B technographic data as a prospecting filter. Search our database of 50M+ companies and return only those running specific tools — ideal for sales teams targeting Salesforce users, HubSpot customers, or AWS-hosted businesses."
        features={[
          "Filter by CRM, Marketing, Analytics, Cloud, and more",
          "Combine tech stack filters with firmographic criteria",
          "Identify companies ripe for competitive displacement",
          "Build ICP-matched account lists at scale",
        ]}
        icon={Filter}
        code={TECH_FILTER_CODE}
        language="bash"
        link="/products/company-search"
        linkText="Explore Company Search API"
        align="right"
      />

      <FeatureSection
        badge="Technology Category Metadata"
        title="Browse all available technology categories and values"
        description="Use our field meta endpoints to discover every valid technology filter value before building your queries. Supports autocomplete search across 15+ technology categories — from CRMs to cloud security platforms."
        features={[
          "15+ technology categories with hundreds of values",
          "Search and autocomplete for any tech category",
          "Paginated value lists — always up to date",
          "Use in your UI for dynamic filter builders",
        ]}
        icon={BarChart2}
        code={TECH_META_CODE}
        language="bash"
        link="https://docs.b2benrich.com/api/field-meta"
        linkText="View Field Meta API Docs"
      />
    </section>
  );
};
