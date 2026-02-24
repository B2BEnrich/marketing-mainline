"use client";

import { useState } from "react";
import { Check, Copy, RefreshCw, Zap, Settings, type LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { CodeBlockCode } from "@/components/ui/code-block";
import { ArrowRight } from "lucide-react";

const CRM_ENRICH_CODE = `curl --request POST \\
  --url https://api.b2benrich.com/v1/enrich/person/linkedin-to-person \\
  --header 'Content-Type: application/json' \\
  --header 'X-Api-Key: YOUR_API_KEY' \\
  --data '{
  "input": "https://linkedin.com/in/johndoe"
}'
# Returns: full_name, email, job_title, company,
# current_titles, location — enrich your CRM in real-time`;

const DOMAIN_ENRICH_CODE = `curl --request POST \\
  --url https://api.b2benrich.com/v1/enrich/companies/domain-to-company \\
  --header 'Content-Type: application/json' \\
  --header 'X-Api-Key: YOUR_API_KEY' \\
  --data '{
  "input": "hubspot.com"
}'
# Returns: company name, industry, revenue, employees,
# tech stack, funding — enriches any CRM account record`;

const BULK_ENRICH_CODE = `// Enrich CRM contacts in bulk (Node.js)
const contacts = await getCRMContacts(); // your CRM fetch

const enriched = await Promise.all(
  contacts.map(async (contact) => {
    const res = await fetch(
      'https://api.b2benrich.com/v1/enrich/person/name-domain-to-email',
      {
        method: 'POST',
        headers: { 'X-Api-Key': 'YOUR_API_KEY' },
        body: JSON.stringify({
          first_name: contact.firstName,
          last_name: contact.lastName,
          domain: contact.companyDomain,
        }),
      }
    );
    return res.json();
  })
);
// Push enriched data back to HubSpot, Salesforce, or Clay`;

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

export const CRMEnrichmentFeatures = () => {
  return (
    <section className="container">
      <FeatureSection
        badge="CRM Contact Enrichment"
        title="Enrich CRM contacts with fresh, verified data"
        description="Keep your HubSpot, Salesforce, or Clay contacts up to date with real-time CRM data enrichment. One API call appends verified job titles, emails, phone numbers, and company data to any contact record."
        features={[
          "Works with HubSpot, Salesforce, Clay, and any CRM",
          "Appends verified email, job title, and company info",
          "Real-time enrichment — always current data",
          "1 credit per contact enrichment call",
        ]}
        icon={RefreshCw}
        code={CRM_ENRICH_CODE}
        language="bash"
        link="/products/people-enrichment"
        linkText="Explore People Enrichment API"
      />

      <FeatureSection
        badge="CRM Account Enrichment"
        title="Enrich CRM account records with firmographic data"
        description="Turn a bare company domain into a complete account record. Our company enrichment API appends revenue range, employee count, industry, funding stage, and tech stack — everything your sales team needs for account-based outreach."
        features={[
          "Domain → full company profile in one API call",
          "Revenue, headcount, industry, and funding data",
          "Technology stack detection (CRM, Marketing, Dev tools)",
          "Syncs directly into your CRM account fields",
        ]}
        icon={Settings}
        code={DOMAIN_ENRICH_CODE}
        language="bash"
        link="/products/company-enrichment"
        linkText="Explore Company Enrichment API"
        align="right"
      />

      <FeatureSection
        badge="Bulk CRM Enrichment"
        title="Enrich your entire CRM database at scale"
        description="Run bulk data enrichment across your full CRM with our B2B data integration API. Connect once and automate ongoing enrichment for every new lead, contact, or account that enters your pipeline."
        features={[
          "Bulk enrich thousands of CRM records via API",
          "Automate enrichment on new lead creation",
          "Integrate with Clay, Zapier, Make, or custom workflows",
          "Clean stale data with scheduled re-enrichment",
        ]}
        icon={Zap}
        code={BULK_ENRICH_CODE}
        language="javascript"
        link="https://docs.b2benrich.com"
        linkText="View API Documentation"
      />
    </section>
  );
};
