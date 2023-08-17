import styled from "styled-components";

export const ListBlock = styled.div`
  max-width: 350px;
  margin: 0 auto;
  padding: 25px 0;

  @media (min-width: 768px) {
    max-width: inherit;
    padding: 50px 0;
  }

  .heading-holder {
    text-align:center;
    margin: 0 0 15px;

    @media (min-width: 768px) {
      text-align:left;
      margin: 0;
    }

    &.tablet-hide {
      @media (min-width: 768px) {
        display:none;
      }
    }

    &.mobile-hide {
      display:none;

      @media (min-width: 768px) {
        display:block;
      }
    }
  }

  .listContainer {
    &.reverse {
      flex-direction: row-reverse;
    }

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 40px;
    }
  }
`;

export const TextHolder = styled.div`
  flex-grow: 1;
  font-size: var(--font-size-xl);
  line-height: calc(var(--font-size-xl) + 4px);

  @media (min-width: 992px) {
    font-size: var(--font-size-3xl);
    line-height: calc(var(--font-size-3xl) + 6px);
  }

  h2 {
    text-align: left;
    margin: 0 0 30px;
  }

  p {
    margin-bottom: 43px;
  }

  ul {
    font-size: var(--font-size-sm);
    line-height: calc(var(--font-size-sm) + 4px);
    margin: 0 0 30px;

    @media (min-width: 768px) {
      font-size: var(--font-size-base);
      line-height: calc(var(--font-size-base) + 8px);
    }

    li {
      position: relative;
      padding-left: 40px;

      @media (min-width: 768px) {
        padding-left: 40px;
      }
      @media (min-width: 992px) {
        padding-left: 55px;
      }

      &:not(:last-child) {
        margin-bottom: 20px;

        @media (min-width: 992px) {
          margin-bottom: 30px;
        }
      }
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        background: url("/images/plastk-icon.png") no-repeat;
        background-size: cover;

        @media (min-width: 992px) {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;

export const InfoText = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;

  p {
    margin: 0 0 10px;

    a {
      color: var(--white);
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export const ImgHolder = styled.div`
  flex-shrink: 0;
  max-width: 300px;
  margin: 0 auto 20px;

  @media (min-width: 768px) {
    max-width: 350px;
    margin:0;
  }
  @media (min-width: 1200px) {
    max-width: 500px;
  }
`;
