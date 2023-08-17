import styled from "styled-components";

export const TabBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 0px;
  text-align: left;
  font-size: var(--font-size-sm);

  @media (min-width: 768px) {
    gap: 30px;
    font-size: var(--font-size-lg);
    line-height: calc(var(--font-size-lg) + 6px);
    flex-direction: row;
  }
  @media (min-width: 1500px) {
    gap: 60px;
  }

  h3 {
    text-align: left;
    color: var(--white);

    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 30px;
    }
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

export const TextHolder = styled.div``;
export const ImgHolder = styled.div`
  flex-shrink: 0;
  align-self: flex-start;
  max-width: 300px;
`;
