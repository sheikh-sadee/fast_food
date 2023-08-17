import * as React from "react";
import Image from "next/image";
import HeadingWithInfo from "../HeadingWithInfo";
import OfferColumn from "../OfferColumn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { OffersSection } from "./SpecialOffers.styles";

const Img = {
  ColImg01: "/images/img-36.jpg",
  ColImg02: "/images/img-37.jpg",
  ColImg03: "/images/img-38.jpg",
};

function SpecialOffers({ mobileHide }) {
  const settings = {
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          dots: false,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <OffersSection mobileHide={mobileHide}>
      <div className="container">
        <HeadingWithInfo
          className="header"
          title="Special Offers"
          description="Every new cardholder will earn 5,000 additional rewards points after three months, worth $20 (CDN). Conditions apply"
        />
        <Slider {...settings} className="offer-slider">
          <OfferColumn
            data-aos-delay="50"
            img={Img.ColImg01}
            icon={<i className="plastk-iconssparkles"></i>}
            title="0% Interest Rate"
            para="Receive 0% Interest Rate on purchases for the first 3 months when you sign up for a Plastk Secured Card."
          />
          <OfferColumn
            data-aos-delay="150"
            bgcolor="#FAFFEC"
            color="#000"
            img={Img.ColImg02}
            icon={<i className="plastk-iconsaqi"></i>}
            title="Sign up Bonus"
            para="You can redeem 5000 points, a $20 value, just for signing up! Just fill out our application and wait for approval to start earning points!"
          />
          <OfferColumn
            data-aos-delay="200"
            bgcolor="#011D2F"
            img={Img.ColImg03}
            icon={<i className="plastk-iconscup"></i>}
            title="Refer a Friend"
            para="Earn an extra 2500 Plastk Reward Points when you refer a friend to the Plastk Rewards App. Sign up today and start earning!"
          />
        </Slider>
      </div>
    </OffersSection>
  );
}

export default SpecialOffers;
