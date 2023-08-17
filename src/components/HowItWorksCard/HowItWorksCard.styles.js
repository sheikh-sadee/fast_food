import styled from "styled-components";

export const CardWidget = styled.div`
  border: 2px solid rgba(160, 216, 0, 0.33);
  border-radius: 40px;
  padding: 35px 20px;
  text-align: center;
  color: var(--black);
  transition: all 0.3s;

  &:hover {
    color: var(--white);
    background: var(--black);
  }
`;

export const ImgHolder = styled.div`
  width: 50px;
  margin:0 auto 16px;

  img {
    display:block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
`;

export const TextHolder = styled.div`
  position:relative;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 19px;
`;
