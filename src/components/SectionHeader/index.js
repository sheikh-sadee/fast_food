import * as React from "react";
import { SectionHead } from "./SectionHeader.styles";

function SectionHeader({ heading, para }) {
  return (
    <SectionHead>
      {heading && <h2>{heading}</h2>}
      <div className="text-wrap">{para && <p>{para}</p>}</div>
    </SectionHead>
  );
}

export default SectionHeader;
