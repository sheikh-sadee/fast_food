import styled from "styled-components";

export const ItemCard = styled.div`
  width: 48%;
  display: flex;
  align-items: center;
  position: relative;
  gap: 20px;
  text-align: left;
  font-size: 16px;
  line-height: 20px;
  color: var(--black);

  .textwrap {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #000;
    margin-bottom: 20px;
    padding: 0 0 10px;

    .price {
      display: block;
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
    }
  }

  h3 {
    text-align: left;
    margin: 0;
    font-size: 24px;
      line-height: 30px;
  }

  p {
    margin: 0 0 30px;
  }

  .btn-box {
    @media (max-width: 767px) {
      position: absolute;
      left: 25px;
      bottom: 20px;
    }
  }
`;

export const TextHolder = styled.div`
  flex-grow: 1;
`;
export const ImgHolder = styled.div`
  align-self: flex-start;
  flex-shrink:0;
  max-width: 180px;
`;
