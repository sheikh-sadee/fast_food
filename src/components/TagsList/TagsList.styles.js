import styled from "styled-components";

export const TagSection = styled.div`
  position: relative;
  padding: 25px 0;

  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .holder {
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: auto;
    max-width: 930px;
    padding: 0 15px 10px;
    margin: 0 auto;

    @media (min-width: 992px) {
      flex-flow: wrap;
      overflow: hidden;
      padding: 0 15px;
      gap: 15px;
    }
  }

  .btn {
    display: inline-block;
    flex-shrink: 0;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    text-transform: capitalize;
    color: #4a5568;
    padding: 7px 10px;
    border-radius: 8px;
    border: 2px solid rgba(25, 56, 58, 0.7);
    transition: ease-in-out 0.3s;
    background: var(--white);

    @media (min-width: 992px) {
      font-size: 15px;
      padding: 10px 15px;
      border-radius: 12px;
    }

    &:hover {
      color: var(--white);
      background: #19383a;
    }
  }
`;
