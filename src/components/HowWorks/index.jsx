import React from "react";
import Image from "next/image";
import icon1 from "../../../public/ico-linegraph_[plastk,plastkBmp,howWorks].svg";
import icon2 from "../../../public/ico-speaker_[plastk,plastkBmp,howWorks].svg";
import icon3 from "../../../public/ico-increase_[plastk,plastkBmp,howWorks].svg";
import InfoCard from "../InfoCard";
import { InfoSection, SectionHead, ColumnWrap } from "./HowWorks.styles";

function HowWorks() {
  return (
    <InfoSection>
      <div className="container">
        <SectionHead>
          <h2>
            How it <span>works</span>
          </h2>
          <p>
            With our tool, you can easily create and manage marketing campaigns,
            track your progress, and analyze customer behavior to gain valuable
            insights into your target audience.
          </p>
        </SectionHead>
        <ColumnWrap>
          <InfoCard
            icon={<Image src={icon1} alt="img description" />}
            title="Sign up"
            para="Unlock exclusive access to tools, resources, and insights to help you elevate your brand's success. Sign up now and take your brand to the next level!"
          />
          <InfoCard
            icon={<Image src={icon2} alt="img description" />}
            title="Create Campaign"
            para="Launch your next campaign with confidence using our intuitive campaign creation tools. From setup to delivery, the process is made easy for you!"
          />
          <InfoCard
            icon={<Image src={icon3} alt="img description" />}
            title="Increase Sales"
            para="Our platform makes it easy to bring your ideas to life and connect with your target audience. launch your campaign today and see the results for yourself."
          />
        </ColumnWrap>
      </div>
    </InfoSection>
  );
}

export default HowWorks;
