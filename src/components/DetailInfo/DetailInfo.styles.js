import styled from "styled-components";

export const DetailBlock = styled.div`
  position: relative;
  padding: 25px 0;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 22px;
  }

  .holder {
    max-width: 880px;
    margin: 0 auto;
    padding: 0 25px;
    position: relative;

    @media (min-width: 768px) {
      padding: 0 15px;
    }
  }

  .head {
    width: 100%;
    margin: 0 0 15px;
    overflow: hidden;
  }

  .btn-back {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin: 0;
    color: #31bc7b;
  }

  .heading {
    display: block;
    font-size: 30px;
    line-height: 36px;
  }

  h1 {
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
`;
