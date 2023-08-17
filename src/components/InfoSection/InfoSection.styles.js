import styled, { css } from "styled-components";

export const ImgBox = styled.div`
  width: 340px;
  margin: 0 auto 25px;
  text-align: center;

  @media (min-width: 992px) {
    width: 360px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    width: 450px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
`;

export const SectionInfo = styled.div`
  position: relative;
  padding: 25px 0;
  color: #212338;

  @media (min-width: 992px) {
    padding: 50px 0;
  }

  ${({ mobileHide }) =>
    mobileHide &&
    css`
      ${ImgBox} {
        @media (max-width: 575px) {
          display: none;
        }
      }
    `}
`;

export const Holder = styled.div`
  max-width: 560px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 20px;
    max-width: 100%;
    margin: 0;

    ${({ direction }) =>
      direction &&
      css`
        flex-direction: row;
      `}
  }
`;

export const TextBox = styled.div`
  padding: 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    font-size: var(--font-size-lg);
    line-height: calc(var(--font-size-lg) + 5px);
    width: 400px;
  }
  @media (min-width: 992px) {
    width: 490px;
  }
  @media (min-width: 1200px) {
    width: 500px;
  }

  &.titleSm {
    h2 {
      font-size: var(--font-size-3xl);
      line-height: calc(var(--font-size-3xl) + 6px);

      @media (min-width: 768px) {
        font-size: 22px;
        line-height: 24px;
      }
    }
  }

  h2 {
    margin-bottom: 15px;
    text-transform: capitalize;
    padding: 0 20px;

    @media (min-width: 768px) {
      margin-bottom: 20px;
      padding: 0;
    }

    @media (min-width: 992px) {
      padding: 0;
    }
  }

  .text {
    position: relative;
    margin: 0 0 30px;

    @media (min-width: 768px) {
      padding-left: 24px;
      margin: 0 0 36px;

      &:before {
        content: "";
        position: absolute;
        top: 6px;
        left: 0;
        bottom: 4px;
        width: 4px;
        border-radius: 10px;
        background: #a0d800;

         ${({ bordergradient }) =>
      bordergradient &&
      css`
        background: var(--blue-grt);
      `}
      }
    }
  }

  ${({ textWhite }) =>
    textWhite &&
    css`
      color: var(--white);

      h2 {
        color: var(--white);
      }
    `}
`;

export const ImgBoxMobile = styled.div`
  margin: 0 -15px 25px;
  text-align: center;
  display: none;

  @media (max-width: 575px) {
    display: block;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
