import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Data Enrichment",
    questions: [
      {
        question: "What is data enrichment?",
        answer:
          "Data enrichment is the process of enhancing your existing data with additional information from external sources. B2BEnrich takes a known identifier (like a LinkedIn URL, email, or phone number) and returns a complete profile with verified contact information, work history, skills, and company details.",
      },
      {
        question: "What data points can I enrich?",
        answer:
          "You can enrich both people and company profiles. For people: name, title, email, phone, work history, education, skills, and LinkedIn data. For companies: firmographic details, industry classifications, employee counts, revenue data, tech stack, and more.",
      },
      {
        question: "How accurate is the enriched data?",
        answer:
          "Our data is sourced from real-time web crawling, official registries, and partner networks. We use AI to verify and cross-reference multiple sources, ensuring high accuracy. Unlike static databases that decay, our cached data is continuously refreshed to provide the most current information available.",
      },
      {
        question: "Do you offer bulk enrichment?",
        answer:
          "Absolutely. Our API is designed for scale. You can process thousands of records in parallel through our RESTful JSON API. For extremely large batches or custom rate limits for high-volume use cases, please contact our sales team.",
      },
    ],
  },
  {
    title: "API & Integration",
    questions: [
      {
        question: "How do I integrate B2BEnrich into my applications?",
        answer:
          "B2BEnrich provides a RESTful API that you can integrate into any application or workflow. Simply call our enrichment endpoints with your API key to enrich leads programmatically. Our comprehensive documentation includes code examples for popular programming languages.",
      },
      {
        question: "What endpoints are available?",
        answer:
          "We offer multiple enrichment endpoints: LinkedIn URL to Person, Email to LinkedIn, Phone to LinkedIn, LinkedIn URL to Organization, and Domain to Organization. Each endpoint is optimized for specific use cases and returns comprehensive data in JSON format.",
      },
      {
        question: "How does the credit system work?",
        answer:
          "B2BEnrich uses a credit-based system. Each API request consumes credits based on the endpoint and data returned. Basic enrichment requests cost 1 credit, while search and prospecting endpoints cost 5 credits. The credit cost is clearly displayed for each endpoint in our documentation.",
      },
      {
        question: "What if I exceed my usage limit?",
        answer:
          "If you exceed your monthly credit allocation, you can either upgrade to a higher tier for better rates or purchase additional credits. We'll notify you when you're approaching your limit so you can plan accordingly. You can check your credit balance anytime using our API.",
      },
    ],
  },
  {
    title: "Security & Compliance",
    questions: [
      {
        question: "How is my data protected?",
        answer:
          "B2BEnrich uses HTTPS encryption for all API requests, ensuring your data is secure in transit. We implement API key authentication for secure access and maintain strict data privacy controls. Our infrastructure is designed with security and compliance as top priorities.",
      },
      {
        question: "Is B2BEnrich GDPR compliant?",
        answer:
          "Yes. We only collect publicly available professional data and provide mechanisms for data subject requests. All data is processed in accordance with privacy regulations and data protection standards.",
      },
      {
        question: "What support is available?",
        answer:
          "All users have access to our comprehensive documentation and email support at support@b2benrich.com. For sales inquiries, contact sales@b2benrich.com. We also maintain a status page for real-time system health updates.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto text-balance">
              If you can't find what you're looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
