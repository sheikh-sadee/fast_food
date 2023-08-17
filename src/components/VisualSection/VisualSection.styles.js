import styled from "styled-components";

export const VisualSec = styled.div`
  width: 100%;
  padding: 25px 0 15px;
  text-align: center;
  position: relative;
  background: url("images/clip-path-img.svg") no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    min-height: calc(100vh - 85px);
    display: flex;
    align-items: center;
    background-size: cover;
  }
  @media (min-width: 992px) {
    padding: 50px 0;
  }

  h1 {
    font-weight: 600;
    margin: 0 0 10px;

    @media (min-width: 768px) {
      margin: 0 0 30px;
    }
  }

  button {
    @media (max-width: 767px) {
      width: 168px;
    }
  }
`;

export const TextWrap = styled.div`
  max-width: 500px;
  margin: 0 auto 20px;

  @media (min-width: 768px) {
    overflow: hidden;
    display: flex;
    flex-direction: column-reverse;
  }
  @media (min-width: 992px) {
    max-width: 600px;
  }
  @media (min-width: 1200px) {
    max-width: 580px;
  }
`;

export const BtnHolder = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const AppBtn = styled.div`
  display: none;
  overflow: hidden;
  padding-top: 10px;

  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1500px) {
    padding-top: 20px;
  }
`;

export const ImgHolder = styled.div`
  max-width: 250px;
  margin: 0 auto 20px;

  @media (min-width: 768px) {
    max-width: 340px;
    margin: 0 auto 10px;
  }
  @media (min-width: 1200px) {
    max-width: 380px;
  }
  @media (min-width: 1500px) {
    max-width: 500px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
`;
