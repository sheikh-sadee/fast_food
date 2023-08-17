import styled from "styled-components";

export const StyledTabs = styled.div`
  flex-grow: 1;
`;

export const Wrap = styled.div`
  overflow: hidden;
  position: relative;

  @media (max-width: 767px) {
    display: none;
  }

  /* &::-webkit-scrollbar {
    height: 8px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
  } */
`;

export const StyledTabList = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: flex-end;
  position: relative;
  z-index: 1;
`;

export const StyledTab = styled.button`
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-transform: capitalize;
  padding: 12px 20px;
  border-radius: 18px 18px 0 0;
  width: 242px;
  color: var(--white);
  position: relative;
  border: none;
  height: ${({ active }) => (active ? "50px" : "40px")};
  transition: 0.3s linear;
  transform: translateY(6px);

  @media (min-width: 768px) {
    height: ${({ active }) => (active ? "75px" : "60px")};
    font-size: var(--font-size-md);
    padding: 15px 10px;
    border-radius: 25px 25px 0 0;
  }

  &:first-child {
    background: #011D2F;
    z-index: ${({ active }) => (active ? "3" : "1")};
    border-top-right-radius: ${({ active }) => (active ? "25px" : "0")};
  }
  &:nth-child(2) {
    background: #0d475b;
    /* border-top-left-radius: ${({ active }) => (active ? "33px" : "0")}; */
    transform: translateX(-25px);
    z-index: ${({ active }) => (active ? "4" : "2")};

    @media (min-width: 768px) {
      transform: translateX(-35px);
    }
  }
  &:last-child {
    background: #212338;
    border-top-left-radius: ${({ active }) => (active ? "25px" : "0")};
    transform: translateX(-50px);
    z-index: ${({ active }) => (active ? "5" : "0")};

    @media (min-width: 768px) {
      transform: translateX(-60px);
    }
  }
`;

export const StyledTabPanel = styled.div`
  position: relative;
  opacity: ${({ active }) => (active ? "1" : "0")};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  height: ${({ active }) => (active ? "auto" : "0")};
  transition: all 0.3s ease-in-out;
  background: var(--primary);
  border-radius: 0 25px 25px 25px;
  overflow: hidden;
  background: var(--primary);
  color: var(--white);
  /* border: ${({ active }) => (active ? "3px solid var(--white)" : "none")}; */
  /* margin-top: -3px;
  position: relative;
  z-index: 9; */
  &:first-child {
    background: #011D2F;
  }
  &:nth-child(2) {
    background: #0d475b;
  }
  &:last-child {
    background: #212338;
  }

  @media (max-width: 767px) {
    border-radius: 0;
  }
`;

export const StyledTabPanels = styled.div`
  /* overflow: hidden; */
`;

export const ContentHolder = styled.div`
  padding: 25px;

  @media (min-width: 768px) {
    padding: 35px 50px;
  }
  @media (min-width: 1500px) {
    padding: 50px 28px 50px 50px;
  }
`;
