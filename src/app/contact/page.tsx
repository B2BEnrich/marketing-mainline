import React from "react";

import { type Metadata } from "next";

import { Background } from "@/components/background";
import Contact from "@/components/blocks/contact";

export const metadata: Metadata = {
  title: "Contact – B2BEnrich",
  description:
    "Get in touch with the B2BEnrich team. Reach out for sales inquiries, technical support, or questions about our B2B data enrichment API.",
};

const Page = () => {
  return (
    <Background>
      <Contact />
    </Background>
  );
};

export default Page;
