export function SoftwareAppSchema({
  name,
  description,
  url,
  category,
}: {
  name: string;
  description: string;
  url: string;
  category: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: category,
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free tier available. Credit-based pricing.",
    },
    provider: {
      "@type": "Organization",
      name: "B2BEnrich",
      url: "https://b2benrich.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
