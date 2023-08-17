import * as React from "react";
import { Container } from "@/styles/common";
import Image from "next/image";
import img01 from "../../../public/business-slide1_[plastk,plastkBmp,BusinessBenefits].png";
import img02 from "../../../public/business-slide2_[plastk,plastkBmp,BusinessBenefits].png";
import img03 from "../../../public/business-slide3_[plastk,plastkBmp,BusinessBenefits].png";
import SectionHeader from "../SectionHeader";
import ArticleColumn from "../ArticleColumn";
import { BenefitsSection, BoxWrap } from "./BusinessBenefits.styles";
import Button from "../UI/Button";

function BusinessBenefits() {
  return (
    <BenefitsSection>
      <Container>
        <SectionHeader heading="Benefits for your Business" />
      </Container>
      <BoxWrap>
        <ArticleColumn
          data-aos-delay="50"
          img={<Image src={img01} alt="img description" />}
          title="Increased Revenue"
          para="Our platform is designed to help you increase your revenue and provide an additional  customer source."
        />
        <ArticleColumn
          data-aos-delay="150"
          img={<Image src={img02} alt="img description" />}
          title="Increased Reach"
          para="Reach your target audience more effectively using in-depth data and campaign performance criteria."
        />
        <ArticleColumn
          data-aos-delay="200"
          img={<Image src={img03} alt="img description" />}
          title="Understand Cusomers"
          para="We offer unique customer profiles which help you understand your customers' needs, preferences, and behaviors"
        />
      </BoxWrap>
      <div className="btn-holder">
        <Button type="darkblue" rounded width="290">
          Book a Demo
        </Button>
      </div>
    </BenefitsSection>
  );
}

export default BusinessBenefits;
