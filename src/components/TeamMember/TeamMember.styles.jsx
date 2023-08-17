import styled from "styled-components";

export const Column = styled.div`
  max-width: 100%;
  font-size: 14px;
  line-height: 21px;
  position: relative;
  margin: 0 auto 25px;

  @media (min-width: 480px) {
    max-width: 300px;
    margin: 0 auto 20px;
    font-size: 16px;
    line-height: 21px;
  }
  @media (min-width: 768px) {
    width: 30%;
    max-width: inherit;
    margin: 0 0 10px;
    padding: 0 10px;
  }
  @media (min-width: 992px) {
    width: 30%;
    margin: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ImgBox = styled.div`
  margin: 0 -15px 20px;
  position: relative;

  @media (min-width: 480px) {
    width: 200px;
    margin: 0 auto 20px;
  }
  @media (min-width: 768px) {
    margin: 0 0 20px;
  }
  @media (min-width: 992px) {
    width: 250px;
  }
  @media (min-width: 1200px) {
    width: 278px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;

    @media (min-width: 768px) {
      border-radius: 20px;
    }
    @media (max-width: 479px) {
      width: 100%;
    }
  }

  .socialnetwork {
    position: absolute;
    right: 10px;
    bottom: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 10px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      font-size: 13px;
      line-height: 1;
      color: var(--black);
      border-radius: 50px;
      background: var(--white);
    }
  }
`;

export const TextBox = styled.div`
  position: relative;
  padding: 0 15px;

  @media (min-width: 768px) {
    padding: 0;
  }
  @media (min-width: 992px) {
    padding: 0 20px;
  }

  .title {
    display: block;
    font-size: 28px;
    line-height: 32px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 10px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 30px;
      text-align: left;
    }
  }

  .designation {
    display: block;
    font-size: 16px;
    line-height: 21px;
    text-transform: capitalize;
    font-weight: 600;
    margin: 0 0 10px;
    color: #0d475b;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 14px;
      text-align: left;
    }
  }
`;
