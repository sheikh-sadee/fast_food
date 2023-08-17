import styled from "styled-components";

export const StyledLabel = styled.label`
  font-size: var(--font-size-sm);
  line-height: 1;
  font-weight: 600;
  color: var(--tertiary);
  margin-bottom: 0.625rem;
  display: ${({ labelIcon }) => (labelIcon ? "flex" : "block")};
  align-items: ${({ labelIcon }) => labelIcon && "center"};
  pointer-events: ${({ $onlyRead }) => $onlyRead && "none"};
`;

export const RequiredAsterisk = styled.span`
  color: var(--tertiary);
  margin-left: 3px;
`;
