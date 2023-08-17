import styled from "styled-components";

export const PlatForm = styled.div`
  position: relative;
  padding: 25px 0;
  text-align: center;

  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .header {
    max-width: 550px;
    margin: 0 auto 35px;
    text-align: center;
  }
`;

export const ImgBox = styled.div`
  width: 320px;
  margin: 0 auto 20px;

  @media (min-width: 768px) {
    width: 400px;
    margin: 0 auto -120px;
  }
  @media (min-width: 992px) {
    width: 600px;
  }
`;

export const ListBox = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  position: relative;
  font-size: 16px;
  line-height: 22px;
  padding: 0;
  color: var(--white);
  border-radius: 20px;
  box-shadow: 10px 9px 64px rgba(0, 0, 0, 0.25);
  background: rgba(1, 29, 47, 0.75);

  @media (min-width: 768px) {
    flex-flow: row;
    padding: 30px 20px;
    border-radius: 32px;
  }
  @media (min-width: 992px) {
    font-size: 18px;
    line-height: 26px;
    padding: 30px;
  }

  .box {
    position: relative;
    text-align: left;
    width: 50%;
    padding: 20px;
    border-width: 0 0 2px 2px;
    border-style: solid;
    border-color: var(--white);

    @media (min-width: 768px) {
      width: 190px;
      padding: 0 20px;
      border: 0;
    }
    @media (min-width: 992px) {
      padding: 0 25px;
    }

    &:nth-child(1),
    &:nth-child(3) {
      border-left: 0;
    }
    &:nth-child(2),
    &:nth-child(4) {
      text-align: right;
      @media (min-width: 768px) {
        text-align: left;
      }
    }
    &:nth-child(3),
    &:nth-child(4) {
      border-bottom: 0;
    }

    &:first-child {
      &::before {
        display: none;
      }
    }

    &::before {
      content: "";
      display: none;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      left: 0;
      width: 2px;
      height: 28px;
      background: rgba(255, 255, 255, 0.25);

      @media (min-width: 768px) {
        display: block;
      }
    }
  }

  .title {
    display: block;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0 0 10px;
    color: var(--brand-color);
  }

  p {
    &:last-child {
      margin: 0;
    }
  }
`;
