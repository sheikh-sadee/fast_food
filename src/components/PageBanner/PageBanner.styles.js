import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  text-align: center;
  overflow: hidden;
  padding: 25px 0;
  width: 100%;
  min-height: calc(100vh - 85px);
  color: var(--white);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    padding: 50px 0;
  }
  @media (min-width: 992px) {
    padding: 70px 0 40px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .container {
    position: relative;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    z-index: 5;

    @media (min-width: 768px) {
      padding: 0 15px;
    }
    @media (min-width: 992px) {
      max-width: 680px;
    }
    @media (min-width: 1440px) {
      max-width: 820px;
    }
  }

  h1 {
    font-size: 28px;
    line-height: 35px;
    margin: 0 0 5px;
    text-align: center;
    color: var(--white);

    @media (min-width: 768px) {
      font-size: 48px;
      line-height: 55px;
    }
    @media (min-width: 992px) {
      font-size: 60px;
      line-height: 70px;
    }
    @media (min-width: 1440px) {
      font-size: 75px;
      line-height: 90px;
    }
    @media (min-width: 768px) {
      margin: 0 0 18px;
    }
  }
`;

export const TextHolder = styled.div`
  max-width: 700px;
  margin: 0 auto 20px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  position: relative;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
    margin: 0 auto 25px;
    font-weight: 300;
  }
  @media (min-width: 992px) {
    font-size: 21px;
    line-height: 28px;
    margin: 0 auto 25px;
  }
  @media (min-width: 1440px) {
    font-size: 25px;
    line-height: 33px;
    margin: 0 auto 25px;
  }
`;
