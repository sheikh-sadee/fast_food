import styled from "styled-components";

export const AppPhone = styled.div`
  /* background: url(../../images/bg-img01.png) no-repeat;
  background-size: cover; */
  position: relative;
  padding: 25px 0;

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
  bottom: 98px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    bottom: 163px;
  }
  @media (min-width: 992px) {
    bottom: 170px;
  }

  .title {
    width: 206px;
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    text-align: center;
    display: block;
    color: #212338;
    margin: 0 auto 8px;

    @media (min-width: 768px) {
      width: auto;
      font-size: 34px;
      line-height: 40px;
      margin: 0 0 20px;
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: left;
    font-size: 14px;
    line-height: 17px;
    position: relative;
    padding: 18px 20px 18px 48px;

    @media (max-width: 767px) {
      min-width: 86px;
      font-size: 10px;
      line-height: 13px;
      padding: 12px 6px 12px 27px;
    }

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 20px;
      max-width: 100%;

      @media (max-width: 767px) {
        left: 10px;
        width:14px;
      }
    }
  }

  .text {
    display: block;
    font-size: var(--font-size-tiny);
    line-height: 1;
  }
`;
