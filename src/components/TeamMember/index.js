import * as React from "react";
import { Column, ImgBox, TextBox } from "./TeamMember.styles";
import Link from "next/link";

function TeamMember({ img, title, designation, para, socialLinks, ...rest }) {
  return (
    <Column data-aos="fade-up" data-aos-offset="300" {...rest}>
      <ImgBox>
        {img}
      </ImgBox>
    </Column>
  );
}

export default TeamMember;
