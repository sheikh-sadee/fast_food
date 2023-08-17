import React from "react";
import { TextBlock } from "./TextHeadingSection.styles";

function TextHeadingSection({ color, bgColor, heading, paragraph }) {
  return (
    <>
      <TextBlock color={color} bgColor={bgColor}>
        <div className="holder">
          <div className="head">
            <h1>{heading}</h1>
          </div>
          {paragraph}
        </div>
      </TextBlock>
    </>
  );
}

export default TextHeadingSection;
