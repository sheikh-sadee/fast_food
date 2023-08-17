import styled from "styled-components";

export const TeamBlock = styled.div`
  position: relative;
  padding: 25px 0;

  @media (min-width: 768px) {
    padding: 50px 0;
  }

  .header {
    text-align: center;
    margin: 0 0 30px;
  }
`;

export const ColHolder = styled.div`
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
  }
`;
