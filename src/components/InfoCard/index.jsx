import React from "react";
import Button from "../UI/Button";
import { CardColumn, IconBox } from "./InfoCard.styles";

function InfoCard({ icon, title, para }) {
  return (
    <CardColumn>
      <IconBox>{icon}</IconBox>
      <strong className="title">{title}</strong>
      <p>{para}</p>
    </CardColumn>
  );
}

export default InfoCard;
