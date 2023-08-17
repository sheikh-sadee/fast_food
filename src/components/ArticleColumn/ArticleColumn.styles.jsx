import styled from "styled-components";

export const ArticleBox = styled.div`
  max-width: 400px;
  position: relative;
  padding: 10px 10px;
  margin: 0 auto 20px;
  text-align: center;

  @media (min-width: 768px) {
    width: 45%;
    max-width: inherit;
    margin: 0 0 10px;
  }
  @media (min-width: 992px) {
    width: 30%;
    margin: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ImgBox = styled.div`
  width: 250px;
  margin: 0 auto 20px;

  @media (min-width: 1200px) {
    width: 300px;
  }
`;

export const TextBox = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 20px;

  .title {
    display: block;
    font-size: 22px;
    line-height: 26px;
    font-weight: 700;
    margin: 0 0 10px;
  }
`;
