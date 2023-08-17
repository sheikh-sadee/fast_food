import styled from "styled-components";

export const ContactSection = styled.div`
  overflow: hidden;
  padding: 25px 0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 50px 0;
  }

  .container {
    max-width: 930px;
    margin: 0 auto;
    padding: 0 15px;

    @media (min-width: 992px) {
      display: flex;
    }
    @media (min-width: 1400px) {
      max-width: 1000px;
    }
  }
`;

export const TextHolder = styled.div`
  position: relative;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  padding: 0 15px;
  margin: 0 0 20px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    padding: 0;
  }
  @media (min-width: 992px) {
    width: 370px;
    padding: 20px 0;
    margin: 0 25px 0 0;
  }

  .heading {
    display: block;
    font-size: 28px;
    line-height: 33px;
    margin: 0 0 10px;

    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 34px;
    }
  }

  .text-box {
    display: block;
    margin: 0 0 30px;

    @media (min-width: 768px) {
      display: none;
    }

    h2 {
      text-align: left;
      border-bottom: 1px solid rgba(19, 19, 19, 0.6);
    }

    address {
      max-width: 230px;
      font-style: normal;
      font-weight: 300;
      color: #535353;
    }
  }
`;

export const FormHolder = styled.div`
  position: relative;
  margin: 0 -15px;
  padding: 20px 40px;
  color: var(--white);
  border-radius: 20px;
  background: #f6f6f6;

  @media (min-width: 768px) {
    flex-grow: 1;
    max-width: 100%;
    padding: 40px;
    margin: 0;
    border-radius: 40px;
    background: var(--primary);
  }
  @media (min-width: 992px) {
    max-width: 615px;
    padding: 40px;
  }

  form {
    width: 100%;
  }

  @media (max-width: 767px) {
    button {
      color: var(--white);
      background: var(--primary);
    }
  }
`;
