import React from "react";
import { TextBlock } from "./OurInfoBlock.styles";

function OurInfoBlock({
  title,
  subtitle,
  paragraph,
  heading,
  mobileimg,
  img,
  mobileHide,
  bgDark,
}) {
  return (
    <>
      <TextBlock mobileHide={mobileHide} bgDark={bgDark}>
        <div className="img-box-mobile">{mobileimg}</div>
        <div className="text-box">
          <strong className="title">{title}</strong>
          <span className="subtitle">{subtitle}</span>
          <div className="text">
            {paragraph}
            {heading && <strong className="heading">{heading}</strong>}
          </div>
        </div>
        <div className="img-box">{img}</div>
      </TextBlock>
    </>
  );
}

export default OurInfoBlock;
