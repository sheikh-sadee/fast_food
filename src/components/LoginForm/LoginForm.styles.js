import styled from "styled-components";

export const FormBlock = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 930px;
  margin: 0 auto;
  padding: 25px 0 10px;

  @media (min-width: 992px) {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 50px;
    padding: 25px 0 50px;
  }

  .flex-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    margin: 0 0 20px;
  }

  .form-group {
    position: relative;

    input.custom-checkbox {
      display: none;

      &:checked + label:after {
        content: "";
        left: 16px;
      }
    }

    label {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      cursor: pointer;
      font-size: 14px;
      line-height: 18px;
      text-transform: capitalize;
      color: var(--tertiary);
      font-weight: 600;

      &:before {
        display: inline-block;
        vertical-align: middle;
        content: "";
        width: 34px;
        height: 20px;
        border-radius: 50px;
        background: var(--white);
        background: #a0d800;
        position: relative;
        cursor: pointer;
        margin-right: 8px;
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 3px;
        left: 2px;
        width: 16px;
        height: 16px;
        border-radius: 50px;
        transition: all ease-in-out 0.3s;
        background: var(--white);
      }
    }
  }
`;

export const ImgHolder = styled.div`
  display: none;
  width: 270px;
  padding: 50px 0 0;

  @media (min-width: 992px) {
    display: block;
  }
`;

export const TextHolder = styled.div`
  max-width: 700px;
  font-size: 16px;
  line-height: 20px;
  position: relative;
  margin: 0 auto;
  padding: 0 5px;

  @media (min-width: 768px) {
    padding: 0;
    font-size: 18px;
    line-height: 22px;
  }
  @media (min-width: 992px) {
    width: 488px;
    margin: 0;
    max-width: inherit;
  }

  .header {
    width: 100%;
    margin: 0 0 20px;

    @media (min-width: 768px) {
      margin: 0 0 25px;
    }
  }

  .title {
    display: block;
    font-size: 25px;
    line-height: 30px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 10px;

    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 35px;
    }
  }

  .forget-text {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    line-height: 18px;
    text-transform: capitalize;
    color: var(--tertiary);
    font-weight: 600;
  }

  .btn-holder {
    gap: 20px;
    margin: 0 0 25px;
    text-align: center;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      text-align: left;
    }

    .btn-submit {
      font-size: 14px;

      @media (max-width: 767px) {
        margin: 0 0 20px;
        min-width: 150px;
        border-radius: 50px;
      }
    }

    .text {
      display: block;
      font-size: 12px;
      line-height: 16px;
      color: rgba(74, 85, 104, 0.5);
      font-weight: 500;

      @media (min-width: 768px) {
        display: inline-block;
        vertical-align: top;
      }

      a {
        color: var(--brand-color);
      }
    }
  }

  .or-text {
    width: 100%;
    margin: 0 0 20px;
    text-align: center;
    position: relative;

    @media (min-width: 768px) {
      margin: 0 0 30px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      height: 1px;
      background: rgba(74, 85, 104, 0.25);
    }

    .text {
      position: relative;
      display: inline-block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 600;
      text-transform: lowercase;
      color: #4a5568;
      padding: 0 20px;
      background: var(--white);
      z-index: 2;
    }
  }

  .socials-btns {
    width: 100%;
    margin: 0;

    @media (min-width: 768px) {
      max-width: inherit;
      width: 100%;
      margin: 0;
    }
  }

  .btn-social {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    border-radius: 10px;
    padding: 8px 10px;
    margin: 0 0 15px;
    border: 0;
    outline: none;
    box-shadow: none;

    @media (min-width: 768px) {
      gap: 12px;
      font-size: 18px;
      line-height: 22px;
      padding: 10px;
      margin: 0 0 20px;
    }

    img {
      width: 30px;
    }

    &.btn-facebook {
      color: var(--white);
      background: #1877f2;
    }
    &.btn-google {
      color: rgba(0, 0, 0, 0.54);
      background: var(--white);
      box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.17),
        0px 0px 3px 0px rgba(0, 0, 0, 0.08);
    }
    &.btn-apple {
      color: var(--white);
      background: #000;
    }
  }
`;
