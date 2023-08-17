import styled from "styled-components";

export const BusinessBlock = styled.div`
  position: relative;
  padding: 25px 0;

  @media (min-width: 992px) {
    padding: 50px 0;
  }
`;

export const RegisterForm = styled.div`
  padding: 30px 22px;
  border-radius: 30px;
  position: relative;
  color: var(--white);
  background: url("images/clip-path-img2.svg") no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${({ bgColor }) => {
    if (bgColor) {
      return bgColor;
    }
    return "#011D2F";
  }};

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 50px 40px;
  }
  @media (min-width: 992px) {
    gap: 10px;
    padding: 60px;
    border-radius: 60px;
  }

  h4 {
    color: var(--white);
    text-align: left;
  }
`;

export const TextBox = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 30px;

  @media (min-width: 768px) {
    width: 370px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 3px;
  border-radius: 60px;
  background: var(--white);

  @media (min-width: 768px) {
    width: 370px;
  }

  input[type="email"] {
    width: 100%;
    height: 50px;
    border: 0;
    outline: none;
    box-shadow: none;
    font-size: 14px;
    line-height: 18px;
    padding: 12px 10px 12px 18px;
    border-radius: 50px;
    background: var(--white);

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 18px;
      padding: 12px 10px 12px 28px;
    }
  }

  .btn {
    flex-shrink: 0;
    width: 125px;
    height: 45px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    color: var(--white);
    text-align: center;
    outline: none;
    box-shadow: none;
    border: 0;
    padding: 5px;
    border-radius: 60px;
    background: #011d2f;

    span {
      display: none;
    }

    @media (min-width: 768px) {
      width: 163px;
      height: 50px;
      font-size: 14px;
      line-height: 18px;

      span {
        display: inline-block;
      }
    }
  }
`;
