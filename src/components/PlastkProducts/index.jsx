import * as React from "react";
import { useMediaPredicate } from "react-media-hook";
import { PlastkProductsSection } from "./PlastkProducts.styles";
import HeadingWithInfo from "../HeadingWithInfo";
import Link from "next/link";
import { Container } from "../../styles/common";
import DataTabs from "../UI/DataTabs";
import Image from "next/image";
import Img01 from "../../../public/tab-img-one_[plastk,home,plastkProducts].png";
import Img02 from "../../../public/tab-img-two_[plastk,home,plastkProducts].png";
import Img03 from "../../../public/tab-img-three_[plastk,home,plastkProducts].png";
import TabBox from "../TabBox";
import Button from "../UI/Button";

function PlastkProducts() {
  const lessThan768 = useMediaPredicate("(max-width: 767px)");
  const tabData = [
    {
      label: "Business Accelerator",
      content: (
        <TabBox
          heading="Business Accelerator Portal"
          paragraph="Connecting Plastk customers with businesses across the country. Increasing revenue by driving more customers to spend at your store. Drive more business with free digital advertising. Manage and track your promotions with ease!"
          btn={
            <Button
              width={155}
              as={Link}
              type="green"
              href="/sign-up"
              rounded
              md
            >
              Book a Demo
            </Button>
          }
          img={Img01}
        />
      ),
    },
    {
      label: "Rewards App",
      content: (
        <TabBox
          heading="Plastk Rewards App"
          paragraph="Earn Accelerated Reward Points at all your favorite stores, regardless of if you own a Plastk Secured Credit Card. Simply choose your offer, find local stores & start earning!"
          btn={
            <Button
              width={190}
              as={Link}
              type="outline"
              href="/sign-up"
              rounded
              md
            >
              Visit Rewards App
            </Button>
          }
          img={Img02}
        />
      ),
    },
    {
      label: "Brand Manager",
      content: (
        <TabBox
          heading="Brand Manager Portal"
          paragraph="Redefining the ways that brands can reach their consumers. Allowing brands to develop targeted campaigns & gain access to high-value customers.
          Simply sign up, upload your products, create a campaign and drive sales for your products."
          btn={
            <Button
              width={155}
              as={Link}
              type="blue-grt"
              href="/sign-up"
              rounded
              md
            >
              Book a Demo
            </Button>
          }
          img={Img03}
        />
      ),
    },
  ];
  return (
    <PlastkProductsSection>
      <Container>
        <HeadingWithInfo
          title="Plastk Products"
          description="Knowledge is Power, knowing your credit score is the fastest way to improve your credit score. Subscribe to Plastk Sentinel to get your full credit report."
        />
        <DataTabs data={tabData} />
      </Container>
    </PlastkProductsSection>
  );
}

export default PlastkProducts;
