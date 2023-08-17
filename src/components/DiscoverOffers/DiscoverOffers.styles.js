import styled from "styled-components";
// import BgImg from "../../assets/images/bg-img03.png";

export const DiscoverSection = styled.div`
  position: relative;
  text-align: center;
  padding: 25px 0;

  @media (min-width: 768px) {
    padding: 30px 0;
  }
  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .section-header {
    max-width: 700px;
    text-align: center;
    margin: 0 auto;

    @media (min-width: 768px) {
      margin: 0 auto 25px;
    }
  }

  h2 {
    font-weight: 600;
    margin-bottom: 20px;
    padding: 0 20px;

    span {
      color: #a0d800;
    }
  }
`;

export const Holder = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const SliderWrap = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 0 20px;

  @media (min-width: 768px) {
    margin: 0;
  }

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
      padding: 0 4px;

      @media (min-width: 768px) {
        padding: 0 8px;
      }
    }
  }
`;
