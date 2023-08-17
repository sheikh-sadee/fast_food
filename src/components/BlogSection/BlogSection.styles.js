import styled from "styled-components";

export const ArticleSection = styled.div`
  width: 100%;
  padding: 15px 0 25px;

  @media (min-width: 768px) {
    padding: 50px 0;
  }

  .container {
    max-width: 1110px;
    padding: 0 15px;
    margin: 0 auto;
  }

  .filter-list {
    list-style: none;
    padding: 0;
    max-width: 820px;
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    white-space: nowrap;
    overflow-x: auto;
    font-size: 13px;
    line-height: 16px;
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
      margin: 0 auto 20px;
    }
    @media (min-width: 992px) {
      font-size: 18px;
      line-height: 22px;
    }

    li {
      flex-grow: 1;
      padding: 0 5px 12px;

      @media (min-width: 768px) {
        padding: 0 5px 15px;
      }

      &:first-child {
        padding-left: 0;
      }
    }

    .btn-text {
      display: block;
      outline: none;
      box-shadow: none;
      margin: 0;
      padding: 12px 15px;
      border-radius: 50px;
      border: 1px solid rgba(33, 35, 56, 0.1);
      background: var(--white);
      transition: all ease-in-out 0.3s;

      @media (min-width: 768px) {
        padding: 15px 20px;
      }

      &:hover,
      &.active {
        color: var(--white);
        background: var(--primary);
      }
    }
  }

  .header {
    max-width: 800px;
    margin: 0 auto 20px;
    text-align: center;

    @media (min-width: 768px) {
      margin: 0 auto 30px;
    }
    @media (min-width: 992px) {
      text-align: left;
    }

    h1 {
      position: relative;
      text-align: center;

      @media (min-width: 992px) {
        text-align: left;
        display: flex;
        align-items: center;
      }

      &::before {
        display: none;
        margin: 0 25px 0 0;
        content: "";
        width: 4px;
        height: 80px;
        border-radius: 20px;
        background: var(--brand-color);

        @media (min-width: 992px) {
          display: inline-block;
        }
      }
    }
  }
`;
