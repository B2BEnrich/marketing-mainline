import type { Metadata } from "next";
import { SolutionHero } from "@/components/blocks/solution-hero";
import { ValidationFeatures } from "@/components/blocks/validation-features";
import { RelatedProducts } from "@/components/blocks/related-products";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { FAQ } from "@/components/blocks/faq";

export const metadata: Metadata = {
  title: "Email Verification & Validation API",
  description:
    "Real-time email verification and email validation API. Check email deliverability, validate phone numbers, and reduce bounce rates. Email checker API with SMTP verification. 1 credit per check.",
  openGraph: {
    title: "Email Verification & Validation API | B2BEnrich",
    description:
      "Real-time email verification and email validation API. Check email deliverability, validate phone numbers, and reduce bounce rates. Email checker API with SMTP verification.",
  },
};

export default function ValidationPage() {
  return (
    <>
      <SolutionHero 
         badge="EMAIL VALIDATION API"
         title="Email Verification & Validation API"
         description="Real-time email verification and phone validation API. Check email deliverability with SMTP verification, detect disposable addresses, and validate phone numbers to reduce bounce rates."
         showIllustration={true}
         illustrationPreset="validation"
      />
      
      <ValidationFeatures />

      <RelatedProducts />

      <FooterPricing />

      <FAQ />
    </>
  );
}
