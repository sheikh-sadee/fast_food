import * as React from "react";

import { Container } from "../../styles/common";
import {
  SectionInfo,
  Holder,
  TextBox,
  ImgBox,
  ImgBoxMobile,
} from "./InfoSection.styles";
import Button from "../UI/Button";

function InfoSection({
  direction,
  textWhite,
  titleSm,
  title,
  text,
  img,
  mobileImg,
  mobileHide,
  btn,
  bordergradient,
}) {
  return (
    <SectionInfo mobileHide={mobileHide}>
      <Container>
        <Holder direction={direction}>
          <ImgBox data-aos="fade-up">{img}</ImgBox>
          {mobileImg && <ImgBoxMobile>{mobileImg}</ImgBoxMobile>}
          <TextBox data-aos="fade-up" titleSm={titleSm} textWhite={textWhite} bordergradient={bordergradient}>
            <h2>{title}</h2>
            <div className="text">{text}</div>
            {btn && 
             <div>{btn}</div>
            }
          </TextBox>
        </Holder>
      </Container>
    </SectionInfo>
  );
}

export default InfoSection;
