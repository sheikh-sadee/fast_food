import React from "react";
import LogoImg from "../../../public/icon-p.svg";
import Image from "next/image";
import { CardBox } from "./JobCard.styles";

function JobCard({ jobTag, heading, title, subtitle }) {
  return (
    <CardBox>
      <div className="header">
        <div className="icon-box">
          <Image src={LogoImg} alt="img description" />
        </div>
        <span className="tag">{jobTag}</span>
      </div>
      <strong className="heading">{heading}</strong>
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
      <div className="btn-holder">
        <button className="btn" type="button">
          Apply
        </button>
      </div>
    </CardBox>
  );
}

export default JobCard;
