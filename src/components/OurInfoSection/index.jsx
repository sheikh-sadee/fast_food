import React from "react";
import Image from "next/image";
import img1 from "../../../public/img-69.png";
import img2 from "../../../public/img-70.png";
import img3 from "../../../public/img-71.png";
import img4 from "../../../public/img-73.jpg";
import img5 from "../../../public/img-74.jpg";
import img6 from "../../../public/img-75.jpg";
import OurInfoBlock from "../OurInfoBlock";
import { OurSection } from "./OurInfoSection.styles";
import { Container } from "@/styles/common";

function OurInfoSection({ title, subtitle, paragraph, img }) {
  return (
    <>
      <OurSection>
        <Container>
          <h2>What We Stand For</h2>
          <OurInfoBlock
            mobileimg={<Image src={img4} alt="imd description" />}
            title="Our Mission"
            subtitle="To be a trusted partner of Canadians in their journey... Read More"
            paragraph="To be a trusted partner of Canadians in their journey towards financial wellbeing. We aim to provide innovative tools that promote financial literacy, facilitate credit building and reward customers as they use our services. Our aim is to establish long-term relationships with our customers based on trust, integrity, and shared success."
            img={<Image src={img1} alt="imd description" />}
          />
          <OurInfoBlock
            mobileimg={<Image src={img5} alt="imd description" />}
            title="Our Values"
            subtitle="Integrity, Accountability, Customers First, Innovation, People & Diversity."
            paragraph="Integrity lies at the heart of everything we do,  prioritizing the well-being of our customers. Plastk embraces innovation, and continuously looks for new ways to enhance our card's features, offering advanced security measures and cutting-edge tools to support our customers' financial well-being. We foster an inclusive environment that celebrates diversity, empowering our team to deliver exceptional service that meets the diverse needs of our customers."
            img={<Image src={img2} alt="imd description" />}
          />
          <OurInfoBlock
            mobileimg={<Image src={img6} alt="imd description" />}
            title="Our vision"
            subtitle="Help all Canadians build a secure financial future."
            heading="Help all Canadians build a secure financial future."
            img={<Image src={img3} alt="imd description" />}
          />
        </Container>
      </OurSection>
    </>
  );
}

export default OurInfoSection;
