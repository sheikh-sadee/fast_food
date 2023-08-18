import * as React from "react";
import Image from "next/image";
import img01 from "../../../public/food_image_2.jpg";
import img03 from "../../../public/food_image_4.png";
import img02 from "../../../public/food_image_4.png";
import TeamMember from "../TeamMember";
import { ImgBlock, ColHolder } from "./TeamSection.styles";
import { Container } from "@/styles/common";
import Link from "next/link";

function ImageSection() {
  return (
    <ImgBlock>
      <Container>
        <div className="header">
          <h1>Enjoy Delicious Food in your Healthy Life</h1>
        </div>
        <ColHolder>
          <TeamMember
            data-aos-delay="50"
            img={<Image src={img01} alt="img description" />}       
          />
          <TeamMember
            data-aos-delay="100"
            img={<Image src={img03} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={img02} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="50"
            img={<Image src={img01} alt="img description" />}       
          />
          <TeamMember
            data-aos-delay="100"
            img={<Image src={img03} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={img02} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="50"
            img={<Image src={img01} alt="img description" />}       
          />
          <TeamMember
            data-aos-delay="100"
            img={<Image src={img03} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={img02} alt="img description" />}
          />
           <TeamMember
            data-aos-delay="50"
            img={<Image src={img01} alt="img description" />}       
          />
          <TeamMember
            data-aos-delay="100"
            img={<Image src={img03} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={img02} alt="img description" />}
          />
        </ColHolder>
      </Container>
    </ImgBlock>
  );
}

export default ImageSection;
