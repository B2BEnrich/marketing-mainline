export function ArticleSchema({
  title,
  description,
  publishedAt,
  modifiedAt,
  url,
}: {
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: modifiedAt ?? publishedAt,
    author: {
      "@type": "Organization",
      name: "B2BEnrich",
      url: "https://www.b2benrich.com",
    },
    publisher: {
      "@type": "Organization",
      name: "B2BEnrich",
      logo: {
        "@type": "ImageObject",
        url: "https://www.b2benrich.com/favicon/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
