/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Logo from "../../../public/logo.png";
import * as React from "react";
import Link from "next/link";
//import { Container } from '../../styles/common';
import {
  HeaderWrap,
  NavOpener,
  LogoHolder,
  Flex,
  MainNav,
  Menu,
  Dropdown,
  ScrollActive,
} from "./Header.styles";
import Button from "../UI/Button";
import { NavData } from "../../data/NavData";
import { useRouter } from "next/router";
import LogoWhite from "../../../public/logo-white.svg";
import TopBar from "../../../src/components/TopBar"
function Header() {
  const router = useRouter();
  const { pathname } = router;
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [logo, setLogo] = React.useState(Logo);
  const handleClick = () => {
    document.body.classList.toggle("nav-active");
  };

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setScrollPosition(scrolled);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    const filteredPage = NavData.filter((page) => page.path === pathname)[0];
    if (filteredPage?.bgDark) {
      setLogo(LogoWhite);
    } else {
      setLogo(Logo);
    }
  }, []);
  React.useEffect(() => {
    const filteredPage = NavData.filter((page) => page.path === pathname)[0];
    if (filteredPage?.bgDark) {
      setLogo(LogoWhite);
    } else {
      setLogo(Logo);
    }
  }, [pathname]);

  return (
    <HeaderWrap className={scrollPosition > 0.02 && ScrollActive}>
      <TopBar />
      <Flex className="container">
        <LogoHolder>
          <Link href="/">
            <Image src={logo} alt="Plastk" />
          </Link>
        </LogoHolder>
        <NavOpener type="button" onClick={handleClick}>
          <span />
        </NavOpener>
        <MainNav>
          <Menu>
            {NavData.filter(({ live }) =>
              process.env.NEXT_PUBLIC_ENV_PRAM === "live" ? live : true
            ).map(
              // this will stop the view from loading in production if the view is not meant for lives
              (item, index) => (
                <li key={index}>
                  {item.path && !item.externalLink && (
                    <Link href={`${item.path}/`} activeClassName="active">
                      {item.title}{" "}
                      {item?.subMenu && (
                        <span className="plastk-icons chevron">
                          chevron_down
                        </span>
                      )}
                    </Link>
                  )}
                  {item.path && item.externalLink && (
                    <Link href={item.path}>
                      {item.title}{" "}
                      {item?.subMenu && (
                        <span className="plastk-icons chevron">
                          chevron_down
                        </span>
                      )}
                    </Link>
                  )}
                  {!item.path && !item.externalLink && (
                    <Link href="/" onClick={(e) => e.preventDefault()}>
                      {item.title}{" "}
                      {item?.subMenu && (
                        <span className="plastk-icons chevron">
                          chevron_down
                        </span>
                      )}
                    </Link>
                  )}

                  {item?.subMenu && (
                    <Dropdown>
                      <ul>
                        {item?.subMenu
                          .filter(({ live }) =>
                            process.env.NEXT_PUBLIC_ENV_PRAM === "live"
                              ? live
                              : true
                          )
                          .map(
                            // this will stop the view from loading in production if the view is not meant for lives
                            (dropdownItem, dropdownItemIndex) =>
                              !dropdownItem.footerOnly ? (
                                <li key={dropdownItemIndex}>
                                  {dropdownItem.path &&
                                    !dropdownItem.externalLink && (
                                      <Link
                                        href={`${dropdownItem.path}/`}
                                        activeClassName="active"
                                      >
                                        {dropdownItem.title}
                                      </Link>
                                    )}
                                  {dropdownItem.path &&
                                    dropdownItem.externalLink && (
                                      <Link href={dropdownItem.path}>
                                        {dropdownItem.title}
                                      </Link>
                                    )}
                                  {!dropdownItem.path &&
                                    !dropdownItem.externalLink && (
                                      <Link
                                        href="/"
                                        onClick={(e) => e.preventDefault()}
                                      >
                                        {dropdownItem.title}
                                      </Link>
                                    )}
                                </li>
                              ) : (
                                ""
                              )
                          )}
                      </ul>
                    </Dropdown>
                  )}
                </li>
              )
            )}
          </Menu>
        </MainNav>
      </Flex>
    </HeaderWrap>
  );
}

export default Header;
