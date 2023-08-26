import styled from 'styled-components';

// Styled Components
export const OurMenuSection = styled.section`
  padding: 100px 0;
`;

export const PageTitle = styled.div`
  padding: 30px 0px;
`;

export const PageTitleHeading = styled.h1`
  color: #c0392b;
  font-weight: 700;
  line-height: 2;
  margin-bottom: 0;
  position: relative;
  text-transform: capitalize;
  text-align:center;

  &::before {
    background: #c0392b;
    width: 70px;
    height: 2px;
    position: absolute;
    content: '';
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    position: absolute;
    content: '';
    background: #fbc531;
    width: 30px;
    height: 2px;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;


export const SingleLine = styled.div`
  width: 50px;
  height: 2px;
  margin: 10px auto;
  background-color: #c0392b;
`;

export const MenuTab = styled.ul`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const TabLink = styled.a`
  color: #000;
  transition: 0.3s;

  &:hover {
    background: #c0392b;
    color: #fff;
    border: 1px solid #c0392b;
  }

  &.active {
    background: #c0392b;
    color: #fff;
    font-weight: 700;
    border: 1px solid #c0392b;
    text-transform: capitalize;
  }
`;

export const MenuContent = styled.div`
  padding-left: 200px;
`;

export const SingleMenu = styled.div`
  position: relative;
  margin-bottom: 75px;
  transition: 0.3s;

  &:hover img {
    -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
  }

  img {
    width: 33%;
    position: absolute;
    height: 140px;
    -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    transition: 0.3s;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

export const MenuButton = styled.a`
  margin: 0 auto;
  display: block;
  width: 140px;

  .btn-danger {
    background: #c0392b;
    border: 1px solid #c0392b;
    transition: 0.3s;
    position: relative;
    z-index: 1;
    text-transform: capitalize;
    font-weight: 700;
    overflow: hidden;
    padding: 15px 25px;

    &::before {
      position: absolute;
      content: '';
      background: #e74c3c;
      width: 100%;
      height: 100%;
      left: -100%;
      top: 100%;
      transition: 0.3s;
      z-index: -1;
    }

    &:hover:before {
      top: 0;
      left: 0;
    }
  }
`;