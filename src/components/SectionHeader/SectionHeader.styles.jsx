import styled from "styled-components";

export const SectionHead = styled.div`
  position: relative;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 25px;

  @media (min-width: 768px) {
    margin: 0 auto 40px;
  }
  @media (min-width: 992px) {
    margin: 0 auto 60px;
  }

  .text-wrap {
    max-width: 650px;
    margin: 0 auto;
  }
`;
