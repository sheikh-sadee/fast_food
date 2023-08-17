import { css } from "styled-components";

const Typography = css`
  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6,
  .h {
    font-family: var(--headings-font-family);
    font-weight: bold;
    margin: 0 0 0.5em;
    color: var(--headings-color);
    @media (max-width: 767px) {
      text-align: center;
    }
  }

  h1,
  .h1 {
    font-size: 28px;
    line-height: 36px;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 42px;
    }

    @media (min-width: 992px) {
      font-size: 40px;
      line-height: 45px;
    }
    @media (min-width: 1500px) {
      font-size: var(--h1-font-size);
      line-height: calc(var(--h1-font-size) + 8px);
    }

    &.has-border {
      @media (min-width: 768px) {
        position: relative;
        padding-left: 30px;
        &:before {
          content: "";
          position: absolute;
          top: 5px;
          bottom: 5px;
          left: 0;
          width: 4px;
          border-radius: 40px;
          background: var(--brand-color);
        }
      }
    }
  }

  h2,
  .h2 {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 15px;

    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 35px;
    }

    @media (min-width: 992px) {
      font-size: 35px;
      line-height: 40px;
      margin-bottom: 20px;
    }
    @media (min-width: 1200px) {
      font-size: var(--h2-font-size);
      line-height: calc(var(--h2-font-size) + 6px);
    }
  }

  h3,
  .h3 {
    font-size: 30px;
    line-height: 36px;

    @media (min-width: 768px) {
      font-size: var(--h3-font-size);
      line-height: calc(var(--h3-font-size) + 5px);
    }
  }

  h4,
  .h4 {
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 15px;

    @media (min-width: 992px) {
      font-size: var(--h4-font-size);
      line-height: calc(var(--h4-font-size) + 12px);
      margin-bottom: 30px;
    }
  }

  h5,
  .h5 {
    font-size: var(--h5-font-size);
    line-height: calc(var(--h5-font-size) + 8px);
  }
  h6,
  .h6 {
    font-size: var(--h6-font-size);
    line-height: calc(var(--h6-font-size) + 8px);
  }

  p {
    margin: 0 0 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: var(--base-link-color);
    text-decoration: none;
    transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
    &:hover {
      text-decoration: none;
      color: var(--base-link-color);
    }
  }

  .d-none {
    display: none !important;
  }

  br {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
export default Typography;
