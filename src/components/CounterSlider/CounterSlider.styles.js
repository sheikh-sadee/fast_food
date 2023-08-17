import styled from "styled-components";

export const CounterSliderBlock = styled.div`
  width: 100%;
  padding: 25px 0;
  position: relative;
  background: url("images/clip-path-img.svg") no-repeat;
  background-size: cover;

  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .container {
    max-width: 320px;
    margin: 0 auto;

    @media (min-width: 768px) {
      max-width: 680px;
    }
    @media (min-width: 1200px) {
      max-width: 800px;
    }
  }

  .slider {
    width: 100%;

    .wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      @media (min-width: 992px) {
        gap: 30px;
      }
      @media (min-width: 1200px) {
        gap: 45px;
      }
    }

    .img-box {
      width: 100px;
      flex-shrink: 0;

      @media (min-width: 768px) {
        width: 150px;
      }
      @media (min-width: 1200px) {
        width: 220px;
      }

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }

    .text-box {
      position: relative;
      width: 150px;

      @media (min-width: 768px) {
        width: auto;
      }
    }

    .title {
      display: inline-block;
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      position: relative;

      @media (min-width: 768px) {
        font-size: 40px;
        line-height: 48px;
      }
      @media (min-width: 1200px) {
        font-size: 48px;
        line-height: 58px;
      }
    }
  }
`;
