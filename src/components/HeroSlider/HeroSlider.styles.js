import styled from "styled-components";

export const HeroBanner = styled.div`
  position: relative;
  padding: 25px 0;
  text-align: center;
  background: url("images/clip-path-img.svg") no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    padding: 30px 0;
    text-align: left;
  }
  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .hero-container {
    max-width: 1150px;
    padding: 0 15px;
    margin: 0 auto;

    @media (min-width: 1400px) {
      max-width: 1230px;
    }
  }

  .hero-slider {
    position: relative;

    .slick-dots {
      list-style: none;
      margin: 20px 0 0;
      padding: 0;
      display: flex !important;
      align-items: center;
      justify-content: center;
      font-size: 0;
      line-height: 0;
      gap: 8px;

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

    .slide-content {
      gap: 10px;

      @media (min-width: 768px) {
        display: flex;
        gap: 30px;
        justify-content: space-between;
        flex-direction: row-reverse;
      }
    }
    .img-box {
      max-width: 1000px;
      margin: 0 auto 25px;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
`;
