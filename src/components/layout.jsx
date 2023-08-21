/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useEffect } from "react";
// import { useStaticQuery, graphql } from 'gatsby';
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 155px;

  @media (min-width: 992px) {
    padding-top: 138px;
  }
`;

const BtnBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 20px;
  transform: translateX(-80px);
  width: 40px;
  height: 40px;
  color: var(--white);
  border-radius: 0 5px 5px 0;
  background: var(--white);
  z-index: 9;
  opacity: 0;
  visibility: hidden;
  border: none;
  padding: 0;
  transition: all 0.3s;
  transform: rotate(180deg);
  border: 1px solid rgba(33, 35, 56, 0.1);
  color: var(--black);

  .plastk-icons {
    transform: rotate(180deg);
    font-size: var(--font-size-xl);
  }
`;

const ToastCon = styled.div`
  .Toastify__toast-container {
    z-index: var(--z-90);
    @media (max-width: 480px) {
      padding: 10px;
    }
  }
  .Toastify__toast {
    padding: 0;
    min-height: 0;
    border-radius: 8px;
    font-family: inherit;
  }
  .Toastify__toast--default {
    background: none;
  }
  .Toastify__toast-body {
    padding: 0;
  }
  .Toastify__close-button {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
`;

function Layout({ children }) {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  useEffect(() => {
    const backToTop = document.getElementById("back-to-top");
    function backToTopFade() {
      if (window.scrollY > 150) {
        backToTop.style.cssText =
          "opacity: 1; visibility: visible; transform: translateX(0);";
      } else {
        backToTop.style.cssText =
          "opacity: 0; visibility: hidden; transform: translateX(-80px);";
      }
    }
    window.addEventListener("scroll", backToTopFade);
    setTimeout(() => {
      window.scrollBy(0, 1);
    }, 5000);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Wrapper>
        <Header />
        <main>{children}</main>
        <Footer />
        <BtnBack type="button" id="back-to-top" onClick={scrollToTop}>
          <span className="plastk-icons">chevron_down</span>
        </BtnBack>
      </Wrapper>
      <ToastCon>
        <ToastContainer />
      </ToastCon>
    </>
  );
}

export default Layout;
