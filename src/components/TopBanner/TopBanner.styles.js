import styled from "styled-components";

export const PageBanner = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  padding: 25px 0;
  width: 100%;
  min-height: 240px;
  color: var(--white);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    min-height: 380px;
    padding: 25px 0;
  }
  @media (min-width: 992px) {
    padding: 70px 0;
  }
  @media (min-width: 1200px) {
    min-height: 500px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -50px;
    height: 220px;
    background: rgba(0, 0, 0, 0.4);
    transform: skewY(2deg);

    @media (min-width: 768px) {
      height: 280px;
    }
    @media (min-width: 992px) {
      height: 325px;
    }
    @media (min-width: 1200px) {
      height: 375px;
    }
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
      max-width: 930px;
    }
  }

  .input-box {
    max-width: 600px;
    position: relative;

    @media (min-width: 992px) {
      max-width: 700px;
    }

    .ico-search {
      position: absolute;
      top: 11px;
      left: 12px;
      font-size: 18px;
      line-height: 1;
      color: #1c1c1e;

      @media (min-width: 768px) {
        top: 14px;
        left: 16px;
        font-size: 22px;
      }
    }
  }

  .search {
    width: 100%;
    height: 40px;
    font-size: 12px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.6);
    padding: 10px 20px 10px 40px;
    border: 0;
    outline: none;
    box-shadow: none;
    border-radius: 40px;
    background: var(--white);

    @media (min-width: 768px) {
      height: 50px;
      font-size: 16px;
      line-height: 20px;
      padding: 13px 20px 13px 50px;
      background: rgba(255, 255, 255, 0.75);
    }
  }
`;

export const TextHolder = styled.div`
  width: 600px;
  margin: 0 0 20px;
  padding: 0 0 0 12px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 300;
  position: relative;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 28px;
    padding: 0 0 0 25px;
    margin: 0 0 25px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    border-radius: 10px;
    background: #a0d800;

    @media (min-width: 768px) {
      width: 3px;
    }
  }

  h1 {
    margin: 0 0 5px;
    text-align: left;
    color: var(--white);

    @media (min-width: 768px) {
      margin: 0 0 18px;
    }
  }
`;
