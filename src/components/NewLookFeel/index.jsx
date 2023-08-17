import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import phoneImg from "../../../public/phone-img-lookFeel_[plastk,plastkRewards,newLookFeel].png";
import { Container } from "../../styles/common";
import {
  NewLookBlock,
  ContentHolder,
  BtnHolder,
  ImgHolder,
} from "./newLookFeel.styles";
import Button from "../UI/Button";

function NewLookFeel() {
  return (
    <NewLookBlock>
      <Container>
        <ImgHolder data-aos="zoom-in" data-aos-offset="500">
          <Image src={phoneImg} alt="new look feel" />
          <ContentHolder>
            <strong className="title">All-New Look & Feel</strong>
            <BtnHolder>
              <Button as={Link} href="/" type="accent" rounded width={200}>
                Apply Now
              </Button>
            </BtnHolder>
          </ContentHolder>
        </ImgHolder>
      </Container>
    </NewLookBlock>
  );
}

export default NewLookFeel;
