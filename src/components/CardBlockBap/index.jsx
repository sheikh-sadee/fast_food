import * as React from "react";

import { Container } from "../../styles/common";
import { CreditCard, Holder, TextBox, ImgBox } from "./CardBlockBap.styles";
import Button from "../UI/Button";

function CardBlockBap({ titleSm, title, text, img, btn }) {
  return (
    <CreditCard>
      <Container>
        <Holder>
          <ImgBox>{img}</ImgBox>
          <TextBox titleSm={titleSm}>
            <h2>{title}</h2>
            <div className="text">{text}</div>
            {btn && (
              <Button type="primary" width={260} rounded>
                Visit Rewards App
              </Button>
            )}
          </TextBox>
        </Holder>
      </Container>
    </CreditCard>
  );
}

export default CardBlockBap;
