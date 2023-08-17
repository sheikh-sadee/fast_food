import styled from "styled-components";
// import BgImg from "../../assets/images/bg-img03.png";

export const ReviewSection = styled.div`
  position: relative;
  text-align: center;
  color: var(--white);
  padding: 25px 0 50px;

  @media (min-width: 768px) {
    padding: 50px 15px;
  }
  @media (min-width: 992px) {
    padding: 50px 15px 75px;
  }

  .container {
    @media (max-width: 767px) {
      padding: 0;
    }
  }

  h2 {
    color: var(--white);
    font-weight: 600;
    margin-bottom: 20px;
    padding: 0 20px;

    @media (min-width: 768px) {
      margin-bottom: 20px;
      padding: 0;
    }
    @media (min-width: 1500px) {
      margin-bottom: 35px;
    }

    span {
      color: #a0d800;
    }
  }
`;

export const Holder = styled.div`
  width: 100%;
  padding: 35px 0;
  min-height: 440px;
  background: url("images/bg-img03.png") no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    padding: 55px 0;
    border-radius: 50px;
    min-height: 600px;
  }
  @media (min-width: 992px) {
    padding: 30px 0;
    min-height: 540px;
  }
  @media (min-width: 1500px) {
    padding: 85px 0;
    min-height: 674px;
  }
`;

export const SliderWrap = styled.div`
  position: relative;
  overflow: hidden;

  .review-slider {
    position: relative;
    padding: 8px 0;
    .slick-list,
    .slick-track,
    &.slick-initialized .slick-slide,
    .slick-slide > div,
    .slick-slide .slide {
      display: flex !important;
    }
    .slick-slide {
      padding: 0 8px;
    }
  }
`;
