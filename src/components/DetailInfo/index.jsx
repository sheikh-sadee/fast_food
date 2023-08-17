import React from "react";
import { DetailBlock } from "./DetailInfo.styles";
import Link from "next/link";

function DetailInfo({ heading, paragraph }) {
  return (
    <>
      <DetailBlock>
        <div className="holder">
          <div className="head">
            <Link className="btn-back" href="/">
              <span class="material-icons-outlined">arrow_circle_left</span>{" "}
              Back
            </Link>
          </div>
          <h1>{heading}</h1>
          {paragraph}
        </div>
      </DetailBlock>
    </>
  );
}

export default DetailInfo;
