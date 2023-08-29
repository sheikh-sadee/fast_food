import styled from "styled-components";

export const ImgBlock = styled.div`
  position: relative;
  padding: 25px 15px;

  .header {
    text-align: center;
    margin: 0 0 30px;
    h1 {
      font-size: 24px;
      line-height: 28px;

      @media (min-width: 768px) {
        font-size: 30px;
        line-height: 34px;
      }
    }
  }

  .holder{
    @media (max-width: 767px) {
      padding:0;
    }
  }
`;

export const ColHolder = styled.div`
  position: relative;

    display: flex;
    flex-flow: wrap;
    justify-content: center;

`;
