import * as React from "react";
import { Container } from "@/styles/common";
import Image from "next/image";
import img01 from "../../../public/benefits-img1_[plastk,BAP,benefitsBap].png";
import img02 from "../../../public/benefits-img2_[plastk,BAP,benefitsBap].png";
import img03 from "../../../public/benefits-img3_[plastk,BAP,benefitsBap].png";
import SectionHeader from "../SectionHeader";
import ArticleColumn from "../ArticleColumn";
import { BenefitsSection, BoxWrap } from "./PlastkBenefits.styles";

function PlastkBenefits() {
  return (
    <BenefitsSection>
      <Container>
        <SectionHeader
          heading="Benefits of Plastk Business Accelerator"
          para="Plastk customers are repeat spenders - Being the only Secured Credit Card with Premium Rewards, our customers use our card more often per month than the average Canadian cardholder."
        />
      </Container>
      <BoxWrap>
        <ArticleColumn
          data-aos-delay="50"
          img={<Image src={img01} alt="img description" />}
          title="More Customers"
          para="Drive more customers to your store and turn first-time buyers into repeat customers."
        />
        <ArticleColumn
          data-aos-delay="150"
          img={<Image src={img02} alt="img description" />}
          title="Free Digital Advertising"
          para="Be included in our massive digital marketing campaigns with over 1 million impressions per month*"
        />
        <ArticleColumn
          data-aos-delay="200"
          img={<Image src={img03} alt="img description" />}
          title="Tracking & Reporting"
          para="Detailed monthly reports and business insights to increase your understanding of customers’ spending habits"
        />
      </BoxWrap>
    </BenefitsSection>
  );
}

export default PlastkBenefits;
