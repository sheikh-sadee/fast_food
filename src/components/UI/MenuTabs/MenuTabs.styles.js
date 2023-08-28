import styled from "styled-components";

export const StyledTabs = styled.div`
  flex-grow: 1;
`;

export const Wrap = styled.div`
  overflow: hidden;
  position: relative;
`;

export const StyledTabList = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  position: relative;
  margin-bottom: 30px;
  z-index: 1;
`;

export const StyledTab = styled.button`
  font-size: 16px;
  line-height:18px;
  font-weight: 600;
  text-transform: capitalize;
  padding: 10px 20px;
  position: relative;
  border-radius: 5px 5px 0 0;
  border-width: 0 0 1px;
  border-style:solid;
  border-color:#ccc;
  transition: 0.3s linear;
  background: ${({ active }) => (active ? 'var(--secondary)' : "#fff")};

  &:hover {
    background: var(--secondary);
  }
`;

export const StyledTabPanel = styled.div`
  position: relative;
  opacity: ${({ active }) => (active ? "1" : "0")};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  height: ${({ active }) => (active ? "auto" : "0")};
  transition: all 0.3s ease-in-out;
  color:#000;
  overflow: hidden;
  color: var(--white);
  position: relative;
  z-index: 9; */
`;

export const StyledTabPanels = styled.div`
  /* overflow: hidden; */
`;

export const ContentHolder = styled.div`
  padding: 25px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  gap:20px;
`;
