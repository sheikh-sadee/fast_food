import React, { useEffect } from "react";
import Image from "next/image";
import CardImg from "../../public/slide-three_[plastk,home,heroslider].png";
import CardImg02 from "../../public/multiple-cards_[plastk,creditCard,listSection].png";
import MobileImg from "../../public/mobile-card_[plastk,creditCard,cardBlock].png";
import CardImg03 from "../../public/card-balance_[plastk,creditCard,cardCol].png";
import CardImg04 from "../../public/credit-card-rewards_[plastk,creditCard,cardCol].png";
import icoImg01 from "../../public/ico-creditcard_[plastk,creditCard,cardCol].png";
import icoImg02 from "../../public/ico-network_[plastk,creditCard,cardCol].png";
import icoImg03 from "../../public/ico-dial_[plastk,creditCard,cardCol].png";
import icoImg04 from "../../public/ico-gift_[plastk,creditCard,cardCol].png";
import icoImg05 from "../../public/ico-speaker_[plastk,creditCard,cardCol].png";
import icoImg06 from "../../public/ico-cart_[plastk,creditCard,cardCol].png";
import icoImg07 from "../../public/ico-signature_[plastk,creditCard,cardCol].png";
import icoImg08 from "../../public/ico-paperplane_[plastk,creditCard,cardCol].png";
import InfoSection from "../components/InfoSection";
import ListSection from "../components/ListSection";
import LatestArticles from "../components/LatestArticles";
import { affiliatesFeature } from "../data/PlastkFeatures";
import CreditCardCol from "../components/CreditCardCol";
import Link from "next/link";
import SpecialOffers from "../components/SpecialOffers";
import CreditCardBlock from "../components/CreditCardBlock";
import AppPhoneSection from "../components/AppPhoneSection";
import SEO from "@/components/Seo";

export default function PlastkCreditCard() {
  const CreditCardColList = [
    { text: "Get your virtual Visa card in seconds", Image: icoImg01 },
    { text: "Shop online with worldwide acceptance", Image: icoImg02 },
    { text: "Helps improve your credit score", Image: icoImg03 },
    { text: "Premium Rewards on every purchase", Image: icoImg04 },
  ];

  const CreditCardColList2 = [
    { text: "Enjoy contactless payments anytime, anywhere.", Image: icoImg05 },
    { text: "Use across 50+ million stores worldwide", Image: icoImg06 },
    { text: "Enjoy premium cash advances", Image: icoImg07 },
    { text: "Pay balance easily using Interac E-Transfer", Image: icoImg08 },
  ];

  return (
    <>
      <SEO
        title="Secured Credit Card Canada | Simple Way to Pay | Plastk"
        description="Secured credit cards in Canada with the fastest and most dependable payment options to ensure your payments. Improve your credit score and understanding by seeking assistance.
        "
      />
      <CreditCardBlock
        textWhite
        title="The Plastk Secured Credit Card"
        text="Start improving your credit today with guaranteed approval and a sign up bonus!"
        btn
        img={<Image src={MobileImg} alt="img description" />}
      />
      <InfoSection
        direction
        textWhite
        title="What is a Secured Credit Card?"
        text={
          <>
            <p>
              A secured credit card is just like a “regular” credit card but it
              is secured by a deposit which is used as a security fund.
            </p>
            <p>
              Card Issuers provide these secured credit cards to their customers
              to help them build, rebuild or strengthen their credit profile.
              The card gets issued after the security deposit is received and
              the card limit is determined by the security amount.
            </p>
          </>
        }
        img={<Image src={CardImg} alt="img description" />}
      />
      <CreditCardCol
        img={<Image src={CardImg03} alt="img description" />}
        subtitle="Secured Credit Card"
        title="New Virtual Card"
        list={CreditCardColList}
      />
      <CreditCardCol
        reverse
        img={<Image src={CardImg04} alt="img description" />}
        subtitle="Coming soon"
        title="Physical Card"
        list={CreditCardColList2}
        btn
      />
      <ListSection
        img={<Image src={CardImg02} alt="img description" />}
        title={<span>Features & Benefits</span>}
        list={affiliatesFeature}
        info={
          <>
            <p>
              *after two (2) missed payments the interest rate will increase to
              29.99%
            </p>
            <p>
              *Equifax Verification is required to access your Credit Score. For
              details see <Link href="/">Terms & Conditions</Link>.
            </p>
          </>
        }
      />
      <SpecialOffers mobileHide />
      <AppPhoneSection />
      <LatestArticles />
    </>
  );
}
