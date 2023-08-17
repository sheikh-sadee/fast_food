import styled from "styled-components";

export const FavBanner = styled.div`
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

  .fav-container {
    max-width: 1150px;
    padding: 0 15px;
    margin: 0 auto;

    @media (min-width: 1400px) {
      max-width: 840px;
    }
  }

  .fav-slider {
    position: relative;
    max-width: 500px;
    margin: 0 auto;

    @media (min-width: 768px) {
      max-width: inherit;
      margin: 0;
    }

    .slick-dots {
      list-style: none;
      margin: 20px 0 0;
      padding: 0;
      display: none !important;
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
        align-items: center;
        justify-content: center;
        gap: 40px;
      }
      @media (min-width: 992px) {
        gap: 70px;
      }
    }

    .text-box {
      font-size: 16px;
      line-height: 24px;

      @media (min-width: 768px) {
        max-width: 400px;
      }
      @media (min-width: 992px) {
        max-width: 450px;
        font-size: 20px;
        line-height: 28px;
        margin: 0;
      }
      @media (min-width: 1200px) {
        font-size: 24px;
        line-height: 33px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    .subtitle {
      display: block;
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin: 0 0 10px;

      @media (min-width: 768px) {
        font-size: 18px;
        line-height: 22px;
        margin: 0 0 15px;
      }
    }

    h2 {
      text-transform: capitalize;
    }

    .img-box {
      display: none;
      max-width: 200px;
      margin: 0 auto 25px;

      @media (min-width: 768px) {
        display: block;
        max-width: 430px;
        margin: 0;
      }
      @media (min-width: 1200px) {
        max-width: 650px;
      }

      &.desktop-hide {
        display: block;

        @media (min-width: 768px) {
          display: none;
        }

        img {
          margin: 0 auto;
        }
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }
  }
`;
