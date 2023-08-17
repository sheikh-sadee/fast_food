import styled from "styled-components";

export const CardBox = styled.div`
  width: 100%;
  padding: 30px;
  margin: 0 0 16px;
  position: relative;
  border-radius: 40px;
  background: #f6f6f6;
  transition: all ease-in-out 0.3s;

  @media (min-width: 768px) {
    width: 48.5%;
  }

  &:hover {
    color: var(--white);
    background: var(--primary);

    .btn {
      color: var(--tertiary);
      background: var(--white);
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    margin: 0 0 20px;
  }

  .icon-box {
    flex-shrink: 0;
    width: 39px;
  }

  .tag {
    display: inline-block;
    min-width: 102px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: var(--white);
    text-transform: capitalize;
    padding: 8px;
    text-align: center;
    border-radius: 10px;
    background: var(--brand-color);
  }

  .heading {
    display: block;
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 20px;
  }

  .title,
  .subtitle {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0;
  }
  .subtitle {
    font-weight: 400;
  }

  .btn-holder {
    width: 100%;
    padding-top: 30px;
  }

  .btn {
    width: 130px;
    padding: 16px 10px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    text-transform: capitalize;
    outline: none;
    box-shadow: none;
    border: 0;
    color: var(--white);
    border-radius: 50px;
    background: var(--primary);
    transition: all ease-in-out 0.3s;
  }
`;
