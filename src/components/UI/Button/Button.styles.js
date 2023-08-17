import styled from "styled-components";

export const BtnLoader = styled.span`
  margin-right: ${({ $width }) => ($width > 115 || !$width) && "10px"};
  svg {
    animation: loadingCircle 1s linear infinite;
    @keyframes loadingCircle {
      to {
        transform: rotate(1turn);
      }
    }
  }
`;

export const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  text-align: center;
  padding: 12px 15px;
  cursor: pointer;
  font-weight: 600;
  max-width: ${({ width }) => width && `${width}px`};
  transition: filter 0.3s linear, box-shadow 0.3s linear;

  border-radius: ${({ rounded }) => {
    if (rounded) {
      return "100px";
    }
    return "10px";
  }};

  font-size: ${({ sm }) => {
    if (sm) {
      return "var(--font-size-sm)";
    }
    return "var(--font-size-base)";
  }};

  line-height: ${({ sm }) => {
    if (sm) {
      return "calc(var(--font-size-sm) + 0.3125rem)";
    }
    return "calc(var(--font-size-base) + 0.3125rem)";
  }};

  color: ${({ btntype }) => {
    if (btntype === "outline") {
      return "var(--body-text-color)";
    }
    if (btntype === "white") {
      return "var(--body-text-color)";
    }
    if (btntype === "green") {
      return "var(--tertiary)";
    }
    return "var(--white)";
  }};

  background: ${({ btntype }) => {
    if (btntype === "primary") {
      return "var(--primary)";
    }
    if (btntype === "tertiary") {
      return "var(--tertiary)";
    }
     if (btntype === "darkblue") {
      return "var(--primaryDarkBlue)";
    }
    if (btntype === "outlinePrimary") {
      return "var(--primary)";
    }
    if (btntype === "outline") {
      return "var(--white)";
    }
    if (btntype === "white") {
      return "var(--white)";
    }
    if (btntype === "green") {
      return "var(--brand-color)";
    }
    if (btntype === "primaryLightBlue") {
      return "var(--primaryLightBlue)";
    }
    if (btntype === "accent") {
      return "var(--accent-grt)";
    }
    if (btntype === "blue-grt") {
      return "var(--blue-grt)";
    }
    if (btntype === "secondary") {
      return "var(--secondary)";
    }
    return "var(--primary)";
  }};

  border: ${({ btntype }) => {
    if (btntype === "outline") {
      return "1px solid rgba(33, 35, 56, 0.1)";
    }
    if (btntype === "outlinePrimary") {
      return "1px solid rgba(255, 255, 255, 0.1)";
    }
    return "none";
  }};

  @media (min-width: 768px) {
    padding: ${({ sm, md }) => {
      if (sm) {
        return "10px 20px";
      }
      if (md) {
        return "14px 20px";
      }
      return "var(--btn-padding)";
    }};
  }

  &:hover {
    background: ${({ btntype }) => {
      if (btntype === "outline") {
        return "var(--white)";
      }
      if (btntype === "white") {
        return "var(--white)";
      }
      if (btntype === "green") {
        return "var(--brand-color)";
      }
      if (btntype === "accent") {
        return "var(--accent-grt)";
      }
       if (btntype === "blue-grt") {
      return "var(--blue-grt)";
    }
     if (btntype === "primaryLightBlue") {
      return "var(--primaryLightBlue)";
    }
      if (btntype === "darkblue") {
      return "var(--primaryDarkBlue)";
    }
      return "var(--primary)";
    }};
    color: ${({ btntype }) => {
      if (btntype === "outline") {
        return "var(--primary)";
      }
      if (btntype === "white") {
        return "var(--primary)";
      }
      if (btntype === "green") {
        return "var(--white)";
      }
      return "var(--white)";
    }};
  }

  @media (max-width: 575px) {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
`;

export const LoaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
