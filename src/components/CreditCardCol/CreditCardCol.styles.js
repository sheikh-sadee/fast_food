import styled, { css } from "styled-components";

export const CreditCardBlock = styled.div`
  max-width: 350px;
  margin: 0 auto;
  padding: 25px 0;

  @media (min-width: 768px) {
    max-width: inherit;
    padding: 50px 0;
  }

  .list-container {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 30px;
    }
    @media (min-width: 1200px) {
      justify-content: space-between;
      gap: 40px;
    }
  }

  ${({ reverse }) =>
    reverse &&
    css`
      .list-container {
        flex-direction: row-reverse;
      }
    `};

  .btn-holder {
    text-align: center;
    padding: 30px 0 0;
  }

  .header {
    text-align:center;
    margin: 0 0 15px;

    @media (min-width: 768px) {
      text-align:left;
      margin: 0;
    }

    &.tablet-hide {
      @media (min-width: 768px) {
        display:none;
      }
    }

    &.mobile-hide {
      display:none;

      @media (min-width: 768px) {
        display:block;
      }
    }
  }

  .subtitle {
    display: block;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1em;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const TextHolder = styled.div`
  max-width: 530px;
  flex-grow: 1;
  font-size: var(--font-size-xl);
  line-height: calc(var(--font-size-xl) + 4px);

  @media (min-width: 992px) {
    max-width: 480px;
    font-size: var(--font-size-3xl);
    line-height: calc(var(--font-size-3xl) + 6px);
  }

  h2 {
    text-align: left;
    margin: 0 0 30px;
  }

  p {
    margin-bottom: 43px;
  }

  ul {
    font-size: var(--font-size-base);
    line-height: calc(var(--font-size-base) + 4px);
    margin: 0;
    padding: 0 10px;

    @media (min-width: 768px) {
      font-size: var(--font-size-lg);
      line-height: calc(var(--font-size-lg) + 8px);
      margin: 0 0 30px;
      padding: 0;
    }

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      position: relative;

      &:not(:last-child) {
        margin-bottom: 18px;

        @media (min-width: 768px) {
          margin-bottom: 33px;
        }
        @media (min-width: 992px) {
          margin-bottom: 30px;
        }
      }

      .ico-box {
        width: 30px;
        text-align: center;

        img {
          display: inline-block;
          max-width: 100%;
          height: auto;
        }
      }
    }
  }
`;

export const InfoText = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;

  p {
    margin: 0 0 10px;

    a {
      color: var(--white);
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export const ImgHolder = styled.div`
  flex-shrink: 0;
  max-width: 260px;
  margin: 0 auto 20px;

  @media (min-width: 768px) {
    margin: 0;
  }
  @media (min-width: 992px) {
    max-width: 350px;
  }
  @media (min-width: 1200px) {
    max-width: 400px;
  }
`;
