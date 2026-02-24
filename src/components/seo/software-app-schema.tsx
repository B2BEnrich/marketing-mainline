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
    "@type": "Service",
    name,
    description,
    url,
    serviceType: category,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free tier available. Credit-based pricing.",
    },
    provider: {
      "@type": "Organization",
      name: "B2BEnrich",
      url: "https://www.b2benrich.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
