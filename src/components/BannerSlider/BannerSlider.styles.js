import styled from "styled-components";

export const SliderBanner = styled.div`
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
  }

  .benner-header {
    overflow: hidden;
    font-size: 16px;
    line-height: 22px;
    max-width: 800px;
    margin: 0 auto 25px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 25px;
    }
    @media (min-width: 992px) {
      margin: 0 auto 35px;
    }
  }

  .banner-slider {
    position: relative;
    margin: 0 auto 20px;
    padding: 0 15px;

    @media (min-width: 768px) {
      max-width: 650px;
    }
    @media (min-width: 992px) {
      max-width: 750px;
      padding: 0;
      margin: 0 auto 30px;
    }
    @media (min-width: 1200px) {
      max-width: 950px;
    }
    @media (min-width: 1750px) {
      max-width: 1050px;
    }

    .img-box {
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }
  }

  .btn-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
