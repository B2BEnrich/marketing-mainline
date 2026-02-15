import React from "react";

import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { FooterPricing } from "@/components/blocks/footer-pricing";
import { HowCreditsWork } from "@/components/blocks/how-credits-work";

const PRICING_FAQ_ITEMS = [
  {
    title: "Credits & Usage",
    questions: [
      {
        question: "How do credits work?",
        answer:
          "Credits are used to access contact information. One credit equals one verified email, phone number, or reverse lookup. Prospector searches cost 5 credits.",
      },
      {
        question: "Do credits roll over?",
        answer:
          "Unused credits do not roll over to the next month. We recommend choosing a plan that matches your monthly usage needs.",
      },
      {
        question: "What happens if I run out of credits?",
        answer:
          "You can upgrade to a higher tier plan immediately to get more credits, or wait for your monthly renewal.",
      },
    ],
  },
  {
    title: "Billing & Plans",
    questions: [
      {
        question: "Can I cancel my subscription?",
        answer:
          "Yes, you can cancel at any time. Your access will remain active until the end of your current billing period.",
      },
      {
        question: "Do you offer a free trial?",
        answer:
          "Yes, we offer a 7-day free trial on our Starter and Grow plans so you can experience the full power of the platform risk-free.",
      },
    ],
  },
];

const Page = () => {
  return (
    <>
      <FooterPricing headerTag="h1" showBackground={true} />
      <HowCreditsWork />
      <FAQ categories={PRICING_FAQ_ITEMS} />
    </>
  );
};

export default Page;
