import styled from "styled-components";

export const BenefitsSection = styled.div`
  position: relative;
  padding: 25px 0;

  @media (min-width: 992px) {
    padding: 50px 0;
  }
`;

export const BoxWrap = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 768px) {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    gap: 10px;
  }
`;
