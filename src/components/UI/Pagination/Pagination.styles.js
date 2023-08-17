import styled from "styled-components";

export const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PaginationHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 23px;
`;

export const TotalItems = styled.span`
  font-size: var(--font-size-xs);
`;

export const PaginationButton = styled.button`
  position: relative;
  display: flex;
  width: 37px;
  height: 37px;
  padding: 0;
  font-size: 14px;
  cursor: pointer;
  color: #19191b;
  border: 0;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05) inset;

  &:hover {
    color: var(--primary);
  }
  &.selected {
    background: var(--primary);
    color: var(--white);
  }

  .icon {
    color: #20443c;
  }

  &.btn-prev,
  &.btn-next {
    gap: 5px;
    margin: 0 15px 0 0;
    width: auto;
    height: auto;
    color: #9a9a9a;
    font-weight: 600;
    box-shadow: none;
    background: none;
 @media (min-width: 768px) {
        margin: 0 50px 0 0;
  }
    img {
      margin: 2px 0 0;
    }
  }

  &.btn-next {
    margin: 0 0 0 15px;
     @media (min-width: 768px) {
        margin: 0 0 0 50px;
  }
  }
`;

export const SelectHolder = styled.div`
  min-width: 110px;
  .react-select__control {
    font-size: var(--font-size-xs);
    padding-left: 10px;
    padding-right: 10px;
  }
  .react-select__menu {
    font-size: var(--font-size-xs);
  }
`;
