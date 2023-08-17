import * as React from "react";
import Image from "next/image";

import {
  CardWidget,
  ImgHolder,
  TextHolder,
  Title,
  Description,
} from "./HowItWorksCard.styles";

function HowItWorksCard({
  featuredImageAltText,
  image,
  title,
  description,
  ...rest
}) {
  return (
    <CardWidget data-aos="fade-up" data-aos-offset="300" {...rest}>
      <ImgHolder>
        <Image src={image} alt={featuredImageAltText} />
      </ImgHolder>
      <TextHolder>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextHolder>
    </CardWidget>
  );
}

export default HowItWorksCard;
