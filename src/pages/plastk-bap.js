import VisualSectionBap from "@/components/VisualSectionBap";
import SEO from "@/components/Seo";
import Image from "next/image";
import MobileImg from "../../public/info-img_[plastk,BAP,infoSection].png";
import CounterSlider from "@/components/CounterSlider";
import PlastkBenefits from "@/components/PlastkBenefits";
import RegisterBusiness from "@/components/RegisterBusiness";
import InfoSection from "@/components/InfoSection";
import Button from "@/components/UI/Button";

export default function PlastkBap() {
  return (
    <>
      <SEO
        title="Review Billing Statements | Plastk Business Accelerator"
        description="Discover the power of the Plastk Business Accelerator, a digital service that drives customer engagement and boosts sales for your business. "
      />
      <VisualSectionBap />
      <InfoSection
        title="The Best Customers Pay With Plastk"
        text="Plastk customers use their Secured Credit Card or their Rewards App to make purchases at your business and earn accelerated rewards. Customers are rewarded for their spending and so are you!
        "
        img={<Image src={MobileImg} alt="img description" />}
        btn={
          <Button type="darkblue" rounded width={250}>
            Visit Rewards app
          </Button>
        }
      />
      <CounterSlider />
      <PlastkBenefits />
      <RegisterBusiness
        title="Register Your Business for Free In Just 5 Minutes"
        para="Join the Plastk Community and build your customer base today or tell us about your business below and a member of our team will connect with you shortly."
      />
    </>
  );
}
