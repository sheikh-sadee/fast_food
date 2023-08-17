import styled from "styled-components";

export const IconBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin: 0 0 15px;
  border-radius: 10px;
  transition: ease-in-out 0.3s;
  background: #25214f;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    margin: 0 0 20px;
    border-radius: 15px;
  }
`;

export const CardColumn = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0 auto 20px;
  padding: 20px;
  font-size: 16px;
  border: 2px solid #40ddff;
  text-align: left;
  border-radius: 25px;
  transition: ease-in-out 0.3s;

  @media (min-width: 768px) {
    max-width: inherit;
    width: calc(50% - 24px);
    margin: 0 12px 24px;
    padding: 30px;
  }
  @media (min-width: 992px) {
    width: calc(33.33% - 24px);
    font-size: 18px;
  }

  &:hover {
    color: var(--white);
    border-color: #262250;
    background: #262250;

    ${IconBox} {
      background: var(--white);
    }
  }

  .title {
    display: block;
    font-size: 22px;
    line-height: 25px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 10px;

    @media (min-width: 768px) {
      font-size: 25px;
      line-height: 28px;
    }
  }
`;
