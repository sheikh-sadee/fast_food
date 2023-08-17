import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Link from "next/link";
import Image from "next/image";
import img01 from "../../../public/favStore-slide1_[plastk,plastkRewards,favStores].png";
import img02 from "../../../public/favStore-slide2_[plastk,plastkRewards,favStores].png";
import img03 from "../../../public/favStore-slide3_[plastk,plastkRewards,favStores].png";
import { FavBanner } from "./FavStores.styles";
import Button from "../UI/Button";
import AppButton from "../AppButton";

function FavStores() {
  const settings = {
    autoplay: false,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <FavBanner>
      <div className="fav-container">
        <Slider {...settings} className="fav-slider">
          <div className="slide">
            <div className="slide-content">
              <div className="img-box">
                <Image src={img01} alt="img description" />
              </div>
              <div className="text-box">
                <span className="subtitle">EXPLORE YOUR</span>
                <h2>Favourite Stores & Brands</h2>
                <div className="img-box desktop-hide">
                  <Image src={img01} alt="img description" />
                </div>
                <div className="btn-holder">
                  <AppButton alignLeft btnGreen />
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <div className="img-box">
                <Image src={img02} alt="img description" />
              </div>
              <div className="text-box">
                <span className="subtitle">Spend & Earn</span>
                <h2>At stores Near You</h2>
                <div className="img-box desktop-hide">
                  <Image src={img02} alt="img description" />
                </div>
                <div className="btn-holder">
                  <AppButton alignLeft btnGreen />
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <div className="img-box">
                <Image src={img03} alt="img description" />
              </div>
              <div className="text-box">
                <span className="subtitle">KEEP TRACK OF</span>
                <h2>Your Plastk Reward Points</h2>
                <div className="img-box desktop-hide">
                  <Image src={img03} alt="img description" />
                </div>
                <div className="btn-holder">
                  <AppButton alignLeft btnGreen />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </FavBanner>
  );
}

export default FavStores;
