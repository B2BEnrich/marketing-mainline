import React from "react";

import Link from "next/link";

import { Twitter } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const contactChannels = [
  {
    title: "Sales",
    description: "Exploring plans, custom pricing, or enterprise contracts.",
    href: "mailto:sales@b2benrich.com",
    label: "sales@b2benrich.com",
  },
  {
    title: "Support",
    description: "Technical questions, API issues, or account help.",
    href: "mailto:support@b2benrich.com",
    label: "support@b2benrich.com",
  },
  {
    title: "Phone",
    description: "Prefer to talk? Give us a call during business hours.",
    href: "tel:+18883306943",
    label: "+1-888-330-6943",
  },
  {
    title: "Office",
    description: "Traffic Data Labs LLC",
    href: "https://maps.google.com/?q=1309+Coffeen+Avenue+STE+1200+Sheridan+Wyoming+82801",
    label: "1309 Coffeen Avenue, STE 1200, Sheridan, Wyoming 82801",
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <div className="text-center">
          <h1>Contact us</h1>
          <p className="text-muted-foreground mt-4">
            Whether you have a question about our API, want to explore pricing,
            or need help with an integration — we're here to help. Most
            inquiries get a response within one business day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2">
          {contactChannels.map((channel) => (
            <div key={channel.title} className="rounded-lg border p-6">
              <h2 className="text-typography-h6">{channel.title}</h2>
              <p className="text-muted-foreground mt-2 text-sm">
                {channel.description}
              </p>
              <Link
                href={channel.href}
                className="mt-3 inline-block text-sm underline underline-offset-4 hover:opacity-70"
              >
                {channel.label}
              </Link>
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        <div>
          <h2 className="text-typography-h5 mb-2">Send us a message</h2>
          <p className="text-muted-foreground mb-8 text-sm">
            Fill in the form below and we'll get back to you as soon as
            possible. You can also reach us directly via email if you prefer.
          </p>
          <ContactForm />
        </div>

        <DashedLine className="my-12" />

        <div className="text-center">
          <h2 className="text-typography-h6">Follow us</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Stay up to date with product updates, data insights, and B2B growth
            tips.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <Link
              href="https://x.com/b2benrich"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
            >
              <Twitter className="size-4" />
              @b2benrich
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
