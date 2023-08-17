import styled from "styled-components";

export const OfferCol = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  overflow: hidden;
  border-radius: 24px;

  @media (min-width: 768px) {
    border-radius: 50px;
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 180px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 768px) {
    height: 300px;
  }
  @media (min-width: 992px) {
    height: 358px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const TextBox = styled.div`
  position: relative;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: -0.02em;
  padding: 15px 15px 25px;
  text-align: center;
  z-index: 2;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 25px;
    padding: 20px 15px 50px;
  }

  &:before {
    position: absolute;
    top: -42px;
    left: 0;
    right: 0;
    content: "";
    width: 100%;
    height: 200%;
    clip-path: circle(60% at 50% +50%);
    z-index: -1;

    @media (min-width: 768px) {
      top: -76px;
      height: 230%;
    }

    background: ${({ bgcolor }) => {
      if (bgcolor) {
        return bgcolor;
      }
      return "#19383A";
    }};
  }

  background: ${({ bgcolor }) => {
    if (bgcolor) {
      return bgcolor;
    }
    return "#19383A";
  }};

  color: ${({ color }) => {
    if (color) {
      return color;
    }
    return "#fff";
  }};

  .icon {
    width: 100%;
    font-size: 30px;
    line-height: 1;
    margin: 0 0 15px;

    @media (min-width: 768px) {
      font-size: 40px;
      margin: 0 0 25px;
    }
  }

  .title {
    display: block;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 30px;
    }
  }

  p {
    letter-spacing: -0.02em;
    color: ${({ color }) => {
      if (color) {
        return `${color} !important`;
      }
      return "#fff !important";
    }};
  }
`;
