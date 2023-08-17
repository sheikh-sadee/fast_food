import { createGlobalStyle, css } from "styled-components";
import Variables from "../styles/variables.css";
import Globals from "../styles/global";
import Common from "../styles/common";
import Typography from "../styles/typography";
import Fonts from "../styles/Fonts";
import PlastkIcons from "../styles/icons-font";
import Layout from "../components/layout.jsx";
import { useRouter } from "next/router";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loader from "@/components/UI/Loader";

const Styling = css`
  ${Variables}
  ${Globals}
  ${Typography}
    ${Common}
     ${Fonts}
      ${PlastkIcons}
`;
const GlobalStyless = createGlobalStyle`
  ${Styling}
`;
const addClassToBody = (className) => {
  document.body.classList.add(className);
};

const removeClassFromBody = (className) => {
  document.body.classList.remove(className);
};
const urlToClassMap = {
  // "/plastk-secured-credit-card": "dark-bg",
  "/plastk-credit-card": "dark-bg",
  "/plastk-bap": "bap-page",
  "/plastk-bmp": "bmp-page",
  // Add more URL-to-class mappings here
};
const handleRouteChange = (newPathname) => {
  Object.entries(urlToClassMap).forEach(([url, className]) => {
    if (newPathname === url) {
      addClassToBody(className);
    } else {
      removeClassFromBody(className);
    }
  });
};
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      disable: shouldDisableAOS(),
    });
    if (window.innerWidth < 768) {
      AOS.init({
        disable: true, // Disable AOS animations
      });
    }
    function shouldDisableAOS() {
      // Check if the loader is visible
      return isLoading;
    }
  }, [isLoading]);
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
      disableScroll();
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false);
      enableScroll();
    };
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.documentElement.style.height = "100%";
    };

    const enableScroll = () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);
  useEffect(() => {
    const { pathname } = router;

    handleRouteChange(pathname);

    const handleRouteChangeComplete = (newPathname) => {
      handleRouteChange(newPathname);
    };

    // Subscribe to router events
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // Clean up the event listener
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      <GlobalStyless />
      <Layout>
        {isLoading && (
          <div
            css={`
              position: fixed;
              top: 0;
              width: 100%;
              overflow: hidden;
              z-index: 10;
              height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(
                180deg,
                rgba(25, 56, 58, 0) 0%,
                #19383a 100%
              );
              backdrop-filter: blur(12.5px);
            `}
          >
            <Loader />
          </div>
        )}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
