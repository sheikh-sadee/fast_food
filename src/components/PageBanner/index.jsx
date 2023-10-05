import * as React from "react";
import bgImg from "../../../public/food_image_4.png";
import { Banner, TextHolder } from "./PageBanner.styles";
import Button from "../UI/Button";
import Link from "next/link";

function PageBanner() {
  return (
    <Banner style={{ backgroundImage: `url(${bgImg.src})` }}>
      <div className="container">
        <h1>
          Bem Vindo Ao <br /> Taj Mahal
        </h1>
        <TextHolder>
          <p>
            Onde as especiarias encontram os sorrisos! Culinária Indiana
            Autêntica
          </p>
          <Button
            type="secondary"
            rounded
            width="250"
            as={Link}
            href="/reservation"
          >
            Reservations
          </Button>
        </TextHolder>
      </div>
    </Banner>
  );
}

export default PageBanner;
