import type { Metadata } from "next";
import type { Category } from "@/components/blocks/faq";

const BASE_URL = "https://www.b2benrich.com";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
  image,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImage = image ?? OG_IMAGE;

  return {
    title,
    description,
    ...(keywords?.length && { keywords }),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
  };
}

export function generateCanonicalMetadata(path: string): Metadata {
  return { alternates: { canonical: `${BASE_URL}${path}` } };
}

/** Flatten Category[] from faq-data.ts into a flat {question, answer}[] for FAQSchema */
export function flattenCategories(
  categories: Category[],
): { question: string; answer: string }[] {
  return categories.flatMap((cat) => cat.questions);
}
