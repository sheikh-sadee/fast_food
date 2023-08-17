import * as React from "react";
import { OfferCol, ImgBox, TextBox } from "./OfferColumn.styles";

function OfferColumn({ img, icon, bgcolor, color, title, para, ...rest }) {
  return (
    <OfferCol data-aos="fade-up" data-aos-offset="300" {...rest}>
      <ImgBox style={{ backgroundImage: `url(${img})` }}></ImgBox>
      <TextBox color={color} bgcolor={bgcolor}>
        <div className="icon">{icon}</div>
        <strong className="title">{title}</strong>
        <p>{para}</p>
      </TextBox>
    </OfferCol>
  );
}

export default OfferColumn;
