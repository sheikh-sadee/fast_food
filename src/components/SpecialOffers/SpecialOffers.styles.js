import styled, { css } from "styled-components";

export const OffersSection = styled.div`
  position: relative;
  padding: 25px 0;

  @media (min-width: 1200px) {
    padding: 50px 0;
  }

  ${({ mobileHide }) =>
    mobileHide &&
    css`
      @media (max-width: 767px) {
        display: none;
      }
    `}

  .header {
    padding: 0 50px;
  }

  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .offer-slider {
    position: relative;
    width: 100%;

    .slick-slide {
      padding: 0 10px;
    }
  }
`;
