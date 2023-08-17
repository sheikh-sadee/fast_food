import styled, { css } from "styled-components";

export const TextBlock = styled.div`
  position: relative;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: var(--white);
  background: var(--primary);

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    gap: 10px;
    margin: 0 0 22px;
    padding: 40px;
    color: var(--primary);
    border-radius: 40px;
    transition: all ease-in-out 0.3s;
    background: #f6f6f6;
  }
  @media (min-width: 1200px) {
    padding: 60px;
  }

  &:hover {
    color: var(--white);
    background: var(--primary);

    .text-box {
      color: var(--white);
    }
  }

  ${({ bgDark }) =>
    bgDark &&
    css`
      color: var(--white) !important;
      background: var(--primary) !important;

      .text-box {
        color: var(--white) !important;
      }
    `}

  ${({ mobileHide }) =>
    mobileHide &&
    css`
      @media (max-width: 991px) {
        display: none;
      }
    `}

  /* &:hover {
    @media (min-width: 768px) {
      align-items: center;
      color: var(--white);
      background: var(--primary);

      .subtitle {
        visibility: hidden;
        opacity: 0;
        height: 0;
        transform: translateY(50px);
      }

      .text-box {
        color: var(--white);
      }

      .text,
      .img-box {
        visibility: visible;
        opacity: 1;
        height: auto;
        transform: translateY(0);
      }
    }
  } */

  .text-box {
    max-width: 100%;
    padding: 30px;

    @media (min-width: 768px) {
      color: var(--primary);
      max-width: 430px;
      padding: 0;
    }
    @media (min-width: 992px) {
      max-width: 550px;
    }
    @media (min-width: 1200px) {
      max-width: 650px;
    }
  }

  .title {
    display: block;
    font-size: 24px;
    line-height: 28px;
    font-weight: 800;
    text-transform: capitalize;
    margin: 0 0 15px;

    @media (min-width: 768px) {
      margin: 0 0 20px;
      text-transform: uppercase;
    }
  }

  .subtitle {
    display: none;
    font-size: 20px;
    line-height: 26px;
    font-weight: 300;
    transition: all ease-in-out 0.3s;

    @media (min-width: 768px) {
      display: block;
      display: none;
    }
  }

  .heading {
    display: block;
    font-size: 14px;
    line-height: 22px;
    font-weight: 300;
    transition: all ease-in-out 0.3s;

    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 36px;
    }
    @media (min-width: 1200px) {
      font-size: 38px;
      line-height: 45px;
    }
    @media (min-width: 1440px) {
      font-size: 48px;
      line-height: 54px;
    }
  }

  .text {
    font-size: 14px;
    line-height: 22px;
    font-weight: 300;

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 26px;
      /* height: 0;
      visibility: hidden;
      opacity: 0;
      transition: all ease-in-out 0.3s; */
    }
  }

  .img-box {
    /* height: 0;
    visibility: hidden;
    opacity: 0;
    transition: all ease-in-out 0.3s;
    transform: translateY(50px); */
    flex-shrink: 0;
    width: 200px;
    overflow: hidden;
    border-radius: 100px;

    @media (max-width: 767px) {
      //display: none;
    }
    @media (min-width: 992px) {
      width: 250px;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
      border-radius: 100px;
    }
  }

  .img-box-mobile {
    display: block;

    @media (min-width: 768px) {
      display: none;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
`;
