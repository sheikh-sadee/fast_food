import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import Iphone01 from "../../../public/iphone-12_[plastk,home,plastkApp].png";
import Iphone02 from "../../../public/iphone-13_[plastk,home,plastkApp].png";
import Iphone03 from "../../../public/iphone-14_[plastk,home,plastkApp].png";
import {
  PlastkAppSection,
  Container,
  AppHolder,
  Header,
  SliderHolder,
} from "./PlastkApp.styles";
import AppButton from "../AppButton";

function PlastkApp() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const textSlider = {
    speed: 500,
    dots: true,
    arrows: false,
    vertical: false,
    slidesToShow: 3,
    autoplay: true,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imgSlider = {
    speed: 500,
    autoplay: false,
    arrows: false,
    dots: false,
    fade: true,
  };

  return (
    <PlastkAppSection>
      <Container>
        <AppHolder>
          <Header className="desktop-hide">
            <h2>
              Plastk App <span className="ico plastk-iconsarrow-circle"></span>
            </h2>
            <p>
              Plastk App Gives You The Tools You Need To Earn Points While
              Strengthening Your Credit.
              <Link href="/">
                Sign up for the plastk app today{" "}
                <span class="plastk-iconsarrow-circle"></span>
              </Link>
            </p>
          </Header>
          <SliderHolder>
            <div className="img-slider-wrap">
              <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                {...imgSlider}
                className="img-slider"
              >
                <div className="slick-slide">
                  <Image src={Iphone02} alt="img description" />
                </div>
                <div className="slick-slide">
                  <Image src={Iphone01} alt="img description" />
                </div>
                <div className="slick-slide">
                  <Image src={Iphone03} alt="img description" />
                </div>
              </Slider>
            </div>
            <div className="text-slider-wrap">
              <Header className="mobile-hide">
                <h2>
                  Plastk App{" "}
                  <span className="ico plastk-iconsarrow-circle"></span>
                </h2>
                <p>
                  Plastk App Gives You The Tools You Need To Earn Points While
                  Strengthening Your Credit.
                </p>
              </Header>
              <Slider
                className="text-slider"
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                {...textSlider}
              >
                <div className="slide">
                  <div className="box">
                    <p>View your credit & reward points balances</p>
                  </div>
                </div>
                <div className="slide">
                  <div className="box">
                    <p>
                      Spend & Earn Rewards Points + Gain Access to exclusive
                      offers
                    </p>
                  </div>
                </div>
                <div className="slide">
                  <div className="box">
                    <p>review Spending, transactions & card statements</p>
                  </div>
                </div>
              </Slider>
              <AppButton alignLeft btnGreen />
            </div>
          </SliderHolder>
        </AppHolder>
      </Container>
    </PlastkAppSection>
  );
}

export default PlastkApp;
