import styled, { css } from "styled-components";

export const SignUpBanner = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  color: var(--white);
  background: var(--primary);

  @media (min-width: 768px) {
    margin: 0 0 25px;
  }
  @media (min-width: 992px) {
    min-height: 500px;
    margin: 0 0 50px;
  }
  @media (min-width: 1400px) {
    min-height: 700px;
  }

  .btn-down {
    display: none;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    border: 0;
    outline: none;
    border-radius: 15px;
    box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.2);

    @media (min-width: 992px) {
      display: flex;
    }
  }
`;

export const TextBox = styled.div`
  display: block;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ImgHolder = styled.div`
  display: none;
  width: 50%;
  min-height: 100%;

  @media (min-width: 992px) {
    display: block;
  }

  .bg-img {
    width: 100%;
    min-height: 100%;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  ${({ bgImgCenter }) =>
    bgImgCenter &&
    css`
      .bg-img {
        background-position: center;
      }
    `}
`;

export const TextHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  padding: 30px 25px;
  position: relative;

  @media (min-width: 768px) {
    padding: 40px;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    padding: 80px;
  }

  .title {
    display: none;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 2.158px;
    text-transform: uppercase;
    margin: 0 0 15px;

    @media (min-width: 768px) {
      display: block;
    }

    @media (min-width: 1200px) {
      font-size: 21px;
      line-height: 26px;
    }
  }

  h1 {
    color: var(--white);
    margin: 0 0 15px;
    text-align: left;

    @media (max-width: 767px) {
      font-size: 30px;
    }
  }

  .list {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    font-weight: 400;

    @media (min-width: 768px) {
      display: block;
    }

    li {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 12px 0;

      @media (min-width: 1200px) {
        padding: 18px 0;
      }
    }

    .ico-box {
      flex-shrink: 0;
      width: 28px;

      img {
        margin: 0 auto;
      }
    }
    .text {
      flex-grow: 1;
    }
  }
`;
