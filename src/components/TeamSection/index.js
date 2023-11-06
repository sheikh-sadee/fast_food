import * as React from "react";
import Image from "next/image";
import img01 from "../../../public/food_image_2.jpg";
import img03 from "../../../public/food_image_4.png";
import img02 from "../../../public/food_image_4.png";
import starter1 from "../../../public/starter_1.jpg";
import starter2 from "../../../public/starter_2.jpg";
import starter3 from "../../../public/starter_3.jpg";
import starter4 from "../../../public/starter_4.png";
import starter5 from "../../../public/starter_5.png";
import starter6 from "../../../public/starter_6.jpg";
import soup1 from "../../../public/soup_1.png";
import soup2 from "../../../public/soup_2.png";
import soup3 from "../../../public/soup_3.png";
import soup4 from "../../../public/soup_4.png";
import bbq1 from "../../../public/bbq1.jpg";
import bbq2 from "../../../public/bbq2.jpg";
import bbq3 from "../../../public/bbq3.jpg";
import bbq4 from "../../../public/bbq4.jpg";
import bbq5 from "../../../public/bbq5.jpg";
import bbq6 from "../../../public/bbq6.jpg";
import taj1 from "../../../public/taj1.jpg";
import taj2 from "../../../public/taj2.jpg";
import taj3 from "../../../public/taj3.jpg";
import taj6 from "../../../public/taj6.jpg";
import taj4 from "../../../public/taj4.png";
import taj5 from "../../../public/taj5.png";
import ic1 from "../../../public/ic1.png";
import ic2 from "../../../public/ic2.png";
import ic3 from "../../../public/ic3.jpg";
import ic4 from "../../../public/ic4.jpg";
import ic5 from "../../../public/ic5.jpg";
import ic6 from "../../../public/ic6.jpg";
import ic7 from "../../../public/ic7.jpg";
import ic8 from "../../../public/ic8.jpg";
import ic9 from "../../../public/ic9.jpg";
import ic10 from "../../../public/ic10.png";
import naan1 from "../../../public/naan1.jpg";
import naan2 from "../../../public/naan2.png";
import naan3 from "../../../public/naan3.jpg";
import naan4 from "../../../public/naan4.jpg";
import naan5 from "../../../public/naan5.jpg";
import naan6 from "../../../public/naan6.png";
import p1 from "../../../public/p1.jpg";
import p2 from "../../../public/p2.jpg";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.jpg";
import p5 from "../../../public/p5.png";
import p6 from "../../../public/p6.png";
import piz1 from "../../../public/piz1.png";
import piz2 from "../../../public/piz2.png";
import piz3 from "../../../public/piz3.png";
import piz4 from "../../../public/piz4.png";
import piz5 from "../../../public/piz5.png";
import piz6 from "../../../public/piz5.png";
import piz7 from "../../../public/piz7.png";
import piz8 from "../../../public/piz8.png";
import kid1 from "../../../public/kid1.png";
import kid2 from "../../../public/kid2.png";
import kid3 from "../../../public/kid3.jpg";
import pas1 from "../../../public/pas1.png";
import pas2 from "../../../public/pas2.png";

import TeamMember from "../TeamMember";
import { ImgBlock, ColHolder } from "./TeamSection.styles";
import { Container } from "@/styles/common";
import Link from "next/link";

function ImageSection() {
  return (
    <ImgBlock>
      <Container className="holder">
        <div className="header">
          <h1>
            Enjoy Delicious Food in your Healthy Life
          </h1>
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
            data-aos-delay="150"
            img={<Image src={piz1} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={piz2} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={piz3} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={piz4} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={piz5} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={piz6} alt="img description" />}
          />

          <TeamMember
            data-aos-delay="150"
            img={<Image src={piz7} alt="img description" />}
          />

          <TeamMember
            data-aos-delay="150"
            img={<Image src={piz8} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="50"
            img={<Image src={starter1} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="100"
            img={<Image src={starter2} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={starter3} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="50"
            img={<Image src={starter4} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="100"
            img={<Image src={starter5} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={starter6} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="50"
            img={<Image src={soup1} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="100"
            img={<Image src={soup2} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={soup3} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={soup4} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={bbq1} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={bbq2} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={bbq3} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={bbq4} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={bbq5} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={bbq6} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={taj1} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={taj2} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={taj3} alt="img description" />}

          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={taj4} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={taj5} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={ic1} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={ic2} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={ic3} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={ic4} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={ic5} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={ic6} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={ic7} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={ic8} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={ic9} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={ic10} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={naan1} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={naan2} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={naan3} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={naan4} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={naan5} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={naan6} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={p1} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={p2} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={p3} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={p4} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={p5} alt="img description" />}
          />
          <TeamMember
            data-aos-delay="150"
            img={<Image src={p6} alt="img description" />}
          />

          <TeamMember
            data-aos-delay="150"
            img={<Image src={kid1} alt="img description" />}
          />

          <TeamMember
            data-aos-delay="150"
            img={<Image src={kid2} alt="img description" />}
          />

          <TeamMember
            data-aos-delay="150"
            img={<Image src={kid3} alt="img description" />}
          />

          <TeamMember
            data-aos-delay="150"
            img={<Image src={pas1} alt="img description" />}
          />

          <TeamMember
            data-aos-delay="150"
            img={<Image src={pas2} alt="img description" />}
          />
        </ColHolder>
      </Container>
    </ImgBlock>
  );
}

export default ImageSection;
