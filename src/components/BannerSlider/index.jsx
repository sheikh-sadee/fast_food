import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import img01 from "../../../public/banner-img01.png";
import img02 from "../../../public/banner-img02.png";
import img03 from "../../../public/banner-img03.png";
import Button from "../UI/Button";
import { SliderBanner } from "./BannerSlider.styles";

function BannerSlider() {
  const settings = {
    infinite: true,
    autoplay: false,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SliderBanner>
      <div className="container">
        <div className="benner-header">
          <h1>Plastk Brand Manager Portal</h1>
          <p>
            A powerful web application designed to help businesses increase
            <br />
            their brand awareness and sales
          </p>
        </div>
        <Slider {...settings} className="banner-slider">
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
        <div className="btn-holder">
          <Button type="blue-grt" rounded width="170">
            Book a Demo
          </Button>
          <Button type="outline" rounded width="170">
            Sign Up
          </Button>
        </div>
      </div>
    </SliderBanner>
  );
}

export default BannerSlider;
