import LatestArticles from "@/components/LatestArticles";
import VideoBanner from "@/components/VideoBanner";
import DetailInfo from "@/components/DetailInfo";
import SEO from "@/components/Seo";

export default function FaqDetail() {
  return (
    <>
      <SEO
        title="FAQs | Know More About Secured Credit Card"
        description=" What is a secured credit card? What is the difference between a secured and unsecured credit card? How to apply? How do you send in the security funds? Read our FAQs to know all about Plastk & Secured Credit Cards."
      />
      <VideoBanner />

      <DetailInfo
        heading="What is a virtual credit card?"
        paragraph={
          <>
            <p>
              Virtual credit cards provide several convenience and security
              advantages and are digital versions of your physical credit card.
              The 16-digit number, CVC, expiration date, and PIN code are all
              included, just like on a physical card.
            </p>
            <p>
              In contrast to physical cards, a virtual card is linked to an
              active credit card account; therefore, it is immediately usable by
              customers when a random 16 digit number is generated and assigned.
            </p>
            <p>
              <strong>Related Links:</strong> Where can i download the plastk
              app?
            </p>
            <p>
              <strong>Related Tags:</strong> Virtual Card
            </p>
          </>
        }
      />
      <LatestArticles />
    </>
  );
}
