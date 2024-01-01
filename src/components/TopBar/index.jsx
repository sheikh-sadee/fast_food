/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

import { TopBarWrap } from "./TopBar.styles";
import Link from "next/link";

function TopBar() {
  return (
    <TopBarWrap>
      <div className="holder">
        <p className="socialnetworks">Call Us Today <a href="tel:(+351)911075925">
          <span class="material-icons-outlined btn-call">
          call
        </span>
        <span className="text">(+351)911 075 925</span></a> | Open 7 days a week </p>
        <ul className="socialnetworks">
          <li>
            <Link href="/">
              <span className="plastk-icons">twitter</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="plastk-icons">facebook</span>
            </Link>
          </li>
          <li>
            <Link href="http://www.instagram.com/tajmahalbraganca">
              <span className="plastk-icons">instagram</span>
            </Link>
          </li>
        </ul>
      </div>
    </TopBarWrap>
  );
}

export default TopBar;
