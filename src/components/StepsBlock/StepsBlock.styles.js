import styled from "styled-components";

export const StepsContainer = styled.div`
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  padding: 25px 0;
  color: #212338;

  @media (min-width: 992px) {
    padding: 50px 0;
  }
`;

export const StepHolder = styled.div`
  max-width: 220px;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  list-style: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: start;
    justify-content: space-between;
    max-width: 100%;
    margin: 0;
  }

  li {
    width: 100%;
    padding: 60px 20px;
    position: relative;

    @media (min-width: 768px) {
      padding: 15px;
    }

    &:first-child {
      &:before {
        display: none;
      }
      @media (max-width: 767px) {
        padding-top: 0;
      }
    }
    &:last-child {
      @media (max-width: 767px) {
        padding-bottom: 0;
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: -10px;
      left: 50%;
      width: 46px;
      height: 21px;
      background: url("images/arrow.png") no-repeat;
      transform: translateX(-50%) rotate(90deg);

      @media (min-width: 768px) {
        transform: none;
        top: 75px;
        left: -25px;
      }
    }
  }

  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--h4-font-size);
    line-height: calc(var(--h4-font-size) + 5);
    font-weight: 600;
    letter-spacing: -0.02em;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    margin: 0 auto 20px;
    background: #011d2f;
    color: #fff;

    @media (min-width: 1500px) {
      margin: 0 auto 30px;
    }
  }

  .subtitle {
    display: block;
    font-size: var(--font-size-base);
    line-height: calc(var(--font-size-base) + 5px);
    text-transform: capitalize;

    @media (min-width: 992px) {
      font-size: var(--font-size-lg);
      line-height: calc(var(--font-size-lg) + 5px);
    }
  }
`;
