import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import Link from "next/link";
import img01 from "/public/visual-bap-slide1_[plastk,BAP,visualSectionBap].png";
import img02 from "/public/visual-bap-slide2_[plastk,BAP,visualSectionBap].png";
import img03 from "/public/visual-bap-slide3_[plastk,BAP,visualSectionBap].png";

import { VisualSec, BtnHolder, DescSection } from "./VisualSectionBap.styles";
import Button from "../UI/Button";

function VisualSectionBap() {
  const imgSlider = {
    autoplay: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <VisualSec>
      <div className="container">
        <Slider {...imgSlider} className="img-slider">
          <div className="slide">
            <div className="img-box">
              <Image src={img01} alt="img description" />
            </div>
          </div>
          <div className="slide">
            <div className="img-box">
              <Image src={img02} alt="img description" />
            </div>
          </div>
          <div className="slide">
            <div className="img-box">
              <Image src={img03} alt="img description" />
            </div>
          </div>
        </Slider>
        <DescSection>
          <h1>Plastk Business Accelerator</h1>
          <div className="description">
            <p>
              Our all new, digital service that increases reach & drives more
              customers to spend and engage with your business.
            </p>
          </div>
          <BtnHolder>
            <Button
              className="button"
              as={Link}
              rounded
              href="/sign-up"
              type="darkblue"
              width={200}
              md
            >
              Book a Demo
            </Button>
            <Button
              className="button btn-login"
              as={Link}
              rounded
              href="/sign-up"
              type="outline"
              width={200}
              md
            >
              Login
            </Button>
          </BtnHolder>
        </DescSection>
      </div>
    </VisualSec>
  );
}

export default VisualSectionBap;
