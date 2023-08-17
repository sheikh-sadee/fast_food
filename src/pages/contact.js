import React from "react";
import SEO from "@/components/Seo";
import ContactUsVisual from "@/components/ContactUsVisual";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact us | Plastk Support Centre | Plastk"
        description="Call us at 1-855-485-0102 or Live chat at Plastk.ca. We're very to respond. Also, read our FAQs to get swift answers on how to get your Plastk card & much more.
        "
      />
      <ContactUsVisual />
      <ContactForm />
    </>
  );
}
