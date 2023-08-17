import styled, { css } from "styled-components";

export const CreditCard = styled.div`
  position: relative;
  padding: 25px 0;
  background: url("images/clip-path-img2.svg") no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    padding: 50px 0;
  }

  .info-list {
    list-style: none;
    margin: 0 0 15px;
    padding: 0;
    display: flex;
    gap: 10px;
    text-align: center;
    justify-content:center;

    @media (min-width: 768px) {
      gap: 20px;
      justify-content:flex-start;
    }

    li {
      width: 100px;
      padding: 20px 10px;
      margin: 0 0 10px;
      border-radius: 13px;
      border: 0.5px solid rgba(255, 255, 255, 0.2);

      @media (min-width: 768px) {
        width: 145px;
      }
    }

    .number {
      display: block;
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      color: #28bc6f;
      margin: 0 0 10px;

      @media (min-width: 768px) {
        font-size: 24px;
        line-height: 28px;
        margin: 0 0 15px;
      }
      @media (min-width: 992px) {
        font-size: 30px;
        line-height: 34px;
      }
    }
    .text {
      display: block;
      font-size: 12px;
      line-height: 16px;
      color: #f9f9f9;
      margin: 0;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`;

export const Holder = styled.div`
  max-width: 560px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row-reverse;
    gap: 20px;
    max-width: 100%;
    margin: 0;
  }
  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

export const TextBox = styled.div`
  padding: 0;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    font-size: var(--font-size-xl);
    line-height: calc(var(--font-size-xl) + 8px);
    font-weight: 400;
    width: 400px;
    padding: 0;
  }
  @media (min-width: 992px) {
    width: 490px;
  }
  @media (min-width: 1200px) {
    width: 535px;
  }

  h2 {
    margin-bottom: 15px;
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
    display:none;
    position: relative;
    margin: 0 0 30px;

    @media (min-width: 768px) {
      margin: 0 0 36px;
      display:block;
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

export const ImgBox = styled.div`
  width: 200px;
  margin: 0 auto 20px;
  text-align: center;
  transform: rotate(-15deg);

  @media (min-width: 768px) {
    width: 280px;
    transform: none;
  }
  @media (min-width: 992px) {
    width: 300px;
    margin: 0;
  }
  @media (min-width: 1200px) {
    width: 350px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    width: 340px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
