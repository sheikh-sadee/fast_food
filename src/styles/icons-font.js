import { css } from "styled-components";
// import '../../public/fonts/plastk-icons.woff'
const PlastkIcons = css`
  @font-face {
    font-family: "plastk-icons";
    src: url("/fonts/plastk-icons.ttf") format("truetype"),
      url("/fonts/plastk-icons.woff") format("woff"),
      url("/fonts/plastk-icons.svg") format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="plastk-icons"],
  [class*=" plastk-icons"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: "plastk-icons" !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Enable Ligatures ================ */
    letter-spacing: 0;
    -webkit-font-feature-settings: "liga";
    -moz-font-feature-settings: "liga=1";
    -moz-font-feature-settings: "liga";
    -ms-font-feature-settings: "liga" 1;
    font-feature-settings: "liga";
    -webkit-font-variant-ligatures: discretionary-ligatures;
    font-variant-ligatures: discretionary-ligatures;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .plastk-iconsinfo:before {
    content: "\\e90d";
  }
  .plastk-iconserror_outline:before {
    content: "\\e90e";
  }
  .plastk-iconswarning:before {
    content: "\\e90f";
  }
  .plastk-iconshelp_outline:before {
    content: "\\e910";
  }
  .plastk-iconscheck_circle:before {
    content: "\\e911";
  }
  .plastk-iconssearch:before {
    content: "\\e90c";
  }
  .plastk-iconsadd:before {
    content: "\\e90a";
  }
  .plastk-iconsremove:before {
    content: "\\e90b";
  }
  .plastk-iconsclock:before {
    content: "\\e909";
  }
  .plastk-iconsstar:before {
    content: "\\e908";
  }
  .plastk-iconsplastk-p:before {
    content: "\\e907";
  }
  .plastk-iconschevron-down:before {
    content: "\\e900";
  }
  .plastk-iconsfacebook:before {
    content: "\\e901";
  }
  .plastk-iconsinstagram:before {
    content: "\\e902";
  }
  .plastk-iconslinkedin:before {
    content: "\\e903";
  }
  .plastk-iconstwitter:before {
    content: "\\e904";
  }
  .plastk-iconsarrow-left:before {
    content: "\\e905";
  }
  .plastk-iconsarrow-right:before {
    content: "\\e906";
  }
  .plastk-iconssparkles:before {
    content: "\\e913";
  }
  .plastk-iconsaqi:before {
    content: "\\e914";
  }
  .plastk-iconscup:before {
    content: "\\e915";
  }
  .plastk-iconsarrow-circle:before {
    content: "\\e912";
  }
`;
export default PlastkIcons;
