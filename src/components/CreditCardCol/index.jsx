import * as React from "react";
import { Container } from "../../styles/common";
import { CreditCardBlock, TextHolder, ImgHolder } from "./CreditCardCol.styles";
import Image from "next/image";
import Button from "../UI/Button";

function CreditCardCol({ subtitle, title, img, reverse, list, btn }) {
  return (
    <CreditCardBlock reverse={reverse}>
      <Container className="list-container">
        <div className="header tablet-hide">
          <h2>{title}</h2>
          <strong className="subtitle">{subtitle}</strong>
        </div>
        <ImgHolder data-aos="flip-left" data-aos-offset="400">
          {img}
        </ImgHolder>
        <TextHolder data-aos="fade-up">
          <div className="header mobile-hide">
            <strong className="subtitle">{subtitle}</strong>
            <h2>{title}</h2>
          </div>
          <ul>
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
        </TextHolder>
      </Container>
      <Container>
        {btn && (
          <div className="btn-holder">
            <Button type="white" rounded width={220}>
              Apply Now
            </Button>
          </div>
        )}
      </Container>
    </CreditCardBlock>
  );
}

export default CreditCardCol;
