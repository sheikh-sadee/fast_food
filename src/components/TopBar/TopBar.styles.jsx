import styled from "styled-components";

export const TopBarWrap = styled.header`
  position: relative;
  width: 100%;
  padding: 10px;
  margin: 0 0 10px;
  color: var(--white);
  background: var(--secondary);
  z-index: var(--z-40);

  .holder {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .socialnetworks {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 10px;

    li {
      a {
        color: var(--white);
      }
    }
  }
`;
