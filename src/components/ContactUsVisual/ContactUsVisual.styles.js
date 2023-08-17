import styled from "styled-components";

export const ContactVisual = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  padding: 20px 0;
  width: 100%;
  min-height: 280px;
  color: var(--white);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    align-items: center;
    min-height: calc(100vh - 85px);
    padding: 50px 0;
  }
  @media (min-width: 992px) {
    padding: 70px 0 40px;
  }

  .container {
    position: relative;
    max-width: 930px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    z-index: 5;

    @media (min-width: 768px) {
      padding: 0 15px;
    }
    @media (min-width: 1200px) {
      max-width: 990px;
    }
    @media (min-width: 1400px) {
      max-width: 1230px;
    }
  }
`;

export const TextHolder = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;

  @media (min-width: 1400px) {
    padding-top: 250px;
  }

  h2 {
    color: var(--white);
    text-align: left;
  }

  .h2 {
    display: none;
    color: var(--white);
    margin: 0 0 30px;

    @media (min-width: 768px) {
      display: block;
    }
  }

  address {
    display: none;
    position: relative;
    max-width: 250px;
    margin: 0;
    padding: 7px 0 7px 20px;
    font-weight: normal;
    font-style: normal;

    @media (min-width: 768px) {
      display: block;
    }

    &::before {
      content: "";
      width: 2px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background: var(--brand-color);
    }
  }
`;
