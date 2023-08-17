import styled from "styled-components";

export const CardBox = styled.div`
  position: relative;
  padding: 16px 12px;
  font-size: var(--font-size-xs);
  line-height: calc(var(--font-size-xs) + 4px);
  font-weight: 600;
  text-align: left;
  color: #212338;
  box-shadow: -9.94172px 127.585px 165.695px rgba(19, 20, 22, 0.1);
  border-radius: 20px;
  background: var(--white);

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 21px;
    padding: 16px 16px 22px;
  }

  .head {
    display: flex;
    align-items: center;
    margin: 0 0 12px;

    @media (min-width: 768px) {
      margin: 0 0 15px;
    }
    @media (min-width: 1500px) {
      margin: 0 0 24px;
    }
  }

  .img-box {
    width: 29px;
    height: 29px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary);
    color: var(--white);

    @media (min-width: 768px) {
      width: 39px;
      height: 39px;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .text-box {
    flex-grow: 1;
    padding-left: 7px;

    @media (min-width: 768px) {
      padding-left: 10px;
    }
  }

  .title {
    display: block;
    font-size: var(--font-size-tiny);
    line-height: calc(var(--font-size-tiny) + 4px);
    font-weight: 600;
    text-transform: capitalize;

    @media (min-width: 768px) {
      font-size: var(--font-size-xs);
      line-height: calc(var(--font-size-xs) + 4px);
    }
  }

  .rating {
    list-style: none;
    margin: 0 -2px;
    padding: 0;
    color: var(--brand-color);
    font-size: var(--font-size-xs);

    @media (min-width: 768px) {
      font-size: var(--font-size-sm);
    }

    li {
      padding: 0 2px;
    }
  }
  .text {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
