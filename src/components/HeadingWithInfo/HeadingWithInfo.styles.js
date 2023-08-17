import styled, { css } from "styled-components";

export const HeadingHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 25px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
  @media (min-width: 1500px) {
    margin-bottom: 50px;
  }

  h2 {
    margin: 0;
  }

  p {
    &.descriptionHolder {
      font-size: var(--font-size-xs);
      line-height: calc(var(--font-size-xs) + 3px);
      font-weight: 600;
      max-width: 284px;
      position: relative;

      @media (min-width: 768px) {
        padding-left: 16px;
      }

      &:before {
        content: "";
        background: var(--brand-color);
        width: 2px;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        border-radius: 33px;
        display: none;
        @media (min-width: 768px) {
          display: block;
        }
      }
    }
    &.hidemobile {
      @media (max-width: 767px) {
        display: none;
      }
    }
  }
  ${({ hidePara }) =>
    hidePara &&
    css`
      p {
        display: none;
      }
    `}
`;
