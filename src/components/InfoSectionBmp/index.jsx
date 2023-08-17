import * as React from "react";

import {
  SectionInfo,
  Holder,
  TextBox,
  ImgBox,
  ImgBoxMobile,
} from "./InfoSection.styles";
import Button from "../UI/Button";

function InfoSectionBmp({
  direction,
  textWhite,
  titleSm,
  title,
  text,
  img,
  mobileImg,
  mobileHide,
  btn,
}) {
  return (
    <SectionInfo mobileHide={mobileHide}>
      <div className="container">
        <Holder direction={direction}>
          <ImgBox data-aos="fade-up">{img}</ImgBox>
          {mobileImg && <ImgBoxMobile>{mobileImg}</ImgBoxMobile>}
          <TextBox data-aos="fade-up" titleSm={titleSm} textWhite={textWhite}>
            <h2>{title}</h2>
            <div className="text">{text}</div>
            {btn && (
              <Button type="blue-grt" rounded width={250}>
                Book a Demo
              </Button>
            )}
          </TextBox>
        </Holder>
      </div>
    </SectionInfo>
  );
}

export default InfoSectionBmp;
