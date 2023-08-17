import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import imgAppleStore from "../../../public/icon-apple_[plastk,home,footer].svg";
import imgGooglPlay from "../../../public/icon-google-play_[plastk,home,footer].svg";
import { BtnHolder } from "./AppButton.styles";
import Button from "../UI/Button";

function AppButton({ footerBtn, alignLeft, btnGreen, btnTransparent }) {
  return (
    <BtnHolder
      footerBtn={footerBtn}
      alignLeft={alignLeft}
      btnGreen={btnGreen}
      btnTransparent={btnTransparent}
    >
      <Button
        className="btn-appStore"
        as={Link}
        href="/"
        type="outline"
        rounded
        width={145}
      >
        <Image src={imgAppleStore} width="20" alt="app store" />
        <span className="text">Download on</span>
        Apple Store
      </Button>
      <Button
        className="btn-googlePlay"
        as={Link}
        href="/"
        type={footerBtn ? "outlinePrimary" : "outline"}
        rounded
        width={145}
      >
        <Image src={imgGooglPlay} width="23" alt="google play" />
        <span className="text">Download on</span>
        Google Play
      </Button>
    </BtnHolder>
  );
}

export default AppButton;
