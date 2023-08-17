import * as React from "react";
import { HeadingHolder } from "./HeadingWithInfo.styles";

function HeadingWithInfo({ title, description, hidePara }) {
  return (
    <HeadingHolder hidePara={hidePara}>
      <h2>{title}</h2>
      <p className="descriptionHolder">{description}</p>
    </HeadingHolder>
  );
}

export default HeadingWithInfo;
