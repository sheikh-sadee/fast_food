import styled from "styled-components";

export const AccordionSection = styled.div`
  position: relative;
  padding: 20px 0 25px;

  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .holder {
    width: 100%;
    padding: 0 20px;
    margin-bottom: 20px;

    @media (min-width: 992px) {
      padding: 0;
    }
  }

  h1 {
    text-align: left;

    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  .accordion-item {
    width: 100%;
    padding: 15px 0;
    font-size: 14px;
    line-height: 18px;
    border-bottom: 1px solid #19383a40;

    &.active {
      .content-wrap {
        max-height: 500px;
      }
      .accordion-content:before {
        visibility: hidden;
        opacity: 0;
      }

      .close {
        display: initial;
      }
      .show {
        display: none;
      }

      .icon-add {
        display: none;
      }
      .icon-remove {
        display: inline;
      }
    }
  }

  .accordion-title {
    position: relative;

    .title {
      display: inline-block;
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      text-transform: capitalize;
      margin: 0 10px 0 0;

      @media (min-width: 768px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }

  .accordion-opener {
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    font-weight: 300;
    color: #31bc7b;
    padding: 0 15px 0 0;
    cursor: pointer;
    position: relative;

    .close {
      display: none;
    }
    .show {
      display: inline;
    }

    .material-icons-outlined {
      vertical-align: bottom;
      font-size: 14px;
      line-height: 1;
      margin: 0 0 0 4px;
    }

    .icon-add {
      display: inline;
    }
    .icon-remove {
      display: none;
    }
  }

  .accordion-content {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 55px;
      z-index: 5;
      visibility: visible;
      opacity: 1;
      transition: all 0.3s;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      );
    }

    .link {
      display: inline-block;
      color: #31bc7b;
    }
  }
  .content-wrap {
    position: relative;
    padding-top: 15px;
    max-height: 90px;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out;

    @media (min-width: 768px) {
      max-height: 55px;
    }
  }
`;
