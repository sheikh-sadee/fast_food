import * as React from "react";
import Image from "next/image";
import {
  SignUpBanner,
  ImgHolder,
  TextHolder,
  TextBox,
} from "./SignUpVisual.styles";

function SignUpVisual({ title, heading, paragraph, list, bgImg, bgImgCenter }) {
  return (
    <SignUpBanner>
      <ImgHolder bgImgCenter={bgImgCenter}>{bgImg}</ImgHolder>
      <TextHolder>
        <div className="wrap">
          <strong className="title">{title}</strong>
          <h1>{heading}</h1>
          <ul className="list">
            {list.map((item, index) => {
              return (
                <li key={index}>
                  <div className="ico-box">
                    <Image src={item.Image} alt="img description" />
                  </div>
                  <span className="text">{item.text}</span>
                </li>
              );
            })}
          </ul>
          <TextBox>{paragraph}</TextBox>
        </div>
      </TextHolder>
      <button className="btn-down">
        <i className="plastk-iconschevron-down"></i>{" "}
      </button>
    </SignUpBanner>
  );
}

export default SignUpVisual;
