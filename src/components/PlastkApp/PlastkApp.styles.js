import styled from "styled-components";

export const PlastkAppSection = styled.div`
  position: relative;
  padding: 25px 0;

  @media (min-width: 992px) {
    padding: 35px 0;
  }
  @media (min-width: 1200px) {
    padding: 50px 0;
  }
`;

export const Container = styled.div`
  max-width: 994px;
  display: "none !important";
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 15px;
  }
`;
export const AppHolder = styled.div`
  max-width: 994px;
  margin: 0 auto;
  padding: 30px 20px 40px;

  background: #f6f6f6;

  @media (min-width: 768px) {
    border-radius: 40px;
    padding: 40px 20px;
  }
  @media (min-width: 992px) {
    border-radius: 50px;
    padding: 40px 50px 40px;
  }
  @media (min-width: 1200px) {
    padding: 40px 50px 30px;
  }
  @media (min-width: 1500px) {
    padding: 60px 100px;
  }
`;

export const Header = styled.div`
  overflow: hidden;
  font-weight: 600;
  margin: 0 0 30px;
  text-align: center;

  @media (min-width: 768px) {
    font-weight: 500;
    margin: 0 0 20px;
    text-align: left;
  }
  @media (min-width: 1200px) {
    margin: 0 0 30px;
  }

  &.desktop-hide {
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
  }

  &.mobile-hide {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }

  h2 {
    margin-bottom: 12px;

    @media (min-width: 768px) {
      font-weight: 600;
      color: var(--dark-green);
    }

    .ico {
      display: none;
      font-size: 24px;
      line-height: 1;
      @media (min-width: 768px) {
        display: inline-block;
      }
    }
  }

  br {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }

  p {
    a {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      color: var(--dark-green);
    }
  }
`;

export const SliderHolder = styled.div`
  width: 280px;
  margin: 0 auto 25px;

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin: 0 0 20px;
  }
  @media (min-width: 1500px) {
    margin: 0 0 35px;
  }

  .img-slider-wrap {
    width: 160px;
    overflow: hidden;
    margin: 0 auto 20px;
    border-radius: 30px;
    background-size: cover;
    background-position: center;

    @media (min-width: 768px) {
      margin: 0;
      width: 300px;
      height: auto;
      border-radius: 25px;
    }
    @media (min-width: 992px) {
      width: 300px;
    }
    @media (min-width: 1500px) {
      width: 300px;
      border-radius: 50px;
    }
  }

  .img-slider {
    width: 100%;
    margin: 0 auto;
    position: relative;
    left: 4px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media (min-width: 768px) {
      left: 0;
    }
  }

  .text-slider-wrap {
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 335px;
      margin: 0;
    }
    @media (min-width: 992px) {
      width: 315px;
    }
    @media (min-width: 1200px) {
      width: 370px;
      font-size: 16px;
    }
    @media (min-width: 1500px) {
      font-size: 18px;
    }
  }

  .text-slider {
    width: 100%;
    font-weight: 600;
    color: rgba(33, 35, 56, 0.26);
    letter-spacing: -0.01em;
    text-align: center;
    color: #212338;

    @media (min-width: 768px) {
      text-align: left;
      color: rgba(33, 35, 56, 0.26);
      padding: 0;
    }

    .slick-list {
      margin: 0 0 30px;

      @media (min-width: 768px) {
        margin: 0;
      }
    }

    .slick-slide {
      @media (min-width: 768px) {
        width: 100% !important;
        padding: 6px 0 6px 30px;
        cursor: pointer;
      }
      @media (min-width: 1200px) {
        padding: 8px 0 8px 30px;
        cursor: pointer;
      }
      @media (min-width: 1500px) {
        width: 100% !important;
        padding: 20px 0 20px 30px;
        cursor: pointer;
      }

      &.slick-current {
        @media (min-width: 768px) {
          color: #212338;

          .box:before {
            top: 2px;
            left: -30px;
            width: 24px;
            height: 40px;
            border: 6px solid #212338;
            background: #fff;
          }
        }
      }
    }

    .box {
      @media (min-width: 768px) {
        display: block;
        position: relative;
        margin-bottom: 3px;

        &:before {
          content: "";
          position: absolute;
          top: 7px;
          left: -24px;
          width: 11px;
          height: 13px;
          border-radius: 15px;
          background: #212338;
          display: none;
          @media (min-width: 768px) {
            display: block;
          }
        }
      }
    }
  }

  .slick-dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -120px;
    list-style: none;
    margin: 20px 0 0;
    padding: 0;
    display: flex !important;
    align-items: center;
    justify-content: center;
    font-size: 0;
    line-height: 0;
    gap: 8px;

    @media (min-width: 768px) {
      /* display: none !important; */
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
      width: 60px;
      height: 4px;
      background: rgba(217, 217, 217, 0.8);
      border-radius: 5px;

      @media (min-width: 992px) {
        weight: 100px;
      }
    }
  }
`;
