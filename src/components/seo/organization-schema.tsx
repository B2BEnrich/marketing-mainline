export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "B2BEnrich",
    legalName: "B2BEnrich",
    description:
      "B2B data enrichment API providing people enrichment, company enrichment, email validation, B2B contact search, and prospecting across 550M+ contacts and 50M+ companies.",
    url: "https://www.b2benrich.com",
    logo: "https://www.b2benrich.com/favicon/favicon.svg",
    foundingDate: "2023",
    slogan: "The B2B data enrichment API for developers and product teams.",
    keywords:
      "B2B data enrichment API, b2b data api, lead enrichment, company enrichment, email validation API, b2b database, b2b contact database",
    areaServed: { "@type": "Place", name: "Worldwide" },
    knowsAbout: [
      "B2B data enrichment",
      "contact data enrichment",
      "company firmographic data",
      "email verification",
      "B2B prospecting",
      "CRM data enrichment",
      "technographic data",
      "data extraction API",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        email: "support@b2benrich.com",
      },
      {
        "@type": "ContactPoint",
        contactType: "Sales",
        email: "sales@b2benrich.com",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/b2benrich",
      "https://twitter.com/b2benrich",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
