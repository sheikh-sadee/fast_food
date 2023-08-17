import * as React from "react";
import Image from "next/image";
import img01 from "../../../public/img-66.jpg";
import img03 from "../../../public/img-67.jpg";
import img02 from "../../../public/img-68.jpg";
import TeamMember from "../TeamMember";
import { TeamBlock, ColHolder } from "./TeamSection.styles";
import { Container } from "@/styles/common";
import Link from "next/link";

function TeamSection() {
  return (
    <TeamBlock>
      <Container>
        <div className="header">
          <h1>Our Leadership Team</h1>
        </div>
        <ColHolder>
          <TeamMember
            data-aos-delay="50"
            img={<Image src={img01} alt="img description" />}
            socialLinks={[
              {
                path: "sdfsd",
                icon: <i className="plastk-iconslinkedin"></i>,
              },
              {
                path: "sdfsd",
                icon: <i className="plastk-iconstwitter"></i>,
              },
            ]}
            title="Motola Omobamiduro"
            designation="Founder & CEO"
            para="The founder of Plastk and the father to his sweet daughter Aria, Motola believes that there is no bigger responsibility than to lead by example. He tends to challenge himself to do more with less, which is a relatable situation that many hard working Canadians are forced to do every day."
          />
          <TeamMember
            data-aos-delay="100"
            img={<Image src={img03} alt="img description" />}
            socialLinks={[
              {
                path: "sdfsd",
                icon: <i className="plastk-iconslinkedin"></i>,
              },
              {
                path: "sdfsd",
                icon: <i className="plastk-iconstwitter"></i>,
              },
            ]}
            title="David Ojemakinde"
            designation="Chief Technology Officer"
            para="David believes there is always a better way to doing anything. His passion, training and attitude focuses only on driving value at speed to Plastk and our cardholders. He enjoys teaching, cooking and loves to travel the world."
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={img02} alt="img description" />}
            socialLinks={[
              {
                path: "sdfsd",
                icon: <i className="plastk-iconslinkedin"></i>,
              },
              {
                path: "sdfsd",
                icon: <i className="plastk-iconstwitter"></i>,
              },
            ]}
            title="Anil Rege"
            designation="Chief Marketing Officer"
            para="Our CMO, Anil Rege, has extensive North American and Global experience. He did his MBA from the State University of New York, Buffalo, and has worked with Fortune 500 companies, such as Nestle, Reckitt Benckiser, and Procter & Gamble. He also teaches at a business school in Toronto. He is a huge NFL fan, loves travelling and trying new cuisines."
          />
        </ColHolder>
      </Container>
    </TeamBlock>
  );
}

export default TeamSection;
