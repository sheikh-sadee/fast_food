import styled from "styled-components";

export const CareerSection = styled.div`
  width: 100%;
  padding: 30px 0;
  position: relative;
  background: url("images/clip-path-img.svg") no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 85px);
    background-size: cover;
    padding: 25px 0;
  }

  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .text-holder {
    max-width: 100%;
    padding: 0 10px;
    margin: 0 0 20px;
    font-size: 16px;
    line-height: 22px;
    text-align: center;

    @media (min-width: 768px) {
      max-width: 560px;
      padding: 0 60px;
      margin: 0 0 20px;
      font-size: 18px;
      line-height: 25px;
      text-align: left;
    }
    @media (min-width: 992px) {
      max-width: 700px;
      padding: 0 100px;
      margin: 0 0 30px;
      font-size: 24px;
      line-height: 30px;
    }
    @media (min-width: 1200px) {
      max-width: 760px;
      padding: 0 100px;
      margin: 0 0 60px;
      font-size: 32px;
      line-height: 36px;
    }
  }

  h1 {
    position: relative;
    font-size: 28px;
    line-height: 34px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 10px;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 48px;
      margin: 0 0 30px;
      padding: 0 0 0 20px;
    }
    @media (min-width: 992px) {
      font-size: 50px;
      line-height: 58px;
      padding: 0 0 0 30px;
    }
    @media (min-width: 1200px) {
      font-size: 60px;
      line-height: 68px;
    }

    &::before {
      display: none;
      content: "";
      width: 4px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border-radius: 10px;
      background: #a0d800;

      @media (min-width: 768px) {
        display: block;
      }
    }
  }

  .info-block {
    max-width: 850px;
    font-size: 16px;
    line-height: 24px;
    padding: 20px;
    margin: 0 auto;
    border-radius: 40px;
    text-align: center;
    background: #f6f6f6;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      padding: 35px;
      text-align: left;
    }
    @media (min-width: 992px) {
      max-width: 850px;
      font-size: 18px;
      line-height: 26px;
      padding: 45px;
    }
    @media (min-width: 1200px) {
      max-width: 100%;
      font-size: 22px;
      line-height: 28px;
      border-radius: 60px;
      padding: 60px;
      margin: 0;
    }

    .img-box {
      width: 294px;
      margin: 0 auto 12px;
      flex-shrink: 0;
      border-radius: 50px;
      overflow: hidden;

      @media (min-width: 768px) {
        width: 220px;
        margin: 0;
      }
      @media (min-width: 992px) {
        width: 250px;
      }
      @media (min-width: 1200px) {
        width: 280px;
      }

      img {
        display: block;
        width: 100%;
      }
    }

    .text-box {
      flex-grow: 1;

      @media (min-width: 768px) {
        padding: 0 0 0 35px;
      }
      @media (min-width: 992px) {
        padding: 0 20px 0 45px;
      }
    }
  }
`;

export const ContentWrap = styled.div`
  position: relative;
`;

export const ImgHolder = styled.div`
  max-width: 250px;
  margin: 0 auto 20px;

  @media (min-width: 768px) {
    max-width: 340px;
    margin: 0 auto 10px;
  }
  @media (min-width: 1200px) {
    max-width: 380px;
  }
  @media (min-width: 1500px) {
    max-width: 500px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
`;
