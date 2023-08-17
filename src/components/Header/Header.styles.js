import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: var(--z-40);
  padding-top: 15px;
  padding-bottom: 15px;
  background: var(--white);
  transition: box-shadow 0.3s ease-in-out, padding 0.3s ease-in-out;

  .btn-login {
    margin-right: 10px;
  }

  .dark-bg & {
    background: #1e1e1e;

    a.button {
      color: var(--body-text-color);
      background: var(--white);

      @media (max-width: 991px) {
        display: block;
        font-size: 16px;
        line-height: 20px;
        padding: 0;
        margin: 0 0 14px;
        background: none;
        text-align: left;
        border-radius: 0;
        color: var(--white);
      }
    }
  }
  .bap-page & {
    a.btn-apply {
       @media (min-width: 992px) {
      background: var(--primaryDarkBlue);
       }
    }
  }
    .bmp-page & {
    a.btn-apply  {
      color: var(--white);
      background: #262250;
    }
  }

  @media (max-width: 991px) {
    a.button {
      display: block;
      font-size: 16px;
      line-height: 20px;
      padding: 0;
      margin: 0 0 14px;
      background: none;
      text-align: left;
      border-radius: 0;
      color: var(--white);
    }
  }
`;

export const BtnWrap = styled.div`
  position: relative;
  width: 276px;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ScrollActive = styled.div`
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  padding-top: 15px;
  padding-bottom: 15px;

  @media (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &.container {
    max-width: 1230px;
    padding: 0 15px;
    margin: 0 auto;
  }
`;

export const LogoHolder = styled.div`
  width: 98px;
  position: relative;

  @media (max-width: 991px) {
    z-index: 5;
  }

  .nav-active & {
    z-index: -1 !important;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const Dropdown = styled.div`
  width: 100%;
  padding-top: 6px;
  display: none;

  @media (min-width: 992px) {
    display: block;
    visibility: hidden;
    opacity: 0;
    width: 250px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    transform: translateY(115%);
    transition: opacity linear 0.1s, visibility linear 0.1s,
      transform linear 0.1s;
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--z-30);
    background: var(--white);
  }

  ul {
    a {
      display: block;
      padding: 6px 0;
      font-weight: 400;
      font-size: 16px;
      color: var(--white);
      position: relative;
      text-decoration: none;
      z-index: 1;

      @media (min-width: 992px) {
        font-size: 16px;
        padding: 5px 10px;
        color: var(--text-color);
      }

      &:hover,
      &.active {
        color: var(--white);

        &:before {
          width: 100%;
        }
      }

      &:before {
        display: none;
        content: "";
        width: 0;
        transition: width linear 0.3s;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: var(--body-text-color);
        z-index: -1;

        @media (min-width: 992px) {
          display: block;
        }
      }
    }
  }
`;

export const MainNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 75px 15px 50px;
  transform: translateX(105%);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  background: var(--white);

  @media (max-width: 991px) {
    background: var(--primary);
  }

  .nav-active & {
    transform: none;
  }

  .dark-bg & {
    background: #1e1e1e;
  }

  @media (max-width: 767px) {
    transition: all 0.3s;
  }

  @media (min-width: 768px) {
    width: 350px;
    padding: 60px 15px;
    transform: translateX(400px);
  }

  @media (min-width: 992px) {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: static;
    width: auto;
    padding: 0 0 0 15px;
    transform: none;
    box-shadow: none;
  }
`;

export const Menu = styled.ul`
  font-size: var(--font-size-lg);
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 5px;

  @media (min-width: 992px) {
    display: flex;
    gap: 25px;
    margin: 0;
    padding-right: 30px;
    font-size: var(--font-size-base);
  }
  @media (min-width: 1200px) {
    gap: 30px;
  }
  @media (min-width: 1400px) {
    gap: 40px;
  }

  > li {
    padding-top: 8px;
    padding-bottom: 8px;
    position: relative;

    @media (min-width: 992px) {
      padding-top: 0;
      padding-bottom: 0;
    }

    @media (hover: none) {
      &:hover {
        ${Dropdown} {
          display: block;
        }
      }
    }

    &:hover {
      @media (min-width: 992px) {
        ${Dropdown} {
          transform: translateY(32px);
          visibility: visible;
          opacity: 1;
        }

        a {
          &:before {
            visibility: visible;
            opacity: 1;
            left: 0;
          }
        }
      }
    }

    > a {
      display: block;
      color: var(--text-color);
      padding: 3px 0;
      position: relative;
      text-decoration: none;
      z-index: 1;

      @media (min-width: 992px) {
        padding: 6px 0;
      }

      @media (max-width: 991px) {
        color: var(--white);
      }

      .dark-bg & {
        color: var(--white);
      }

      &:after {
        content: "";
        background: var(--body-text-color);
        position: absolute;
        top: 0;
        bottom: 0;
        left: -15px;
        right: -15px;
        z-index: -1;
        opacity: 0;
        visibility: hidden;
        border-radius: 40px;
        transition: 0.3s linear;
      }

      &:before {
        visibility: hidden;
        opacity: 0;
        transition: all 0.5s;
        content: "";
        position: absolute;
        left: 50px;
        bottom: 1px;
        width: 20px;
        height: 3px;
        border-radius: 50px;
        background: var(--primary);

        .dark-bg & {
          background: var(--white);
        }

        @media (max-width: 767px) {
          display: none;
        }
      }

      &.active {
        color: var(--white);

        &:after {
          opacity: 1;
          visibility: visible;
        }
        &:before {
          display: none;
        }
      }

      .chevron {
        display: none;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-size: var(--font-size-tiny);
        line-height: 1;
        margin-top: 1px;

        @media (min-width: 992px) {
          display: block;
          right: -13px;
          font-size: 9px;
        }
      }
    }
  }
`;

export const NavOpener = styled.button`
  position: absolute;
  top: 0;
  right: 15px;
  width: 45px;
  height: 44px;
  border: 0;
  border-radius: 50px;
  background: none;
  z-index: 9;

  @media (min-width: 992px) {
    display: none;
  }

  .nav-active & {
    width: 35px;
    height: 35px;
  }

  &:before,
  &:after,
  span {
    background: var(--primary);
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 18%;
    right: 18%;
    height: 3px;
    margin-top: -2px;
    transition: all 0.2s linear;

    .dark-bg & {
      background: var(--white);
    }
  }

  &:before,
  &:after {
    content: "";
    top: 30%;
  }

  &:after {
    top: 70%;
  }

  .nav-active & {
    &:before,
    &:after,
    span {
      background: var(--white);
    }
    span {
      opacity: 0;
    }

    &:after,
    &:before {
      transform: rotate(45deg);
      top: 50%;
      left: 15%;
      right: 15%;
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;
