import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Link from "next/link";
import Image from "next/image";
import img01 from "../../../public/food_image_9.jpg";
import img02 from "../../../public/food_image_8.jpg";
import img03 from "../../../public/food_image_4.png";
import { HeroBanner } from "./HeroSlider.styles";

function HeroSlider() {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <HeroBanner>
      <div className="hero-container">
        <Slider {...settings} className="hero-slider">
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
      </div>
    </HeroBanner>
  );
}

export default HeroSlider;
