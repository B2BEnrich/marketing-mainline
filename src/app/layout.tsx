import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { CriticalCSS } from "@/components/optimization/critical-css";
import { DeferredScripts } from "@/components/scripts/deferred-scripts";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-inter",
  adjustFontFallback: true,
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Arial",
    "sans-serif",
  ],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://b2benrich.com"),
  title: {
    default: "B2BEnrich",
    template: "%s | B2BEnrich",
  },
  description:
    "B2B data enrichment API — enrich contacts and companies with 250+ data points. Access 550M+ profiles and 50M+ companies. Email validation, people search, company search, and prospecting APIs.",
  keywords: [
    "B2B data enrichment API",
    "b2b data api",
    "data enrichment API",
    "lead enrichment API",
    "company enrichment API",
    "email validation API",
    "email verification API",
    "b2b data providers",
    "b2b database",
    "b2b contact database",
    "data enrichment tools",
    "data enrichment services",
    "CRM data enrichment",
    "b2b data enrichment",
    "contact data enrichment",
    "company data enrichment",
    "b2b prospecting",
    "data extraction API",
  ],
  authors: [{ name: "B2BEnrich" }],
  creator: "B2BEnrich",
  publisher: "B2BEnrich",
  manifest: "/manifest",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "B2BEnrich",
    title: "B2BEnrich — B2B Data Enrichment API",
    description:
      "B2B data enrichment API — enrich contacts and companies with 250+ data points. Access 550M+ profiles and 50M+ companies.",
    url: "https://b2benrich.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "B2BEnrich — B2B Data Enrichment API",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2BEnrich — B2B Data Enrichment API",
    description:
      "B2B data enrichment API — enrich contacts and companies with 250+ data points. Access 550M+ profiles and 50M+ companies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "B2BEnrich — B2B Data Enrichment API",
      },
    ],
    creator: "@b2benrich",
  },
  other: {
    "ai:keywords":
      "B2B data enrichment API, b2b data api, lead enrichment, company enrichment, email verification API, b2b database, b2b contact database, CRM data enrichment",
    "ai:category": "B2B Data & Sales Intelligence API",
    "ai:primary-function":
      "Real-time REST API that enriches business contacts and companies with 250+ verified data points from a database of 550M+ profiles and 50M+ companies.",
    "ai:target-audience":
      "Developers, product engineers, sales ops teams, and growth teams who need programmatic access to B2B contact and company data",
    "ai:key-features":
      "People enrichment, company enrichment, email verification, email finder, phone validation, people search, company search, B2B prospecting with 30+ filters",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <CriticalCSS />
        <OrganizationSchema />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <div className="mx-2 md:mx-8 lg:mx-12 xl:mx-16">
            <div className="border-border border-x">
              <main className="">{children}</main>
            </div>
          </div>
          <div className="bg-background">
            <div className="mx-2 md:mx-8 lg:mx-12 xl:mx-16">
              <div className="border-border/20 border-x">
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
        <DeferredScripts />
      </body>
    </html>
  );
}
