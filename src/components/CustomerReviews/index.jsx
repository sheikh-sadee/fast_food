import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Container } from "../../styles/common";
import { ReviewSection, Holder, SliderWrap } from "./CustomerReviews.styles";
import ReviewCard from "../ReviewCard";
import reviewSliderData from "../../data/reviewSliderData";

function CustomerReviews() {
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
    <ReviewSection>
      <Container className="container">
        <Holder>
          <h2>
            Why Our Customers <br /> Love Us
          </h2>
          <SliderWrap>
            <Slider {...settings} className="review-slider">
              {reviewSliderData.slice(0, 8).map((item, index) => (
                <div className="slide" key={index}>
                  <ReviewCard title={item.name} para={item.review} />
                </div>
              ))}
            </Slider>

            <Slider {...settings2} className="review-slider">
              {reviewSliderData
                .slice(8, reviewSliderData.length)
                .map((item, index) => (
                  <div className="slide" key={index}>
                    <ReviewCard title={item.name} para={item.review} />
                  </div>
                ))}
            </Slider>
          </SliderWrap>
        </Holder>
      </Container>
    </ReviewSection>
  );
}

export default CustomerReviews;
