import * as React from "react";
import Image from "next/image";
import { TabBox, TextHolder, ImgHolder } from "./TabBox.styles";

function TabContent({ heading, paragraph, btn, img }) {
  return (
    <TabBox>
      <TextHolder>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
        <div className="btn-box">{btn}</div>
      </TextHolder>
      <ImgHolder>
        <Image src={img} alt="image description" />
      </ImgHolder>
    </TabBox>
  );
}

export default TabContent;
