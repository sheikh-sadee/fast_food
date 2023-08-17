import styled from "styled-components";

export const LatestArticlesSection = styled.div`
  padding: 25px 0;

  @media (min-width: 768px) {
    padding: 50px 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .slide-holder {
    /* margin: 0 -105px -267px; */
  }
  .slick-slider {
    margin-bottom: 33px;
    /* padding: 0 105px 267px; */
    overflow: hidden;
  }
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
      width: 7px;
      height: 7px;
      padding: 0;
      border-radius: 10px;
      border: 0;
      outline: none;
      box-shadow: none;
      background: #d9d9d9;
    }
  }
  .slick-list {
    overflow: visible;
    /* margin: 0 -6px; */
    display: flex !important;
    /* padding-right: 60px; */

    /* @media (min-width: 768px) {
      margin: 0 -12px;
    } */
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
    padding: 0 6px;

    @media (min-width: 768px) {
      padding: 0 12px;
    }

    > div {
      display: flex;
      width: 100%;
    }
  }
  .center-btn {
    margin: 0 auto;
    display: block;
  }
  article {
    display: flex;
    width: 100%;
    > a {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ArticleHeader = styled.div`
  max-width: 1050px;
  margin: 0 auto 20px;

  @media (max-width: 767px) {
    text-align: center;
  }

  h2 {
    margin: 0;
    text-transform: capitalize;
  }

  .view-all {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    line-height: 17px;
    color: #31bc7b;

    @media (min-width: 768px) {
      display: none;
    }
  }
`;
