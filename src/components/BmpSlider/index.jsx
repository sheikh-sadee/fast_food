import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import img01 from "../../../public/bmp-slide1_[plastk,plastkBmp,BmpSlider].png";
import img02 from "../../../public/bmp-slide2_[plastk,plastkBmp,BmpSlider].png";
import img03 from "../../../public/bmp-slide3_[plastk,plastkBmp,BmpSlider].png";
import Button from "../UI/Button";
import { SliderSection } from "./Bmpslider.styles";

function BmpSlider() {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SliderSection>
      <div className="container">
        <Slider {...settings} className="bmp-slider">
          <div className="slide">
            <div className="slide-content">
              <div className="img-box mobile-hide">
                <Image src={img01} alt="img description" />
              </div>
              <div className="text-box">
                <p>
                  One <span>Standout</span> dashboard to make the best business
                  decisions
                </p>
                <div className="img-box desktop-hide">
                  <Image src={img01} alt="img description" />
                </div>
                <div className="btn-holder">
                  <Button type="primary" rounded width="290">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <div className="img-box mobile-hide">
                <Image src={img02} alt="img description" />
              </div>
              <div className="text-box">
                <p>
                  <span>Setup</span> your Campaign Easily and Grow your Brand
                  Awareness
                </p>
                <div className="img-box desktop-hide">
                  <Image src={img02} alt="img description" />
                </div>
                <div className="btn-holder">
                  <Button type="primary" rounded width="290">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <div className="img-box mobile-hide">
                <Image src={img03} alt="img description" />
              </div>
              <div className="text-box">
                <p>
                  Get an <span>In-Depth</span> View of your Customers to Target
                  your Audience
                </p>
                <div className="img-box desktop-hide">
                  <Image src={img03} alt="img description" />
                </div>
                <div className="btn-holder">
                  <Button type="primary" rounded width="290">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </SliderSection>
  );
}

export default BmpSlider;
