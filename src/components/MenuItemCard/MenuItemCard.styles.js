import styled from "styled-components";

export const ItemCard = styled.div`
  width: 100%;
  align-items: center;
  position: relative;
  gap: 20px;
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  color: var(--black);

  @media (min-width: 700px) {
    width: 48%;
    font-size: 16px;
    line-height: 20px;
  }
  @media (min-width: 992px) {
    display: flex;
    align-items:flex-start;
  }

  .textwrap {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #000;
    margin-bottom: 10px;
    padding: 0 0 10px;
    
    .price {
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 700;
    }
  }

  h3 {
    text-align: left;
    margin: 0;
    font-size: 18px;
    line-height: 22px;
  }

  p {
    margin: 0 0 10px;
  }
`;

export const TextHolder = styled.div`
  flex-grow: 1;
`;
export const ImgHolder = styled.div`
  align-self: flex-start;
  flex-shrink: 0;
  max-width: 100%;
  
  margin: 0 0 15px;
  overflow:hidden;
  border-radius:10px;

  @media (min-width: 992px) {
    max-width: 175px;
    height:175px;
    margin: 0;
    
  }
  img {
    border-radius: 8px;
  }
`;
