import styled from "styled-components";

export const NewLookBlock = styled.div`
  position: relative;
  padding: 25px 0;
  background: url("images/clip-path-img.svg") no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

export const ImgHolder = styled.div`
  max-width: 330px;
  margin: 0 auto;
  position: relative;

  @media (min-width: 768px) {
    max-width: 600px;
  }
  @media (min-width: 1200px) {
    max-width: 630px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const ContentHolder = styled.div`
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    bottom: 163px;
  }
  @media (min-width: 992px) {
    bottom: 180px;
  }

  .title {
    width: 206px;
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    text-align: center;
    display: block;
    color: #212338;
    margin: 0 auto 8px;

    @media (min-width: 768px) {
      width: auto;
      font-size: 28px;
      line-height: 32px;
      margin: 0 0 25px;
    }
  }
`;

export const BtnHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 10px;
  }

  a {
    min-width: 150px;
    text-align: center;
    font-size: 14px;
    line-height: 17px;
    position: relative;
    padding: 18px 15px;

    @media (max-width: 767px) {
      min-width: 86px;
      font-size: 10px;
      line-height: 13px;
      padding: 12px 15px;
    }
  }

  .text {
    display: block;
    font-size: var(--font-size-tiny);
    line-height: 1;
  }
`;
