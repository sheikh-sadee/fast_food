/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import LogoImg from "../../../public/logo.png";
import CanadaFlag from "../../../public/canada-flag.svg";
import { useMediaPredicate } from "react-media-hook";

import * as React from "react";
import { NavData } from "../../data/NavData";
import { container } from "../../styles/common";
import AppButton from "../AppButton";
import {
  FooterCon,
  Logo,
  FooterContent,
  FooterNav,
  TextBox,
  Socialnetworks,
  TermsList,
  FooterBtn,
  ContainerFooter,
} from "./Footer.styles";

function FooterColumn({ item, ...props }) {
  const [open, setOpen] = React.useState(false);
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");

  React.useEffect(() => {
    if (biggerThan768) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [biggerThan768]);

  return (
    <div className="column" {...props}>
      <span
        className={`title ${open ? "opened" : ""}`}
        onClick={() => setOpen(!open)}
        onKeyPress={() => setOpen(!open)}
        role="button"
        tabIndex="0"
      >
        {item.title}
        <span className="plastk-icons">chevron_down</span>
      </span>

      {item?.subMenu && (
        <FooterNav>
          {item?.subMenu
            .filter(({ live }) =>
              process.env.NEXT_PUBLIC_ENV_PRAM === "live" ? live : true
            )
            .map(
              (dropdownItem, dropdownItemIndex) =>
                open && (
                  <li key={dropdownItemIndex}>
                    {dropdownItem.path && !dropdownItem.externalLink && (
                      <Link href={dropdownItem.path}>{dropdownItem.title}</Link>
                    )}
                    {dropdownItem.path && dropdownItem.externalLink && (
                      <a href={dropdownItem.path}>{dropdownItem.title}</a>
                    )}
                    {!dropdownItem.path && !dropdownItem.externalLink && (
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        {dropdownItem.title}
                      </a>
                    )}
                  </li>
                )
            )}
        </FooterNav>
      )}
    </div>
  );
}

function Footer() {
  const router = useRouter();
  const { pathname } = router;
  let footerColorClass = "";
  const [open, setOpen] = React.useState(false);
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");

  React.useEffect(() => {
    if (biggerThan768) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [biggerThan768]);

  // Determine the color class based on the current route
  if (pathname === "/plastk-rewards-app") {
    footerColorClass = "FooterBgGrey";
  } else if (pathname === "/plastk-bmp") {
    footerColorClass = "FooterBgDarkBlue";
  } else if (pathname === "/plastk-credit-card") {
    footerColorClass = "FooterBgDark";
  } else if (pathname === "/plastk-bap") {
    footerColorClass = "FooterBgPrimaryDarkBlue";
  }
  return (
    <FooterCon className={footerColorClass}>
      <ContainerFooter>
        <FooterContent>
          <div className="column logo-column">
            <Logo>
              <Link href="/">
                <Image
                  className="primary-logo"
                  src={LogoImg}
                  placeholder="blurred"
                  alt="Plastk"
                />
              </Link>
            </Logo>
          </div>
          <div className="column">
            <h2 className="h1">Taj Mahal</h2>
          </div>
          <div className="column">
            <span className="title">
              Social
              <span className="plastk-icons">chevron_down</span>
            </span>
            <Socialnetworks>
              <li>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="plastk-icons">twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="plastk-icons">facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="plastk-icons">instagram</span>
                </Link>
              </li>
            </Socialnetworks>
          </div>
        </FooterContent>
      </ContainerFooter>
    </FooterCon>
  );
}

export default Footer;
