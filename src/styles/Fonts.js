import { css } from "styled-components";

const Fonts = css`
  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url(/fonts/PlusJakartaSans-600.woff2) format("woff2");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url(/fonts/PlusJakartaSans-500.woff2) format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url(/fonts/PlusJakartaSans-400.woff2) format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

     body {
      -webkit-font-smoothing: antialiased;
      font-family: var(--font-family-base);
      font-size: var(--font-size-base);
      line-height: calc(var(--font-size-base) + 4px);
      color: var(--body-text-color);
      min-width: 360px;
      @media (min-width: 768px) {
        font-size: var(--font-size-lg);
        line-height: calc(var(--font-size-lg) + 4px);
      }
      /* @media (min-width: 992px) {
        font-size: var(--font-size-xl);
        line-height: calc(var(--font-size-xl) + 5px);
      } */

      &.nav-active {
        overflow: hidden;
      }
    }
`;

export default Fonts;
