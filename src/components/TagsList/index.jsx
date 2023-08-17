import React from "react";
import { TagSection } from "./TagsList.styles";
import { Container } from "@/styles/common";

function TagsList() {
  return (
    <TagSection>
        <div className="holder">
          <button className="btn" type="button">
            All Questions
          </button>
          <button className="btn" type="button">
            Plastk Secured Credit Card
          </button>
          <button className="btn" type="button">
            Plastk App
          </button>
          <button className="btn" type="button">
            Client Success
          </button>
          <button className="btn" type="button">
            Applying and Approval
          </button>
          <button className="btn" type="button">
            Credit Limit and Payments
          </button>
          <button className="btn" type="button">
            Business Accelerator
          </button>
          <button className="btn" type="button">
            Sentinel{" "}
          </button>
          <button className="btn" type="button">
            Brand Manager Portal
          </button>
          <button className="btn" type="button">
            Virtual Card
          </button>
          <button className="btn" type="button">
            General
          </button>
          <button className="btn" type="button">
            Using Your Account
          </button>
          <button className="btn" type="button">
            General
          </button>
        </div>
    </TagSection>
  );
}

export default TagsList;
