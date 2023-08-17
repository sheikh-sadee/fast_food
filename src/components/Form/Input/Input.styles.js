import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  //border-style: none;

  border-style: ${({ $invalid }) => ($invalid ? "solid" : "none")};

  border-color: ${({ $invalid, underlined }) =>
    $invalid
      ? "var(--danger)"
      : underlined
      ? "rgba(255,255,255,0.17)"
      : "var(--form-element-border-color)"};

  border-width: ${({ underlined }) =>
    underlined ? "0 0 1px 0" : "var(--form-element-border-width)"};
  background: ${({ underlined }) =>
    underlined ? "transparent" : " var(--gray-light)"};
  outline: none;
  height: ${({ lg, underlined }) =>
    lg
      ? "var(--form-element-height-lg)"
      : underlined
      ? "auto"
      : "var(--form-element-height)"};
  padding: ${({ lg, underlined }) =>
    lg
      ? "var(--form-element-padding-lg)"
      : underlined
      ? "20px 0"
      : "var(--form-element-padding)"};
  width: 100%;
  transition: border 0.3s ease-in-out;
  color: ${({ underlined }) =>
    underlined ? "var(--white)" : "var(--body-text-color)"};
  font-size: var(--font-size-sm);
  border-radius: ${({ underlined }) =>
    underlined ? "0" : "var(--form-element-radius)"};

  /* padding-left: ${({ $prefix }) => $prefix && "3.25rem"};
  padding-right: ${({ $suffix, $button }) => {
    if ($suffix) return "3.25rem";
    if ($button) return "3.6rem";
    return "";
  }}; */

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--placeholder-color);
  }
  ::-moz-placeholder {
    /* Firefox1+ */
    color: var(--placeholder-color);
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--placeholder-color);
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--placeholder-color);
  }

  &:disabled {
    background: var(--light);
    cursor: not-allowed;
    color: #a9a9a9;
    border-color: #eee;

    ::-moz-placeholder {
      color: #a9a9a9;
    }
    ::-webkit-input-placeholder {
      color: #a9a9a9;
    }
    :-ms-input-placeholder {
      color: #a9a9a9;
    }
    :-moz-placeholder {
      color: #a9a9a9;
    }
  }

  ${({ borderBottom }) =>
    borderBottom &&
    css`
      padding-left: 0;
      padding-right: 0;
      border-radius: 0;
      color: rgba(255, 255, 255, 0.8);
      border-style: solid !important;
      border-width: 0 0 1px;
      background: none;

      ::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
      ::-moz-placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
      :-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
      :-moz-placeholder {
        color: rgba(255, 255, 255, 0.8);
      }

      @media (max-width: 767px) {
        color: var(--black);
        font-weight: 600;

        ::-webkit-input-placeholder {
          color: var(--black);
        }
        ::-moz-placeholder {
          color: var(--black);
        }
        :-ms-input-placeholder {
          color: var(--black);
        }
        :-moz-placeholder {
          color: var(--black);
        }
      }
    `}
`;

export const StyledTextarea = styled.textarea`
  border-style: solid;
  border-color: ${({ $invalid, underlined }) =>
    $invalid
      ? "var(--danger)"
      : underlined
      ? "rgba(255,255,255,0.17)"
      : "var(--form-element-border-color)"};
  border-width: ${({ underlined }) =>
    underlined ? "0 0 1px 0" : "var(--form-element-border-width)"};
  background: ${({ underlined }) =>
    underlined ? "transparent" : " var(--white)"};
  outline: none;
  height: ${({ lg }) =>
    lg ? "var(--form-element-height-lg)" : "var(--form-element-height)"};
  padding: ${({ lg, underlined }) =>
    lg
      ? "var(--form-element-padding-lg)"
      : underlined
      ? "20px 0"
      : "var(--form-element-padding)"};
  width: 100%;
  transition: border 0.3s ease-in-out;
  color: ${({ underlined }) =>
    underlined ? "var(--white)" : "var(--body-text-color)"};
  font-size: var(--font-size-sm);
  border-radius: ${({ underlined }) =>
    underlined ? "0" : "var(--form-element-radius)"};
  resize: none;
  min-height: 130px;
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--placeholder-color);
  }
  ::-moz-placeholder {
    /* Firefox1+ */
    color: var(--placeholder-color);
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--placeholder-color);
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--placeholder-color);
  }

  ${({ borderBottom }) =>
    borderBottom &&
    css`
      padding-left: 0;
      padding-right: 0;
      border-radius: 0;
      color: rgba(255, 255, 255, 0.8);
      border-width: 0 0 1px;
      background: none;

      ::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
      ::-moz-placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
      :-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
      :-moz-placeholder {
        color: rgba(255, 255, 255, 0.8);
      }

      @media (max-width: 767px) {
        color: var(--black);
        font-weight: 600;

        ::-webkit-input-placeholder {
          color: var(--black);
        }
        ::-moz-placeholder {
          color: var(--black);
        }
        :-ms-input-placeholder {
          color: var(--black);
        }
        :-moz-placeholder {
          color: var(--black);
        }
      }
    `}
`;
