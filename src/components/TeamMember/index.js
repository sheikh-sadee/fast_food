import * as React from "react";
import { Column, ImgBox, TextBox } from "./TeamMember.styles";
import Link from "next/link";

function TeamMember({ img, title, designation, para, socialLinks, ...rest }) {
  return (
    <Column data-aos="fade-up" data-aos-offset="300" {...rest}>
      <ImgBox>
        {img}
        {socialLinks?.length && (
          <ul className="socialnetwork">
            {socialLinks.map((itm, key) => (
              <li key={key}>
                <Link href={itm?.path}>{itm?.icon}</Link>
              </li>
            ))}
          </ul>
        )}
      </ImgBox>
      <TextBox>
        <strong className="title">{title}</strong>
        <strong className="designation">{designation}</strong>
        <p>{para}</p>
      </TextBox>
    </Column>
  );
}

export default TeamMember;
