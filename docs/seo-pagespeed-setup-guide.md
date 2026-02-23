# Next.js SEO & PageSpeed Optimization Guide

A complete, step-by-step playbook for setting up maximum PageSpeed scores and SEO on a Next.js (App Router) marketing website. Each section explains the *why*, shows the exact implementation pattern, and lists the files to create or modify.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Root Layout — Metadata, Fonts & Resource Hints](#2-root-layout--metadata-fonts--resource-hints)
3. [Page-Level SEO Helpers](#3-page-level-seo-helpers)
4. [Robots.txt](#4-robotstxt)
5. [Sitemap](#5-sitemap)
6. [Structured Data (JSON-LD Schemas)](#6-structured-data-json-ld-schemas)
7. [AI Search Optimization](#7-ai-search-optimization)
8. [Critical CSS](#8-critical-css)
9. [Lazy Loading — Components & Sections](#9-lazy-loading--components--sections)
10. [Image Optimization](#10-image-optimization)
11. [Deferred Analytics & Scripts](#11-deferred-analytics--scripts)
12. [Next.js Config — Headers, Redirects & Package Optimization](#12-nextjs-config--headers-redirects--package-optimization)
13. [Web App Manifest & Favicon Pack](#13-web-app-manifest--favicon-pack)
14. [Screen-Reader / Crawler Content](#14-screen-reader--crawler-content)
15. [Checklist: Page-by-Page Audit](#15-checklist-page-by-page-audit)

---

## 1. Prerequisites

Install the required packages:

```bash
pnpm add next-secure-headers @vercel/analytics @next/third-parties
```

Set the canonical base URL in one place (e.g. a `routes` package or `env.ts`):

```ts
// packages/routes/index.ts
export const baseUrl = {
  Marketing: process.env.NEXT_PUBLIC_MARKETING_URL ?? 'https://www.yoursite.com'
};
```

---

## 2. Root Layout — Metadata, Fonts & Resource Hints

**File:** `app/layout.tsx`

This is the single most impactful file. Everything here applies globally.

### 2.1 Global Metadata Object

```ts
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl.Marketing),  // Required for absolute OG image URLs
  title: APP_NAME,
  description: APP_DESCRIPTION,

  // Favicons
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
    apple: '/apple-touch-icon.png'
  },

  // Web app manifest
  manifest: `${baseUrl.Marketing}/manifest`,

  // Open Graph (LinkedIn, Slack, iMessage previews)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: baseUrl.Marketing,
    images: {
      url: `${baseUrl.Marketing}/og-image.png`,  // 1200×630px
      width: 1200,
      height: 630,
      alt: APP_NAME
    }
  },

  // Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: {
      url: `${baseUrl.Marketing}/og-image.png`,
      width: 1200,
      height: 630,
      alt: APP_NAME
    }
  },

  // Default robots (override per page as needed)
  robots: { index: true, follow: true },

  // AI-specific meta tags (see Section 7)
  other: {
    'ai:keywords': 'your, primary, keywords',
    'ai:category': 'Your Product Category',
    'ai:primary-function': 'One sentence describing what your product does',
    'ai:target-audience': 'Who uses your product',
    'ai:key-features': 'Feature 1, Feature 2, Feature 3'
  }
};
```

### 2.2 Viewport Export

Export `viewport` separately (Next.js 14+ requirement — do not include it inside `metadata`):

```ts
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};
```

### 2.3 Font Optimization

Use `next/font` — it self-hosts the font, eliminates the Google Fonts request, and eliminates CLS.

```ts
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'optional',       // Uses Inter only if it loads fast; no FOUT
  variable: '--font-inter',
  axes: ['opsz'],
  adjustFontFallback: true,  // Tweaks fallback metrics to match Inter → zero CLS
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif']
});
```

Apply as CSS variables: `<body className={`${inter.variable} font-sans`}>`.

### 2.4 Resource Hints in `<head>`

Add these inside `<head>` — they run in parallel with HTML parsing and shave 100–300 ms off LCP:

```tsx
<head>
  {/* Warm up Google Fonts CDN connections (only if loading any external fonts) */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

  {/* Preload the woff2 file Next.js generates for your primary font.
      Find the exact hash in .next/static/media/ after first build. */}
  <link
    rel="preload"
    href="/_next/static/media/<your-font-hash>.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    fetchPriority="high"
  />

  {/* DNS-prefetch for third-party scripts (analytics, chat, etc.)
      Does NOT open a connection — just resolves DNS ahead of time */}
  <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
  <link rel="dns-prefetch" href="https://connect.facebook.net" />

  <CriticalCSS />          {/* See Section 8 */}
  <OrganizationSchema />   {/* See Section 6 */}
</head>
```

> **Note on the woff2 hash:** Run `pnpm build` once, then look inside `.next/static/media/` for a `.woff2` file. Copy that filename into the `href`. It stays stable across builds for the same font config.

---

## 3. Page-Level SEO Helpers

**File:** `lib/seo.ts`

Create two reusable helpers to keep page metadata consistent:

```ts
import type { Metadata } from 'next';

// Full page metadata with canonical, OG, and Twitter
export function generatePageMetadata({
  title,
  description,
  path,
  images,
  keywords
}: {
  title: string;
  description: string;
  path: string;
  images?: string;
  keywords?: string[];
}): Metadata {
  const canonicalUrl = `${baseUrl.Marketing}${path}`;
  const ogImage = images ?? `${baseUrl.Marketing}/og-image.png`;

  return {
    title,
    description,
    ...(keywords?.length && { keywords }),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: { url: ogImage, width: 1200, height: 630, alt: title }
    },
    twitter: {
      title,
      description,
      images: { url: ogImage, width: 1200, height: 630, alt: title }
    }
  };
}

// Canonical-only (for pages that inherit global OG from layout)
export function generateCanonicalMetadata(path: string): Metadata {
  return {
    alternates: { canonical: `${baseUrl.Marketing}${path}` }
  };
}
```

**Usage in any page:**

```ts
// app/pricing/page.tsx
export const metadata = generatePageMetadata({
  title: 'Pricing – Your Product',
  description: 'Transparent pricing for teams of all sizes.',
  path: '/pricing',
  keywords: ['saas pricing', 'plans', 'free trial']
});
```

**Blocking pages from indexing** (thank-you pages, private landing pages):

```ts
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true }
  }
};
```

---

## 4. Robots.txt

**File:** `app/robots.ts`

Next.js generates `/robots.txt` from this file at build time.

```ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/thank-you',
        '/landing',          // Paid ad landing pages — no organic indexing
        '/dashboard',        // App UI
        '/admin'
      ]
    },
    sitemap: `${baseUrl.Marketing}/sitemap.xml`
  };
}
```

---

## 5. Sitemap

**File:** `app/sitemap.ts`

Next.js generates `/sitemap.xml` from this file. Build it dynamically from the filesystem so you never need to maintain it manually.

```ts
import fs from 'fs/promises';
import path from 'path';

type SitemapEntry = {
  url: string;
  lastModified: Date | string;
  changeFreq?: string;
  priority?: number;
};

// Pages to exclude (noindex pages, private pages)
const EXCLUDED_PAGES = ['thank-you', 'landing', 'dashboard', 'admin'];

// Priority guide:
//   1.0  Homepage
//   0.9  SEO resource pages / high-value content
//   0.8  Main product/feature pages
//   0.7  Secondary pages (playbooks, sub-features)
//   0.6  Blog posts, landing pages
//   0.5  and below — low-value supporting pages

async function getAppPages(baseUrl: string): Promise<SitemapEntry[]> {
  const appPath = path.join(process.cwd(), 'app');
  const entries = await fs.readdir(appPath, { withFileTypes: true });
  const routes: SitemapEntry[] = [];

  for (const entry of entries.filter((e) => e.isDirectory())) {
    if (EXCLUDED_PAGES.includes(entry.name)) continue;
    try {
      const stats = await fs.stat(path.join(appPath, entry.name, 'page.tsx'));
      routes.push({
        url: `${baseUrl}/${entry.name}`,
        lastModified: stats.mtime,
        priority: 0.8,
        changeFreq: 'weekly'
      });
    } catch {
      continue;
    }
  }
  return routes;
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const baseUrl = process.env.NEXT_PUBLIC_MARKETING_URL!;
  const appPages = await getAppPages(baseUrl);

  const entries: SitemapEntry[] = [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1.0, changeFreq: 'weekly' },
    ...appPages,
    // Add CMS/content entries here (blog posts, docs, etc.)
  ];

  return entries.sort((a, b) => a.url.localeCompare(b.url));
}
```

> **Priority guidelines:** Only the homepage should be `1.0`. Differentiate everything else so crawlers understand your content hierarchy.

---

## 6. Structured Data (JSON-LD Schemas)

Create schema components and inject them via `<script type="application/ld+json">` tags. Place global schemas in `<head>` (via `layout.tsx`) and page-specific schemas inside each page component.

### 6.1 Organization Schema (global — in `layout.tsx`)

**File:** `components/seo/organization-schema.tsx`

```tsx
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Your Company',
    legalName: 'Your Company Inc.',
    description: 'What your company does in one sentence.',
    url: 'https://www.yoursite.com',
    logo: 'https://www.yoursite.com/logo.svg',
    foundingDate: '2023',
    slogan: 'Your tagline',
    keywords: 'keyword1, keyword2, keyword3',
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    knowsAbout: ['Topic 1', 'Topic 2', 'Topic 3'],
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'Customer Service', email: 'support@yoursite.com' },
      { '@type': 'ContactPoint', contactType: 'Sales', email: 'sales@yoursite.com' }
    ],
    sameAs: [
      'https://www.linkedin.com/company/yourcompany',
      'https://twitter.com/yourcompany'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### 6.2 Breadcrumb Schema (per page)

**File:** `components/seo/breadcrumb-schema.tsx`

```tsx
type Breadcrumb = { name: string; url: string };

export function BreadcrumbSchema({ items }: { items: Breadcrumb[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url
    }))
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### 6.3 FAQ Schema (FAQ pages or sections)

```tsx
type FAQItem = { question: string; answer: string };

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### 6.4 Article Schema (blog posts)

```tsx
export function ArticleSchema({ title, description, publishedAt, author, url }: {
  title: string; description: string; publishedAt: string; author: string; url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishedAt,
    author: { '@type': 'Person', name: author },
    publisher: { '@type': 'Organization', name: 'Your Company' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### 6.5 SoftwareApplication Schema (integration / product pages)

```tsx
export function SoftwareAppSchema({ name, description, url, category }: {
  name: string; description: string; url: string; category: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory: category,
    operatingSystem: 'Web Browser'
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

---

## 7. AI Search Optimization

AI search engines (ChatGPT, Perplexity, Claude, Gemini) crawl your site differently from Google. Target them with three techniques:

### 7.1 `llms.txt` (AI-equivalent of `robots.txt`)

**File:** `public/llms.txt`

This is an emerging standard (similar to `robots.txt` but for LLMs) that gives AI systems a structured overview of your site. Keep it plain text.

```
# Your Company Name — [One-sentence value prop]

[2-3 paragraph description of what your product/service does, who it's for,
and what problems it solves. Write for an AI that needs to accurately
summarize your company to a user.]

## Core Features
- Feature 1 with concrete description
- Feature 2 with concrete description
- Feature 3 with concrete description

## Key Pages
https://www.yoursite.com/ - Homepage
https://www.yoursite.com/pricing - Pricing plans
https://www.yoursite.com/blog - Blog and resources

## Target Audience
[Who uses your product — roles, company types, use cases]

## Key Differentiators
- What makes you different from competitors

## AI Search Keywords & Terminology
[Primary terms]: keyword1, keyword2, keyword3
[Alternative terms / synonyms]: synonym1, synonym2

## Performance Metrics
- Stat 1 (e.g. "99% uptime")
- Stat 2 (e.g. "10x faster than alternative")
```

### 7.2 AI Meta Tags (in `layout.tsx` metadata)

```ts
other: {
  'ai:keywords': 'primary keyword, secondary keyword, brand term',
  'ai:category': 'Your Product Category (e.g. Marketing Technology)',
  'ai:primary-function': 'One clear sentence describing your core capability',
  'ai:target-audience': 'Who your product is for',
  'ai:key-features': 'Feature 1, Feature 2, Feature 3'
}
```

### 7.3 Screen-Reader / SR-only Content Summaries

Add machine-readable summaries that are invisible to users but visible to crawlers and LLMs. Place these early in the page (before lazy-loaded sections):

```tsx
// components/seo/content-summary.tsx
export function ContentSummary() {
  return (
    <div className="sr-only" aria-hidden="true">
      <h2>Page Summary for Search Engines and AI Systems</h2>
      <p>
        [Your company] provides [product/service] for [audience].
        Key capabilities: [list features]. Pricing starts at $X/month.
        Integrates with: [Tool 1], [Tool 2], [Tool 3].
      </p>
    </div>
  );
}
```

Apply the same pattern to visual illustrations and complex UI:

```tsx
<div className="sr-only">
  Diagram showing: Step 1 — Upload contact list. Step 2 — Enrich data.
  Step 3 — Sync to ad platforms. Result: Targeted ads reach the right people.
</div>
<div aria-hidden="true">
  {/* Your visual component */}
</div>
```

---

## 8. Critical CSS

Inlining critical CSS for above-the-fold content eliminates a full round trip to load the stylesheet, which directly improves FCP and LCP.

**File:** `components/optimization/critical-css.tsx`

```tsx
export function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      /* Hero section */
      .hero-critical {
        display: flex;
        min-height: 80vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem 0.5rem 1rem;
        text-align: center;
      }
      @media (min-width: 768px) {
        .hero-critical { padding: 4rem 2rem; }
      }

      /* Primary CTA button */
      .btn-critical {
        display: inline-flex;
        height: 2.5rem;
        align-items: center;
        border-radius: 0.75rem;
        background-color: hsl(var(--primary));
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: hsl(var(--primary-foreground));
        cursor: pointer;
      }

      /* Loading skeleton (prevents CLS) */
      .loading-skeleton {
        background: linear-gradient(90deg, hsl(var(--muted)) 25%, hsl(var(--muted) / 0.5) 50%, hsl(var(--muted)) 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
        border-radius: 0.75rem;
      }
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      /* Lock aspect ratio for hero image — prevents CLS */
      .aspect-hero { aspect-ratio: 1328 / 727; }
    ` }} />
  );
}
```

Add `<CriticalCSS />` inside `<head>` in `layout.tsx`.

> **Rule of thumb:** Only include styles for elements visible without scrolling. Don't bloat this file — it blocks rendering while it's being parsed (being inline means there's no extra request, but it still has to be parsed).

---

## 9. Lazy Loading — Components & Sections

Two complementary techniques: React-level lazy loading for code splitting, and IntersectionObserver-based lazy loading for deferring render until near viewport.

### 9.1 `React.lazy` + `Suspense` (code splitting)

Use this for below-the-fold sections. Each `lazy()` call creates a separate JS chunk that is only downloaded when the component is about to render.

In `app/page.tsx`:

```tsx
import * as React from 'react';

// Above-the-fold — import normally (no lazy)
import { Hero } from '~/components/sections/hero';
import { TrustBar } from '~/components/sections/trust-bar';

// Below-the-fold — lazy load
const Stats         = React.lazy(() => import('~/components/sections/stats').then(m => ({ default: m.Stats })));
const Testimonials  = React.lazy(() => import('~/components/sections/testimonials').then(m => ({ default: m.Testimonials })));
const Pricing       = React.lazy(() => import('~/components/sections/pricing').then(m => ({ default: m.Pricing })));
const FAQ           = React.lazy(() => import('~/components/sections/faq').then(m => ({ default: m.FAQ })));
const CTA           = React.lazy(() => import('~/components/sections/cta').then(m => ({ default: m.CTA })));

export default function Page() {
  return (
    <>
      <Hero />
      <TrustBar />
      <React.Suspense fallback={<SectionSkeleton />}><Stats /></React.Suspense>
      <React.Suspense fallback={<SectionSkeleton />}><Testimonials /></React.Suspense>
      <React.Suspense fallback={<SectionSkeleton />}><Pricing /></React.Suspense>
      <React.Suspense fallback={<SectionSkeleton />}><FAQ /></React.Suspense>
      <React.Suspense fallback={null}><CTA /></React.Suspense>
    </>
  );
}
```

### 9.2 `LazySection` — IntersectionObserver (deferred render)

This prevents even the JS execution of sections until they're nearly in viewport. Combine with `React.lazy` for the best of both worlds.

**File:** `components/optimization/lazy-section.tsx`

```tsx
'use client';
import * as React from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;   // How far before viewport to start loading. Default: '100px 0px'
  threshold?: number;    // 0 = any pixel visible, 1 = fully visible. Default: 0.1
  className?: string;
}

export function LazySection({
  children,
  fallback,
  rootMargin = '100px 0px',
  threshold = 0.1,
  className
}: LazySectionProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => { setIsMounted(true); }, []);

  React.useEffect(() => {
    const el = ref.current;
    if (!isMounted || !el) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      setHasLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.unobserve(el);
        }
      },
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [rootMargin, threshold, hasLoaded, isMounted]);

  // SSR: always render fallback so crawlers see something
  if (!isMounted) return <div className={className}>{fallback ?? <DefaultSkeleton />}</div>;

  return (
    <div ref={ref} className={className}>
      {isVisible || hasLoaded ? children : (fallback ?? <DefaultSkeleton />)}
    </div>
  );
}

function DefaultSkeleton() {
  return (
    <div className="w-full py-16 animate-pulse">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <div className="h-8 bg-muted rounded-lg w-3/4 mx-auto mb-4" />
          <div className="h-4 bg-muted rounded w-full mb-2" />
          <div className="h-4 bg-muted rounded w-2/3 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => <div key={i} className="h-48 bg-muted rounded-lg" />)}
        </div>
      </div>
    </div>
  );
}
```

**Usage:**

```tsx
<LazySection fallback={<PricingSkeleton />}>
  <React.Suspense fallback={<PricingSkeleton />}>
    <Pricing />
  </React.Suspense>
</LazySection>
```

> **Why both?** `React.lazy` splits the JS bundle. `LazySection` prevents the component from even mounting (and running its effects/data fetching) until it's near the viewport. Together they minimize TBT (Total Blocking Time) and TTI.

---

## 10. Image Optimization

All images must go through `next/image`. Never use `<img>` for content images.

### 10.1 Above-the-fold (hero) images

```tsx
import Image from 'next/image';

<Image
  src="/hero-illustration.png"
  alt="Descriptive alt text for SEO and accessibility"
  width={1328}
  height={727}
  priority                       // Tells browser to preload this image — critical for LCP
  fetchPriority="high"           // Reinforces priority at the HTTP level
  quality={60}                   // Hero images are large — lower quality saves bytes
  placeholder="blur"
  blurDataURL="data:image/png;base64,..."   // Base64 tiny version — prevents layout shift
  sizes="(max-width: 768px) 100vw, 800px"  // Tells browser which size to download
/>
```

### 10.2 Below-the-fold images

```tsx
<Image
  src="/feature-screenshot.png"
  alt="Alt text"
  width={600}
  height={400}
  loading="lazy"              // Default for non-priority images — explicit is clearer
  quality={75}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
/>
```

### 10.3 Rules of thumb

| Scenario | `priority` | `quality` | `sizes` |
|---|---|---|---|
| Hero / LCP image | `true` | 60 | `100vw` mobile, specific px desktop |
| First 2–3 carousel items | `true` | 70 | Match rendered size |
| Everything else | omit (lazy default) | 75–85 | Match rendered size |
| Logos / icons | omit | 90 | Fixed px |

### 10.4 `next.config.ts` image config

```ts
images: {
  formats: ['image/avif', 'image/webp'],  // Next.js serves AVIF → WebP → JPEG automatically
  remotePatterns: [
    // Add domains for external images (Contentful, Cloudinary, etc.)
    { protocol: 'https', hostname: 'images.ctfassets.net' }
  ]
}
```

---

## 11. Deferred Analytics & Scripts

Never load analytics synchronously — it blocks the main thread and kills TBT. Use `requestIdleCallback` to defer until the browser has nothing better to do.

**File:** `components/scripts/deferred-scripts.tsx`

```tsx
'use client';
import * as React from 'react';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export function DeferredScripts() {
  const [shouldLoad, setShouldLoad] = React.useState(false);

  React.useEffect(() => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 });
    } else {
      // Safari fallback
      const t = setTimeout(() => setShouldLoad(true), 3000);
      return () => clearTimeout(t);
    }
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          height="0" width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Vercel Analytics */}
      <React.Suspense fallback={null}>
        <Analytics />
      </React.Suspense>
    </>
  );
}
export default DeferredScripts;
```

For third-party scripts with their own `<Script>` tag (Cal.com, Intercom, etc.), create a separate file and use `strategy="lazyOnload"`:

**File:** `components/scripts/optimized-scripts.tsx`

```tsx
'use client';
import * as React from 'react';
import Script from 'next/script';

export function OptimizedScripts() {
  return (
    <Script
      id="cal-script"
      strategy="lazyOnload"
      src="https://app.cal.com/embed/embed.js"
    />
  );
}
export default OptimizedScripts;
```

Place both components at the end of `<body>` in `layout.tsx`:

```tsx
<body>
  ...
  <DeferredScripts />
  <OptimizedScripts />
</body>
```

---

## 12. Next.js Config — Headers, Redirects & Package Optimization

**File:** `next.config.ts`

```ts
import { createSecureHeaders } from 'next-secure-headers';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Remove "X-Powered-By: Next.js" header (minor security hardening)
  poweredByHeader: false,

  // Tree-shake large packages — only imports what's actually used
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      'date-fns',
      'recharts'
    ]
  },

  // Strict mode helps catch bugs
  reactStrictMode: true,

  // Images
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [/* your external image hosts */]
  },

  // 301 redirects for renamed/moved pages
  async redirects() {
    return [
      { source: '/old-page', destination: '/new-page', permanent: true },
    ];
  },

  // Security headers for all routes
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          frameGuard: 'deny',            // Prevents clickjacking
          noopen: 'noopen',
          nosniff: 'nosniff',
          xssProtection: 'sanitize',
          forceHTTPSRedirect: [true, { maxAge: 60 * 60 * 24 * 365, includeSubDomains: true }],
          referrerPolicy: 'same-origin'
        })
      }
    ];
  }
};

export default nextConfig;
```

---

## 13. Web App Manifest & Favicon Pack

### 13.1 Manifest

**File:** `app/manifest.ts`

```ts
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Your App Name',
    short_name: 'AppName',
    description: 'Your app description',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
    ]
  };
}
```

### 13.2 Required favicon files (`public/`)

| File | Size | Purpose |
|---|---|---|
| `favicon.svg` | Vector | Modern browsers (best quality) |
| `favicon.ico` | 32×32 | Legacy browsers |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `og-image.png` | 1200×630 | Social sharing preview |
| `icon-192.png` | 192×192 | Android PWA |
| `icon-512.png` | 512×512 | Android PWA splash |

---

## 14. Screen-Reader / Crawler Content

Some sections that are visually rich (illustrations, charts, carousels) are opaque to crawlers and LLMs. Pair every non-text content block with a `sr-only` description.

```tsx
// Wrap any complex visual component like this:
export function IllustrationWrapper({ children, description }: {
  children: React.ReactNode;
  description: string;
}) {
  return (
    <div>
      {/* Invisible to users, visible to crawlers */}
      <p className="sr-only">{description}</p>
      {/* Invisible to crawlers, visible to users */}
      <div aria-hidden="true">{children}</div>
    </div>
  );
}
```

Usage:

```tsx
<IllustrationWrapper description="Three-step workflow: 1) Upload a contact list of decision makers. 2) Our platform enriches and matches contacts to ad platform identifiers. 3) Ads are delivered to those exact individuals on LinkedIn, Meta, and Google.">
  <WorkflowDiagram />
</IllustrationWrapper>
```

Add page-level summaries near the top of important pages:

```tsx
<div className="sr-only">
  <h2>About this page</h2>
  <p>
    This pricing page lists three plans: Starter at $X/month for teams under Y seats;
    Growth at $Z/month for up to W seats; Enterprise with custom pricing.
    All plans include a 14-day free trial. Annual billing saves 20%.
  </p>
</div>
```

---

## 15. Checklist: Page-by-Page Audit

Use this checklist when creating or auditing any page.

### Every page must have:
- [ ] `export const metadata` or `generateMetadata()` with a unique `title` and `description`
- [ ] Canonical URL via `alternates.canonical`
- [ ] OpenGraph title, description, and image (1200×630)
- [ ] Twitter card title, description, and image
- [ ] At least one JSON-LD schema (Breadcrumb at minimum)

### Homepage must have:
- [ ] Priority `1.0` in sitemap
- [ ] Organization schema in `<head>`
- [ ] Hero image with `priority` and `fetchPriority="high"`
- [ ] ContentSummary (`sr-only`) for LLM crawlers
- [ ] FAQ schema if FAQ section exists
- [ ] Service schema describing your product

### Blog/docs/article pages must have:
- [ ] Article schema with `datePublished`, `author`, `mainEntityOfPage`
- [ ] Canonical URL pointing to the canonical version (important for syndicated content)
- [ ] Breadcrumb schema

### Integration/product pages must have:
- [ ] SoftwareApplication schema
- [ ] Breadcrumb schema

### Pages that should NOT be indexed:
- [ ] `robots: { index: false }` in metadata
- [ ] Listed in `disallow` in `robots.ts`
- [ ] Excluded from `sitemap.ts`

### Performance (run in PageSpeed Insights after each major deploy):
- [ ] LCP < 2.5s (usually the hero image — ensure `priority` is set)
- [ ] CLS < 0.1 (lock `width`/`height` or `aspect-ratio` on all images and skeletons)
- [ ] TBT < 200ms (check no large scripts are loading synchronously)
- [ ] FCP < 1.8s (critical CSS inlined, font `display: optional`)

---

## Quick Reference: File Map

```
app/
├── layout.tsx              ← Global metadata, fonts, resource hints, OrganizationSchema
├── robots.ts               ← robots.txt generation
├── sitemap.ts              ← sitemap.xml generation
├── manifest.ts             ← Web app manifest
└── [page]/
    └── page.tsx            ← Per-page metadata export

lib/
└── seo.ts                  ← generatePageMetadata(), generateCanonicalMetadata()

components/
├── optimization/
│   ├── critical-css.tsx    ← Inline critical CSS for above-the-fold content
│   └── lazy-section.tsx    ← IntersectionObserver-based lazy loader
├── scripts/
│   ├── deferred-scripts.tsx ← GTM + Vercel Analytics via requestIdleCallback
│   └── optimized-scripts.tsx ← Other third-party scripts (lazyOnload strategy)
└── seo/
    ├── organization-schema.tsx  ← Organization JSON-LD (global)
    ├── breadcrumb-schema.tsx    ← BreadcrumbList JSON-LD (per page)
    ├── faq-schema.tsx           ← FAQPage JSON-LD (FAQ sections)
    ├── article-schema.tsx       ← Article JSON-LD (blog/docs)
    └── content-summary.tsx      ← sr-only summaries for crawlers/LLMs

public/
├── llms.txt               ← AI search optimization (like robots.txt for LLMs)
├── favicon.svg
├── favicon.ico
├── apple-touch-icon.png
├── og-image.png           ← 1200×630 social sharing image
├── icon-192.png
└── icon-512.png

next.config.ts              ← optimizePackageImports, images, headers, redirects
```
