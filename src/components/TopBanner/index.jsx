import * as React from "react";
import bgImg from "../../../public/faq-banner_[plastk,FAQ,topBanner].jpg";
import { PageBanner, TextHolder } from "./TopBanner.styles";

function TopBanner() {
  return (
    <PageBanner style={{ backgroundImage: `url(${bgImg.src})` }}>
      <div className="container">
        <TextHolder>
          <h1>How Can We Help?</h1>
          <p>We are here to answer you questions!</p>
        </TextHolder>
        <form action="#">
          <div className="input-box">
            <i className="ico-search plastk-iconssearch"></i>
            <input
              className="search"
              type="text"
              placeholder="What are you looking for?"
            />
          </div>
        </form>
      </div>
    </PageBanner>
  );
}

export default TopBanner;
