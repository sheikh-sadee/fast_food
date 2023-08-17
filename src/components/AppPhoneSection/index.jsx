import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import phoneImg from "../../../public/phone-img_[plastk,creditCard,phoneSection].png";
import imgAppleWhite from "../../../public/icon-apple-white.svg";
import imgGooglPlay from "../../../public/icon-google-play_[plastk,home,footer].svg";
import { Container } from "../../styles/common";
import {
  AppPhone,
  ContentHolder,
  BtnHolder,
  ImgHolder,
} from "./appPhoneSection.styles";
import Button from "../UI/Button";

function AppPhoneSection() {
  return (
    <AppPhone>
      <Container>
        <ImgHolder>
          <Image src={phoneImg} alt="plastk now on each platform" />
          <ContentHolder>
            <strong className="title">
              Our Latest Update <br /> Now Available
            </strong>
            <BtnHolder>
              <Button as={Link} href="/" type="tertiary" rounded width={176}>
                <Image src={imgAppleWhite} width="20" alt="app store" />
                Apple Store
              </Button>
              <Button as={Link} href="/" type="white" rounded width={176}>
                <Image src={imgGooglPlay} width="23" alt="google play" />
                Google Play
              </Button>
            </BtnHolder>
          </ContentHolder>
        </ImgHolder>
      </Container>
    </AppPhone>
  );
}

export default AppPhoneSection;
