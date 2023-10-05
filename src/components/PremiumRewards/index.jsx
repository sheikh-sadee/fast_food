import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import IconCash from "../../assets/images/icon-cash-back.png";
import { Container } from "../../styles/common";
import rewardsSlideData from "../../data/RewardsSlideData";
import logo from "../../../public/logo_img.jpeg";
import {
  RewardSection,
  HeadingHolder,
  SliderHolder,
} from "./PremiumRewards.styles";

function PremiumRewards() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: true,
    centerPadding: "250px",
    centerMode: true,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerPadding: "0",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };
  return (
    <RewardSection>
      <HeadingHolder>
        <Container>
          <h2>Indian Traditional Food</h2>
        </Container>
      </HeadingHolder>
      <SliderHolder>
        <Slider {...settings} className="rewardSlider">
          {rewardsSlideData.map((item, index) => (
            <div className="slide-holder" key={index}>
              <div className="slide">
                <div className="slide-wrap">
                  <span className="logo">
                    <Image src={logo} alt="logo" />
                  </span>
                  <div
                    className="img-box"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="icon-box">
                    <Image
                      src={IconCash}
                      width={159}
                      placeholder="blurred"
                      alt="img description"
                    />
                  </div>
                  <div className="text-box desktop-only">
                    <strong className="title">{item.title}</strong>
                    <p>Taste of Pakistan!.</p>
                  </div>
                </div>
              </div>
              {/* <div className="text-box mobile-only">
                <p>{item.description}</p>
              </div> */}
            </div>
          ))}
        </Slider>
      </SliderHolder>
      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </RewardSection>
  );
}

export default PremiumRewards;
