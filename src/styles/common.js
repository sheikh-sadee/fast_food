import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
`;

export const containerLg = styled.div`
  max-width: 1230px;
`;

export const StyledFormGroup = styled.div`
  margin-bottom: ${({ $invalid, noMargin }) =>
    $invalid || noMargin ? "0px" : "18px"};
`;
