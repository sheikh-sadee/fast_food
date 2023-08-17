import SEO from "@/components/Seo";
import TopBanner from "@/components/TopBanner";
import TagsList from "@/components/TagsList";
import Accordion from "@/components/Accordion";
import Link from "next/link";

export default function PlastkBap() {
  const accordionItems = [
    {
      title: "What is a virtual credit card?",
      content: (
        <>
          <p>
            Virtual credit cards provide several convenience and security
            advantages and are digital versions of your physical credit card.
            The 16-digit number, CVC, expiration date, and PIN code are all
            included, just like on a physical card.
          </p>
          <p>
            In contrast to physical cards, a virtual card is linked to an active
            credit card account; therefore, it is immediately usable by
            customers when a random 16-digit number is generated and assigned.
          </p>
          <p>
            <strong>Related Links:</strong> Where can i download the plastk app?
          </p>
          <p>
            <strong>Related Tags:</strong> Virtual Card
          </p>
          <Link className="link" href="/faqs-detail">
            Direct link
          </Link>
        </>
      ),
    },
    {
      title: "how does the virtual card work?",
      content: (
        <>
          <p>
            Virtual credit cards provide several convenience and security
            advantages and are digital versions of your physical credit card.
            The 16-digit number, CVC, expiration date, and PIN code are all
            included, just like on a physical card.
          </p>
          <p>
            In contrast to physical cards, a virtual card is linked to an active
            credit card account; therefore, it is immediately usable by
            customers when a random 16-digit number is generated and assigned.
          </p>
          <p>
            <strong>Related Links:</strong> Where can i download the plastk app?
          </p>
          <p>
            <strong>Related Tags:</strong> Virtual Card
          </p>
          <Link className="link" href="/">
            Direct link
          </Link>
        </>
      ),
    },
    {
      title:
        "How do i use my virtual card once i’ve obtained it from the plastk app? ",
      content: "Content for Section 3 goes here.",
    },
    {
      title:
        "Can I add My card number to a payment system or wallet without a virtual card?",
      content: "Content for Section 3 goes here.",
    },
    {
      title: "How Can I pay in situations where tap is not accepted?",
      content: "Content for Section 3 goes here.",
    },
    {
      title: "Will there ever be a physical Plastk Card?",
      content: "Content for Section 3 goes here.",
    },
  ];
  return (
    <>
      <SEO
        title="FAQs | Know More About Secured Credit Card | Plastk"
        description="What is a secured credit card? What is the difference between a secured and unsecured credit card? How to apply? How do you send in the security funds? Read our FAQs to know all about Plastk & Secured Credit Cards.
        "
      />
      <TopBanner />
      <TagsList />
      <Accordion items={accordionItems} />
    </>
  );
}
