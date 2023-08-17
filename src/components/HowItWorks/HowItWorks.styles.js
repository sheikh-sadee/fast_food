import styled, { css } from "styled-components";

export const HowItWorksSection = styled.div`
  padding: 25px 0;

  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .container {
    max-width: 1060px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .slide-holder {
  }
  .slick-slider {
    margin-bottom: 33px;
    padding: 0;
    overflow: hidden;
    .slick-dots {
    list-style: none;
    margin: 0;
    padding: 20px 0 0;
    display: flex !important;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 0;
    line-height: 0;

    li {
      margin: 0;

      &.slick-active {
        button {
          background: #19383a;
        }
      }
    }

    button {
      display: block;
      width: 13px;
      height: 13px;
      padding: 0;
      border-radius: 10px;
      border: 0;
      outline: none;
      box-shadow: none;
      background: #d9d9d9;
    }
  }
  }
  .slick-list {
    overflow: visible;
    display: flex !important;
  }
  .slick-track {
    display: flex !important;
    &:before,
    &:after {
      display: none;
    }
  }
  .slick-initialized .slick-slide {
    display: flex !important;
  }
  .slick-slide {
    margin: 0 12px;

    > div {
      display: flex;
    }
  }
  .center-btn {
    margin: 0 auto;
    display: block;
  }
  article {
    display: flex;
    > a {
      display: flex;
      flex-direction: column;
    }
  }
`;
export const Heading = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 0 30px;

  h2 {
    display: block;
  }
`;
export const sectionContainer = css`
  padding-bottom: 20px;

  @media (min-width: 768px) {
    padding-bottom: 100px;
  }
`;
