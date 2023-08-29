import styled from "styled-components";

// Styled Components
export const PageTitle = styled.div`
  postion: relative;
  margin: 0 0 30px;

  h1 {
    color: #c0392b;
    font-weight: 700;
    line-height: 2;
    margin-bottom: 0;
    position: relative;
    text-transform: capitalize;
    text-align: center;

    &::before {
      background: #c0392b;
      width: 70px;
      height: 2px;
      position: absolute;
      content: "";
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &::after {
      position: absolute;
      content: "";
      background: #fbc531;
      width: 30px;
      height: 2px;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const OurMenuSection = styled.section`
  padding: 5px 0 25px;

  @media (min-width: 768px) {
    padding: 25px 0;
  }

  .container {
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 15px;
  }

`;
