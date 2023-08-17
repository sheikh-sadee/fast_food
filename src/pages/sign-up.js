import React from "react";
import SEO from "@/components/Seo";
import Image from "next/image";
import img2 from "../../public/img-79.png";
import bgImg from "../../public/img-76.jpg";
import icoImg01 from "../../public/ico-creditcard_[plastk,creditCard,cardCol].png";
import icoImg02 from "../../public/ico-network_[plastk,creditCard,cardCol].png";
import icoImg03 from "../../public/ico-dial_[plastk,creditCard,cardCol].png";
import icoImg04 from "../../public/ico-gift_[plastk,creditCard,cardCol].png";

import SignUpVisual from "@/components/SignUpVisual";
import OurInfoBlock from "@/components/OurInfoBlock";
import SignUpForm from "@/components/SignUpForm";

export default function SignUp() {
  const CreditCardColList = [
    { text: "Get your virtual Visa card in seconds", Image: icoImg01 },
    { text: "Shop online with worldwide acceptance", Image: icoImg02 },
    { text: "Helps improve your credit score", Image: icoImg03 },
    { text: "Premium Rewards on every purchase", Image: icoImg04 },
  ];
  return (
    <>
      <SEO
        title="Create a Plastk Account | Secured Credit Card | Plastk"
        description="Sign up for a Plastk account and get your Secured Credit Card approved in seconds. Shop online worldwide, improve your credit score, and earn premium rewards on every purchase. Apply now and give yourself some credit with Plastk!
        "
      />
      <SignUpVisual
        bgImgCenter
        bgImg={
          <div
            className="bg-img"
            style={{ backgroundImage: `url(${bgImg.src})` }}
          ></div>
        }
        title="Create a plastk aCCOUnt"
        heading="Sign Up"
        list={CreditCardColList}
        paragraph="By registering, you are agreeing to our Terms of use and Privacy Policy"
      />
      <div className="container-signup">
        <SignUpForm />
        <OurInfoBlock
          bgDark
          mobileHide
          title="Apply now"
          paragraph="Your Plastk Secured Credit Card is waiting. Apply now and automatically get approved. Access your Plastk account from anywhere, anytime, and earn points on every single purchase, helping you achieve financial freedom. What are you waiting for? Give yourself some credit, with Plastk. "
          img={<Image src={img2} alt="imd description" />}
        />
      </div>
    </>
  );
}
