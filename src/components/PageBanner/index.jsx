import * as React from "react";
import bgImg from "../../../public/food_image_4.png";
import { Banner, TextHolder } from "./PageBanner.styles";
import Button from "../UI/Button";
import Link from "next/link";

function PageBanner() {
  return (
    <Banner style={{ backgroundImage: `url(${bgImg.src})` }}>
      <div className="container">
        <h1>Welcome to Fast Food Hub</h1>
        <TextHolder>
          <p>Taste the spices of Pakistan in every bite!</p>
          <Button
            type="secondary"
            rounded
            width="250"
            as={Link}
            href="/blog"
          >
            Reservations
          </Button>
        </TextHolder>
      </div>
    </Banner>
  );
}

export default PageBanner;
