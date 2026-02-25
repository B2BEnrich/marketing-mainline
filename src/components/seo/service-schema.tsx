import * as React from "react";

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
}

export function ServiceSchema({
  name,
  description,
  provider = "B2BEnrich",
  areaServed = "Worldwide",
}: ServiceSchemaProps): React.JSX.Element {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://www.b2benrich.com",
    },
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "B2BEnrich Data Enrichment Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "People Enrichment API",
            description:
              "Turn emails, phones, and LinkedIn URLs into complete professional profiles with 250+ verified data points. 1 credit per call.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Company Enrichment API",
            description:
              "Resolve company domains into rich firmographic profiles with industry, revenue, employee count, tech stack, and funding data. 1 credit per call.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Email Verification API",
            description:
              "Real-time SMTP-level email verification with deliverability scoring, disposable address detection, and MX record validation. 1 credit per check.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "B2B Prospector API",
            description:
              "Advanced B2B prospecting with 30+ filters to build targeted lead lists from 550M+ contacts and 50M+ companies. 5 credits per search.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CRM Data Enrichment",
            description:
              "Automate CRM data enrichment for HubSpot, Salesforce, and Pipedrive with verified contact and company data.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
