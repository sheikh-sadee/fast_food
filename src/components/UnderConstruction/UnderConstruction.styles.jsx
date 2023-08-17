import styled from "styled-components";

export const ContainerWrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f2f2f2;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    text-align: center;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #777;
  }
`;
