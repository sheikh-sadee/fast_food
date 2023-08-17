import styled from "styled-components";

export const StyledInputIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ $prefix }) => $prefix && "5px"};
  right: ${({ $suffix }) => $suffix && "5px"};
  color: ${({ $invalid }) => ($invalid ? "var(--danger)" : "var(--tertiary)")};
  font-size: var(--font-size-xs);
  background: none;
  border: none;
  padding: 0;
  i {
    display: block;
  }
`;
