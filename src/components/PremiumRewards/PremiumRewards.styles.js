import styled from "styled-components";

export const RewardSection = styled.div`
  width: 100%;
  position: relative;
  padding: 25px 15px;

  @media (min-width: 768px) {
    padding: 35px 0;
  }
  @media (min-width: 1200px) {
    padding: 50px 0;
  }
`;

export const HeadingHolder = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    margin: 0;
  }
`;

export const SliderHolder = styled.div`
  position: relative;
  max-width: 250px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 994px;
  }
  @media (min-width: 1300px) {
    max-width: 1280px;
  }
  @media (min-width: 1400px) {
    max-width: 1255px;
  }

  .rewardSlider {
    position: relative;

    .slick-dots {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex !important;
      align-items: center;
      justify-content: center;
      gap: 10px;

      li {
        &.slick-active {
          button {
            width: 34px;
            background: #20443c;
          }
        }
      }

      button {
        font-size: 0;
        line-height: 0;
        border: 0;
        outline: none;
        box-shadow: none;
        display: block;
        transition: all ease-in-out 0.3s;
        width: 13px;
        height: 13px;
        border-radius: 50px;
        background: #d9d9d9;
      }
    }

    .slide {
      /* margin-bottom: 43px; */

      @media (min-width: 992px) {
        filter: url(#round) drop-shadow(-11px 14px 50px rgba(0, 0, 0, 0.06));
      }
      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }

    .slick-list {
      /* margin: 0 -10px; */
      padding-top: 30px !important;
      padding-bottom: 30px !important;

      @media (min-width: 768px) {
        padding-top: 50px !important;
        padding-bottom: 90px !important;
      }
      @media (min-width: 992px) {
        padding-top: 120px !important;
        padding-bottom: 100px !important;
      }
      @media (min-width: 1200px) {
        padding-top: 130px !important;
        padding-bottom: 160px !important;
      }
    }

    .slick-next,
    .slick-prev {
      position: absolute;
      left: calc(50% - 40px);
      bottom: -70px;
      transform: translateX(-50%);
      width: 50px;
      height: 50px;
      border-radius: 50px;
      line-height: 0;
      background: none;
      text-indent: -9999px;
      border: 1px solid rgba(33, 35, 56, 0.3);
      transition: background 0.3s ease, color 0.3s ease;
      z-index: 5;

      @media (min-width: 768px) {
        bottom: 10px;
      }
      @media (min-width: 992px) {
        bottom: 60px;
      }
      @media (min-width: 1200px) {
        width: 62px;
        height: 62px;
      }
      &:hover {
        background: var(--primary);
        color: var(--white);
      }
      &:after {
        content: "arrow-left";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: "plastk-icons";
        text-indent: 0;
      }
    }
    .slick-next {
      left: calc(50% + 28px);
      &:after {
        content: "arrow-right";
      }
    }

    .slick-slide {
      padding: 0 10px;
      transition: transform 0.3s ease;

      > div {
        position: relative;

        &:before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 8px;
          left: 5px;
          right: 6px;
          transition: background 0.3s ease;
          background: url(/images/bg-slide2.png) no-repeat;
          background-size: 100% 100%;
          z-index: -1;
        }
      }
      &:not(.slick-active) {
        @media (min-width: 992px) {
          transform: translateY(95px);
        }
      }
      &.slick-center {
        @media (min-width: 992px) {
          transform: translateY(-76px);
        }
        > div {
          &:before {
            left: 5px;
            right: 6px;
            background-image: url(/images/bg-active-slide1.png);
          }
        }

        .slide-wrap {
          color: var(--white);
        }
        .img-box {
          width: 100%;
          height: 100%;
          left: 0;
          right: 0;
          top: 0;

          &:after {
            display: block;
          }
        }
        .ico {
          color: #31bc7b;
        }
      }
    }

    .slide-wrap {
      position: relative;
      padding: 140px 18px 20px;
      transition: color 0.3s ease;
      height: 280px;
      background: var(--white);
      clip-path: polygon(
        0 11%,
        45% 11%,
        100% -1%,
        100% 82%,
        70.25% 100%,
        0% 100%
      );

      @media (min-width: 768px) {
        height: 284px;
        background: var(--white);
        padding: 55px 24px 40px;
      }
    }

    .ico {
      position: absolute;
      top: 18px;
      right: 16px;
      color: var(--brand-color);
      z-index: 3;
    }

    .icon-box {
      display: none;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 159px;

      @media (min-width: 768px) {
        display: none;
      }
    }

    .img-box {
      display: block;
      width: 188px;
      height: 80px;
      overflow: hidden;
      border-radius: 10px;
      margin: 0 auto 22px;
      transition: width 0.3s ease, height 0.3s ease;
      box-shadow: 0px 22.2124px 32.5782px -22.2124px rgba(0, 0, 0, 0.3);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      position: absolute;
      top: 59px;
      left: 22px;
      right: 22px;
      z-index: 2;

      &:after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 47.92%,
          rgba(0, 0, 0, 0.5) 57.81%,
          rgba(0, 0, 0, 0.5) 100%
        );
        display: none;
      }
    }

    .text-box {
      width: 100%;
      font-size: 12px;
      line-height: 17px;
      position: relative;
      font-weight: 500;
      z-index: 2;
      text-align: left;

      @media (min-width: 768px) {
        padding-right: 20px;
        padding-top: 100px;
        padding-right: 30px;
        font-size: var(--font-size-tiny);
        line-height: calc(var(--font-size-tiny) + 3px);
        text-align: left;
      }

      &.desktop-only {
        p {
          /* display: none; */
          @media (min-width: 768px) {
            display: block;
          }
        }
      }

      &.mobile-only {
        display: block;
        color: var(--body-text-color);

        @media (min-width: 768px) {
          display: none;
        }
      }
    }

    .title {
      display: block;
      font-size: var(--font-size-xl);
      line-height: calc(var(--font-size-xl) + 5px);
      font-weight: 700;
      margin: 0 0 8px;
    }
  }
`;
