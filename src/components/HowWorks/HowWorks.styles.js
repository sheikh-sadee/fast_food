import styled from "styled-components";

export const InfoSection = styled.div`
  position: relative;
  padding: 25px 0;
  text-align: center;

  @media (min-width: 768px) {
    padding: 30px 0;
    text-align: left;
  }
  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .container {
    max-width: 1230px;
    padding: 0 15px;
    margin: 0 auto;
  }
`;
export const SectionHead = styled.div`
  position: relative;
  text-align: center;
  font-size: 16px;
  max-width: 550px;
  margin: 0 auto 30px;

  @media (min-width: 992px) {
    max-width: 800px;
    font-size: 18px;
  }

  h2 {
    text-transform: capitalize;
    span {
      color: #40ddff;
    }
  }
`;
export const ColumnWrap = styled.div`
  display: flex;
  flex-flow: wrap;
`;
