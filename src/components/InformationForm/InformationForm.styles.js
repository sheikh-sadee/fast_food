import styled from "styled-components";

export const ApplyForm = styled.div`
  position: relative;
  overflow: hidden;
  padding: 25px 0;

  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .container {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .btn-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

export const FeildHolder = styled.div`
  width: 100%;
  padding: 0 0 10px;
  margin: 0 0 20px;
  border-bottom: 2px solid #f8f8f8;

  @media (min-width: 768px) {
    padding: 0 0 20px;
    margin: 0 0 30px;
  }
  @media (min-width: 992px) {
    margin: 0 0 50px;
    padding: 0 50px 30px;
  }
  @media (min-width: 1200px) {
    padding: 0 100px 30px;
  }

  .header {
    width: 100%;
    margin: 0 0 25px;
    text-align: center;

    @media (min-width: 768px) {
      margin: 0 0 35px;
    }
  }

  .heading {
    display: block;
    font-size: 26px;
    line-height: 30px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 10px;

    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 35px;
    }
  }
`;
export const ImageHolder = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  text-align: center;
  overflow: hidden;
  padding: 25px 0;
  width: 100%;
  color: var(--white);
  background-position: center;
  background-repeat: no-repeat;
  height: 250px;
  background-size:cover;

  @media (min-width: 768px) {
    padding: 50px 0;
    height: 350px;
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