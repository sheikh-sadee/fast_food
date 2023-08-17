import styled from "styled-components";

export const VisualSec = styled.div`
  width: 100%;
  padding: 25px 0;
  text-align: center;
  position: relative;
  background: url("images/clip-path-img.svg") no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    height: 100vh;

    .container {
      height: 100%;
    }
  }
  @media (min-width: 992px) {
    padding: 40px 0;
  }

  .container {
    max-width: 1030px;
    margin: 0 auto;
    padding: 0 15px;

    @media (min-width: 992px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  h1 {
    display: inline-block;
    font-weight: 600;
    position: relative;
    margin: 0 0 15px;

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
  }

  .img-slider {
    /* max-width: calc(100% - 100px); */
    max-width: calc(100vh - 270px);
    margin: 0 auto;
    padding: 0 10px;

    @media (min-width: 992px) {
      padding: 0;
    }

    /* @media (max-width: 1800px) {
      max-width: 520px;
    }
    @media (max-width: 1024px) {
      max-width: 490px;
    } */
  }
`;

export const DescSection = styled.div`
  position: relative;
  text-align: center;

  @media (min-width: 992px) {
    margin: 0 0 30px;
  }

  .description {
    max-width: 600px;
    margin: 0 auto 20px;

    @media (min-width: 768px) {
      margin: 0 auto 30px;
    }
  }
`;

export const BtnHolder = styled.div`
  gap: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;
