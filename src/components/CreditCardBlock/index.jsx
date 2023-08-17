import * as React from "react";

import { Container } from "../../styles/common";
import { CreditCard, Holder, TextBox, ImgBox } from "./CreditCardBlock.styles";
import Button from "../UI/Button";

function CreditCardBlock({ textWhite, titleSm, title, text, img, btn }) {
  return (
    <CreditCard>
      <Container>
        <Holder>
          <ImgBox>{img}</ImgBox>
          <TextBox titleSm={titleSm} textWhite={textWhite}>
            <h2>{title}</h2>
            <div className="text">{text}</div>
            <ul className="info-list">
              <li>
                <strong className="number">17.99%</strong>
                <span className="text">Interest Rate</span>
              </li>
              <li>
                <strong className="number">$48</strong>
                <span className="text">Annual</span>
              </li>
              <li>
                <strong className="number">$6</strong>
                <span className="text">Monthly</span>
              </li>
            </ul>
            {btn && (
              <Button type="accent" width={260} rounded>
                Apply Now
              </Button>
            )}
          </TextBox>
        </Holder>
      </Container>
    </CreditCard>
  );
}

export default CreditCardBlock;
