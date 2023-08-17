import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import img01 from "/public/count-slide1_[plastk,BAP,counterSlider].png";
import img02 from "/public/count-slide2_[plastk,BAP,counterSlider].png";
import img03 from "/public/count-slide3_[plastk,BAP,counterSlider].png";

import { CounterSliderBlock } from "./CounterSlider.styles";
import Button from "../UI/Button";

function CounterSlider() {
  const CounterSlider = {
    autoplay: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <CounterSliderBlock>
      <div className="container">
        <Slider {...CounterSlider} className="slider">
          <div className="slide">
            <div className="wrap">
              <div className="img-box">
                <Image src={img01} width="280" alt="img description" />
              </div>
              <div className="text-box">
                <strong className="title">
                  Sign up & create your business profile
                </strong>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="wrap">
              <div className="img-box">
                <Image src={img02} width="280" alt="img description" />
              </div>
              <div className="text-box">
                <strong className="title">
                  Launch unique campaigns for Plastk customers
                </strong>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="wrap">
              <div className="img-box">
                <Image src={img03} width="280" alt="img description" />
              </div>
              <div className="text-box">
                <strong className="title">
                  Accelerate your business with increased sales
                </strong>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </CounterSliderBlock>
  );
}

export default CounterSlider;
