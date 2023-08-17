import styled from "styled-components";

export const PostDetail = styled.div`
  width: 100%;
  padding: 0 0 25px;

  .container {
    max-width: 1010px;
    padding: 0 15px;
    margin: 0 auto;
  }

  .post-body {
    padding: 25px 0;
    width: 100%;

    @media (min-width: 768px) {
      padding: 50px 0 25px;
    }

    p {
      margin: 0 0 20px;

      &:last-child {
        margin-bottom: 20px;
      }
    }
  }

  .post-content {
    max-width: 840px;
    margin: 0 auto;
    padding: 0 15px;
    font-size: 14px;
    line-height: 20px;

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 26px;
      padding: 0;
    }
  }

  .img-wrap {
    max-width: 927px;
    margin: 0 -15px 20px;

    @media (min-width: 576px) {
      margin: 0 auto 30px;
    }
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .flex-holder {
    padding: 15px 0;

    @media (min-width: 768px) {
      display: flex;
      gap: 50px;
    }
  }

  .widget-bar {
    display: none;
    flex-shrink: 0;
    width: 265px;

    @media (min-width: 768px) {
      display: block;
    }

    .heading {
      display: block;
      font-size: 20px;
      line-height: 23px;
      font-weight: 600;
      text-transform: capitalize;
      margin: 0 0 15px;
    }
  }

  .post-box {
    width: 100%;
    font-size: 14px;
    line-height: 20px;

    .img-box {
      width: 100%;
      overflow: hidden;
      margin: 0 0 20px;
      border-radius: 30px;

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }

    .title {
      display: block;
      font-size: 20px;
      line-height: 23px;
      font-weight: 600;
      text-transform: capitalize;
      margin: 0 0 5px;
    }
  }

  .quote-holder {
    width: 100%;
    margin: 0 0 20px;

    blockquote {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
      font-style: italic;
      padding: 0;
      margin: 0;
      position: relative;

      @media (min-width: 768px) {
        display: flex;
        align-items: flex-start;
        gap: 30px;
        font-size: 26px;
        line-height: 32px;
        padding: 0 0 0 20px;
      }

      .quote-img {
        width: 35px;
        height: auto;
        position: absolute;
        top: -10px;
        left: -14px;
        z-index: -1;

        @media (min-width: 768px) {
          top: -18px;
          left: 0;
          width: 70px;
        }
      }

      q {
        display: block;
        quotes: none;
        max-width: 520px;
        margin: 0 0 15px;

        @media (min-width: 768px) {
          margin: 0;
        }
      }

      cite {
        flex-shrink: 0;
        width: 100%;
        font-style: normal;
        text-align: center;

        @media (min-width: 768px) {
          width: 170px;
          text-align: left;
        }

        .img-box {
          width: 60px;
          height: 60px;
          border-radius: 100px;
          margin: 0 auto 13px;

          @media (min-width: 768px) {
            margin: 0 0 13px;
          }

          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }

        .name {
          display: block;
          font-size: 18px;
          line-height: 22px;
          text-transform: capitalize;
          margin: 0 0 2px;
        }

        .designation {
          display: block;
          font-size: 14px;
          line-height: 20px;
          color: #75808a;
        }
      }
    }
  }

  .tags-list {
    list-style: none;
    margin: 0;
    padding: 10px 0 0;
    display: flex;
    flex-flow: wrap;
    gap: 10px;

    @media (min-width: 768px) {
      gap: 20px;
    }

    li {
      margin: 0;
    }
  }
`;

export const PostBanner = styled.div`
  position: relative;
  color: var(--white);
  background-color: var(--primary);

  @media (min-width: 768px) {
    display: flex;
    min-height: calc(100vh - 80px);
  }

  .img-box {
    width: 100%;
    min-height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 576px) {
      min-height: 390px;
    }
    @media (min-width: 768px) {
      width: 45%;
      min-height: 100%;
    }
  }

  .text-box {
    width: 100%;
    padding: 25px;
    font-size: 13px;
    line-height: 19px;
    font-weight: 400;
    position: relative;

    &::before {
      display: block;
      content: "";
      position: absolute;
      top: -100px;
      left: 0;
      right: 0;
      height: 100px;
      background: linear-gradient(
        180deg,
        rgba(25, 56, 58, 0) 0%,
        rgba(25, 56, 58, 0.42) 48.44%,
        #19383a 100%
      );

      @media (min-width: 768px) {
        display: none;
      }
    }

    @media (min-width: 576px) {
      font-size: 16px;
      line-height: 22px;
    }
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 55%;
      min-height: 100%;
      padding: 25px;
    }
    @media (min-width: 992px) {
      font-size: 18px;
      line-height: 26px;
      padding: 50px;
    }

    .holder {
      max-width: 590px;
    }

    h1 {
      color: var(--white);

      @media (max-width: 767px) {
        font-size: 24px;
        line-height: 30px;
        font-weight: 600;
        text-align: left;
      }
    }
  }

  .info-list {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    text-transform: capitalize;

    @media (min-width: 992px) {
      gap: 30px;
    }

    li {
      margin: 0;
    }

    .text {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;
