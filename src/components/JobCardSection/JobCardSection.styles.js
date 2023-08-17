import styled from "styled-components";

export const CardSection = styled.div`
  width: 100%;
  padding: 25px 0;
  position: relative;

  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .heading-holder {
    margin: 0 0 30px;

    @media (min-width: 1200px) {
      margin: 0 0 40px;
    }
  }

  h2 {
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 10px;
  }

  .card-holder {
    @media (min-width: 768px) {
      display: flex;
      flex-flow: wrap;
      gap: 20px;
    }
  }
`;
