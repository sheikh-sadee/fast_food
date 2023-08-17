import React, { useEffect } from "react";
import Image from "next/image";
import MobileImg from "../../public/img-80.png";
import SEO from "@/components/Seo";
import RegisterBusiness from "@/components/RegisterBusiness";
import InfoSection from "@/components/InfoSection";
import BmpSlider from "@/components/BmpSlider";
import Button from "@/components/UI/Button";
import BusinessBenefits from "@/components/BusinessBenefits";
import HowWorks from "@/components/HowWorks";
import BannerSlider from "@/components/BannerSlider";

export default function PlastkBmp() {
  return (
    <>
      <SEO
        title="Boost Sales | Brand Success | Plastk Brand Manager
        "
        description="Elevate your brand with Plastk's powerful web application. Create campaigns, analyze customer behaviour, and increase sales. Book a demo now!
        "
      />
      <BannerSlider />
      <HowWorks />
      <BmpSlider />
      <BusinessBenefits />
      <InfoSection
        title="Connect With Your Customers"
        text="Plastk Secured Credit Card's main benefit is that you can earn rewards points on all of your regular transactions everywhere Visa is accepted!"
        img={<Image src={MobileImg} alt="img description" />}
        btn={
          <Button type="primaryLightBlue" rounded width={250}>
            Visit Rewards App
          </Button>
        }
        direction
        bordergradient
      />
      <RegisterBusiness
        title="Register Your Business for Free In Just 5 Minutes"
        para="Join the Plastk Community and build your customer base today or tell us about your business below and a member of our team will connect with you shortly."
        bgColor="#212338"
      />
    </>
  );
}
