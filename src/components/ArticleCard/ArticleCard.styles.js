import styled from "styled-components";

export const ImgHolder = styled.div`
  height: 300px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
    border-radius: 13px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ArticleWidget = styled.div`
  display: flex;
  width: 100%;
  a {
    border-radius: 0;
    position: relative;
    transition: background 0.3s linear, box-shadow 0.3s linear;
    display: block;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;

    @media (min-width: 768px) {
      border-radius: 20px;
      border: 1px solid #e9e9eb;
    }

    &:hover {
      background: var(--white);
      box-shadow: 9.94px 127.563px 165.667px rgba(19, 20, 22, 0.08);
    }

    .dark-bg & {
      color: #fff;
      background: none;

      @media (min-width: 768px) {
        color: var(--black);
        background: var(--white);
      }
    }
  }
`;

export const ArticleTag = styled.span`
  padding: 8px 10px;
  display: block;
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 600;
  color: var(--black);
  text-align: center;
  background: var(--primary);
  max-width: 136px;
  border-radius: 60px;

  background-color: ${({ bgcolor }) => {
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
`;

export const TitleHolder = styled.div`
  background: linear-gradient(180deg, rgba(25, 56, 58, 0) 0%, #19383a 100%);
  backdrop-filter: blur(12.5px);
  padding: 22px 20px;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 22px 32px;
    text-align: left;
  }
`;

export const ArticleTitle = styled.span`
  color: var(--white);
  font-weight: 600;

  .dark-bg & {
    color: var(--white);

    @media (min-width: 768px) {
      color: var(--black);
    }
  }
`;
