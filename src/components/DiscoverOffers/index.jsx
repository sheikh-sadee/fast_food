import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import cardImg1 from "../../../public/discover-offer-img1_[plastk,plastkRewards,discoverOffers].png";
import cardImg2 from "../../../public/discover-offer-img2_[plastk,plastkRewards,discoverOffers].png";
import cardImg3 from "../../../public/discover-offer-img3_[plastk,plastkRewards,discoverOffers].png";
import cardImg4 from "../../../public/discover-offer-img4_[plastk,plastkRewards,discoverOffers].png";
import cardImg5 from "../../../public/discover-offer-img5_[plastk,plastkRewards,discoverOffers].png";
import cardImg6 from "../../../public/discover-offer-img6_[plastk,plastkRewards,discoverOffers].png";
import cardImg7 from "../../../public/discover-offer-img7_[plastk,plastkRewards,discoverOffers].png";
import cardImg8 from "../../../public/discover-offer-img8_[plastk,plastkRewards,discoverOffers].png";
import { DiscoverSection, Holder, SliderWrap } from "./DiscoverOffers.styles";
import Image from "next/image";
import { Container } from "@/styles/common";

function DiscoverOffers() {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "58px",
        },
      },
    ],
  };

  const settings2 = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    rtl: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "58px",
        },
      },
    ],
  };

  return (
    <DiscoverSection>
      <Container>
        <Holder>
          <div className="section-header">
            <h2>Discover Exclusive Offers Today</h2>
            <p>
              You don’t need to apply for a Plastk Secured Credit Card in order
              to access our accelerated Rewards Points program. Our rewards app
              is free and gives you access to exclusive offers for all of your
              favourite stores and brands.
            </p>
          </div>
          <SliderWrap>
            <Slider {...settings} className="review-slider">
              <div className="slide">
                <div className="img-box">
                  <Image src={cardImg1} alt="img description" />
                </div>
              </div>
              <div className="slide">
                <div className="img-box">
                  <Image src={cardImg2} alt="img description" />
                </div>
              </div>
              <div className="slide">
                <div className="img-box">
                  <Image src={cardImg3} alt="img description" />
                </div>
              </div>
              <div className="slide">
                <div className="img-box">
                  <Image src={cardImg4} alt="img description" />
                </div>
              </div>
              <div className="slide">
                <div className="img-box">
                  <Image src={cardImg5} alt="img description" />
                </div>
              </div>
              <div className="slide">
                <div className="img-box">
                  <Image src={cardImg6} alt="img description" />
                </div>
              </div>
            </Slider>

            <Slider {...settings2} className="review-slider">
              <div className="slide">
                <div className="img-box">
                  <Image src={cardImg5} alt="img description" />
                </div>
              </div>
              <div className="slide">
                <div className="img-box">
                  <Image src={cardImg6} alt="img description" />
                </div>
              </div>
              <div className="slide">
                <div className="img-box">
                  <Image src={cardImg7} alt="img description" />
                </div>
              </div>
              <div className="slide">
                <div className="img-box">
                  <Image src={cardImg8} alt="img description" />
                </div>
              </div>
              <div className="slide">
                <div className="img-box">
                  <Image src={cardImg1} alt="img description" />
                </div>
              </div>
              <div className="slide">
                <div className="img-box">
                  <Image src={cardImg2} alt="img description" />
                </div>
              </div>
            </Slider>
          </SliderWrap>
        </Holder>
      </Container>
    </DiscoverSection>
  );
}

export default DiscoverOffers;
