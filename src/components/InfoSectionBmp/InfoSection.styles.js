import styled, { css } from "styled-components";

export const ImgBox = styled.div`
  width: 340px;
  margin: 0 auto 25px;
  text-align: center;

  @media (min-width: 768px) {
    width: 430px;
  }
  @media (min-width: 992px) {
    width: 520px;
    margin: 0;
  }
  @media (min-width: 1200px) {
    width: 600px;
  }
  @media (min-width: 1440px) {
    width: 700px;
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
  background: url("images/clip-path-img.svg") no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 992px) {
    padding: 80px 0;
  }
  @media (min-width: 1200px) {
    padding: 100px 0;
  }
  @media (min-width: 1440px) {
    padding: 150px 0;
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

  .container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;

    @media (min-width: 1200px) {
      max-width: 1100px;
    }
    @media (min-width: 1440px) {
      max-width: 1200px;
    }
  }
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
  max-width: 300px;
  padding: 0;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    font-size: var(--font-size-lg);
    line-height: calc(var(--font-size-lg) + 5px);
    width: 400px;
    max-width: inherit;
    margin: 0;
  }
  @media (min-width: 992px) {
    width: 450px;
  }
  @media (min-width: 1440px) {
    width: 480px;
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
    position: relative;

    @media (min-width: 992px) {
      max-width: 390px;
    }
    @media (min-width: 1200px) {
      max-width: 450px;
    }

    &:before {
      display: none;
      content: "";
      position: absolute;
      top: 6px;
      left: 0;
      bottom: 4px;
      width: 4px;
      border-radius: 10px;
      background: var(--blue-grt);

      @media (min-width: 768px) {
        display: block;
      }
    }

    @media (min-width: 768px) {
      margin-bottom: 20px;
    }
  }

  .text {
    position: relative;
    margin: 0 0 25px;

    @media (min-width: 768px) {
      padding-left: 24px;
      margin: 0 0 20px;
    }
    @media (min-width: 992px) {
      margin: 0 0 36px;
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
