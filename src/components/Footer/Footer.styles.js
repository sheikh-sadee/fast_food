import styled from "styled-components";

export const FooterCon = styled.footer`
  width: 100%;
  position: relative;
  padding-top: 35px;
  padding-bottom: 20px;
  z-index: 1;
  color: var(--white);
  font-size: var(--font-size-tiny);
  line-height: calc(var(--font-size-tiny) + 3px);
  background: #750119;

  .title {
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 24px;
    margin-bottom: 10px;

    .plastk-icons {
      transition: transform 0.3s linear;
      display: block;
      @media (min-width: 768px) {
        display: none;
      }
    }
    &.opened {
      .plastk-icons {
        transform: rotate(180deg);
      }
    }
  }

  .h1 {
    line-height: 1.1;
    font-weight: 600;
    color: var(--white);
    text-align: center;
    margin: 0;
  }
`;

export const Logo = styled.div`
  width: 150px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    margin: 0 auto 15px;
  }
  @media (min-width: 1200px) {
    margin: 0 0 15px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;

  a {
    display: block;
    color: var(--white);

    &:hover {
      color: var(--white);
    }
  }

  .column {
    &.logo-column {
      font-size: var(--font-size-xs);
      line-height: calc(var(--font-size-xs) + 3px);
      margin-bottom: 10px;
    }
  }
`;

export const TextBox = styled.div`
  width: 100%;
`;

export const FooterNav = styled.ul`
  text-transform: capitalize;

  font-weight: 600;

  li {
    &:first-child {
      margin-top: 13px;
      @media (min-width: 768px) {
        margin-top: 0;
      }
    }
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  .FooterBgGrey & {
    a {
      color: var(--black);
    }
  }
`;

export const Socialnetworks = styled.ul`
  list-style: none;
  font-size: 25px;
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
`;

export const TermsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 21px;
  margin-bottom: 25px;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    gap: 33px;
  }
  li {
    &:first-child {
      width: 100%;
      @media (min-width: 768px) {
        width: auto;
      }
      a {
        display: flex;
        align-items: center;
        gap: 9px;
      }
      img {
        flex-shrink: 0;
      }
    }
  }
  a {
    display: block;
    color: var(--white);
    font-weight: 600;

    &:hover {
      color: var(--white);
    }

    .FooterBgGrey & {
      color: var(--black);
    }
  }
`;

export const FooterBtn = styled.div`
  margin-bottom: 41px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 80px;
  }
`;

export const ContainerFooter = styled.div`
  max-width: 1063px;
  margin: 0 auto;
  padding: 0 15px;
`;
