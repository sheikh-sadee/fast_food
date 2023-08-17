import { css } from "styled-components";
const Globals = css`
  /* (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css) */

  /* Other Reset that aren't define in normalize.css*/

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
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

    &.dark-bg {
      color: var(--white);
      background: #1e1e1e;

      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(--white);
      }
    }
  }

  a {
    background-color: transparent;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  button {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  .mb-0 {
    margin-bottom: 0 !important;
  }

  .text-black {
    color: var(--black) !important;
  }

  .text-white {
    color: var(--white) !important;
  }

  .text-center {
    text-align: center !important;
  }

  .mx-auto {
    margin: 0 auto;
  }

  .d-block {
    display: block;
  }

  .container-signup {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px 60px;

    @media (max-width: 767px) {
      padding: 0 15px 20px;
    }
  }

  div#hs-eu-cookie-confirmation {
    top: auto !important;
    bottom: 0;
  }

  @media (max-width: 767px) {
    #___gatsby {
      &:after {
        transition: visibility 0.3s linear, opacity 0.3s linear;
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        z-index: var(--z-50);
      }
    }
    body {
      &.popup-active {
        overflow: hidden;
        #___gatsby {
          position: relative;
          &:after {
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
  }
`;
export default Globals;
