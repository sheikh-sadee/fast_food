import styled, { css } from "styled-components";

export const BtnHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  ${({ btnGreen }) =>
    btnGreen &&
    css`
      .btn-appStore {
        color: var(--white);
        background: var(--primary);

        img {
          filter: brightness(0) invert(1);
        }
      }
    `}

  ${({ footerBtn }) =>
    footerBtn &&
    css`
      margin: 50px 0;
    `}

  ${({ alignLeft }) =>
    alignLeft &&
    css`
      @media (min-width: 768px) {
        justify-content: flex-start;
      }
    `}

  a {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: left;
    position: relative;
    padding: 14px 10px 14px 50px;
    font-size: var(--font-size-xs);

    @media (max-width: 767px) {
      padding: 10px 10px 10px 42px;
    }

    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 20px;
      max-width: 100%;

      @media (max-width: 767px) {
        left: 14px;
      }
    }
  }

  .text {
    display: block;
    font-size: var(--font-size-tiny);
    line-height: 1;
  }
`;
