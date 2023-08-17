import styled from "styled-components";

export const SliderSection = styled.div`
  position: relative;
  padding: 25px 0;
  text-align: center;

  @media (min-width: 768px) {
    padding: 30px 0;
    text-align: left;
  }
  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .container {
    max-width: 1230px;
    padding: 0 15px;
    margin: 0 auto;

    @media (min-width: 1400px) {
    }
  }

  .bmp-slider {
    position: relative;

    .slick-dots {
      list-style: none;
      margin: 30px 0 0;
      padding: 0;
      display: flex !important;
      align-items: center;
      justify-content: center;
      font-size: 0;
      line-height: 0;
      gap: 8px;

      @media (min-width: 768px) {
        margin: 60px 0 0;
      }
      @media (min-width: 1200px) {
        margin: 80px 0 0;
      }

      li {
        position: relative;

        &.slick-active {
          button {
            background: var(--primary);
          }
        }
      }

      button {
        padding: 0;
        border: 0;
        outline: none;
        box-shadow: none;
        width: 8px;
        height: 8px;
        background: rgba(217, 217, 217, 0.8);
        border-radius: 5px;

        @media (min-width: 768px) {
          width: 60px;
          height: 4px;
        }
      }
    }

    .slide-content {
      gap: 10px;

      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
      }
      @media (min-width: 992px) {
        gap: 65px;
      }
    }

    .text-box {
      max-width: 400px;
      font-size: 20px;
      line-height: 28px;
      margin: 0 auto;

      @media (min-width: 768px) {
        font-size: 21px;
        line-height: 28px;
        margin: 0;
      }
      @media (min-width: 992px) {
        font-size: 24px;
        line-height: 28px;
        margin: 0;
      }
      @media (min-width: 1200px) {
        max-width: 500px;
        font-size: 28px;
        line-height: 36px;
      }

      button {
        background: #262250;
      }
    }

    .heading {
      display: block;
      font-size: 28px;
      line-height: 35px;
      font-weight: 600;
      margin-bottom: 15px;

      @media (min-width: 768px) {
        font-size: 30px;
        line-height: 40px;
      }

      @media (min-width: 992px) {
        font-size: 40px;
        line-height: 50px;
      }
      @media (min-width: 1200px) {
        font-size: 48px;
        line-height: 60px;
      }
    }

    p {
      letter-spacing: -0.02em;

      span {
        display: inline-block;
        color: #40ddff;
      }
    }

    .img-box {
      max-width: 330px;
      margin: 0 auto 25px;

      @media (min-width: 768px) {
        max-width: 430px;
        margin: 0;
      }
      @media (min-width: 1200px) {
        max-width: 580px;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      &.mobile-hide {
        display: none;
        @media (min-width: 768px) {
          display: block;
        }
      }
      &.desktop-hide {
        display: block;

        @media (min-width: 768px) {
          display: none;
        }
      }
    }
  }
`;
