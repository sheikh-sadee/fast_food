import React from "react";
import Image from "next/image";
import Group from "/public/rewards-platforms_[plastk,plastkRewards,visualSection].png";
import { Container } from "../../styles/common";
import AppButton from "../AppButton";
import { VisualSec, ImgHolder, TextWrap, AppBtn } from "./VisualSection.styles";

function VisualSection() {
  return (
    <VisualSec>
      <Container>
        <TextWrap>
          <ImgHolder data-aos="fade-up" data-aos-offset="300">
            <Image src={Group} alt="img description" />
          </ImgHolder>
          <h1>Experience the Ultimate Rewards Platform</h1>
        </TextWrap>
        <AppBtn>
          <AppButton btnGreen />
        </AppBtn>
      </Container>
    </VisualSec>
  );
}

export default VisualSection;
