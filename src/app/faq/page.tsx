import React from "react";
import { LazySection } from "@/components/optimization/lazy-section";

import Link from "next/link";
import { type Metadata } from "next";

import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/blocks/faq";
import { DashedLine } from "@/components/dashed-line";
import { FAQSchema } from "@/components/seo/faq-schema";
import { comprehensiveFAQ } from "@/lib/faq-data";

import { CTASkeleton } from "@/components/blocks/footer-cta-skeleton";

const FooterCta = React.lazy(() =>
  import("@/components/blocks/footer-cta").then((m) => ({
    default: m.FooterCta,
  })),
);

export const metadata: Metadata = {
  title: "FAQ – B2BEnrich",
  description:
    "Everything you need to know about B2BEnrich. Find answers about data enrichment, API integration, credits, pricing, compliance, and more.",
};

const allFAQItems = comprehensiveFAQ.flatMap((category) =>
  category.questions.map((q) => ({ question: q.question, answer: q.answer }))
);

const Page = () => {
  return (
    <>
      <FAQSchema items={allFAQItems} />

      {/* Page header */}
      <section className="container py-20 text-center lg:pt-36 lg:pb-4">
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-foreground">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">
            Everything you need to know about B2BEnrich — data enrichment, API
            integration, search, prospecting, credits, compliance, and more.
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="underline underline-offset-4">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      <DashedLine className="mx-auto max-w-xl" />

      {/* FAQ accordion sections */}
      <FAQ
        categories={comprehensiveFAQ}
        className="py-12 lg:py-16"
        className2="max-w-4xl lg:grid-cols-1"
        hideHeader
      />

      <DashedLine className="mx-auto max-w-xl" />

      {/* CTA section */}
      <section className="container py-16 text-center lg:py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-muted/30 p-8 space-y-4">
          <h3>Still have questions?</h3>
          <p className="text-muted-foreground">
            Our team is happy to help. Reach out with any questions about your
            specific use case, or explore our documentation for technical
            details.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center pt-2">
            <Button
              asChild
              variant="default"
              className="h-10 rounded-xl tracking-[0.5px] w-full sm:w-auto sm:min-w-44"
            >
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-10 rounded-xl tracking-[0.5px] w-full sm:w-auto sm:min-w-44"
            >
              <Link
                href="https://docs.b2benrich.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <LazySection fallback={<CTASkeleton />} rootMargin="400px 0px">
        <React.Suspense fallback={<CTASkeleton />}>
          <FooterCta />
        </React.Suspense>
      </LazySection>
    </>
  );
};

export default Page;
