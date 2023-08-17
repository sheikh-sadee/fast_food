import styled from "styled-components";

export const ApplyForm = styled.div`
  position: relative;
  overflow: hidden;
  padding: 25px 0;

  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .container {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .btn-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

export const FeildHolder = styled.div`
  width: 100%;
  padding: 0 0 10px;
  margin: 0 0 20px;
  border-bottom: 2px solid #f8f8f8;

  @media (min-width: 768px) {
    padding: 0 0 20px;
    margin: 0 0 30px;
  }
  @media (min-width: 992px) {
    margin: 0 0 50px;
    padding: 0 50px 30px;
  }
  @media (min-width: 1200px) {
    padding: 0 100px 30px;
  }

  .header {
    width: 100%;
    margin: 0 0 25px;
    text-align: center;

    @media (min-width: 768px) {
      margin: 0 0 35px;
    }
  }

  .heading {
    display: block;
    font-size: 26px;
    line-height: 30px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 10px;

    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 35px;
    }
  }
`;
