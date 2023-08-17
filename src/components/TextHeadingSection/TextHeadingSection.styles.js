import styled from "styled-components";

export const TextBlock = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 22px;
  padding: 30px 0 40px;

  color: ${({ color }) => {
    if (color) {
      return color;
    }
    return "var(--white)";
  }};

  background: ${({ bgColor }) => {
    if (bgColor) {
      return bgColor;
    }
    return "var(--primary)";
  }};

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
  @media (min-width: 992px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
    padding: 60px 0 80px;
  }

  .holder {
    max-width: 880px;
    margin: 0 auto;
    padding: 0 25px;
    position: relative;

    @media (min-width: 768px) {
      padding: 0 15px;
    }
  }

  .head {
    width: 100%;
    margin: 0 0 20px;
    overflow: hidden;
    text-align: center;

    @media (min-width: 768px) {
      margin: 0 0 35px;
    }
  }

  h1 {
    margin: 0;
    color: var(--white);
  }

  .btn-back {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin: 0;
    color: #31bc7b;
  }

  .heading {
    display: block;
    font-size: 30px;
    line-height: 36px;
  }

  h1 {
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
`;
