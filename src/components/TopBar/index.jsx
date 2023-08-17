/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

import { TopBarWrap } from "./TopBar.styles";
import Link from "next/link";

function TopBar() {
  return (
    <TopBarWrap>
      <div className="holder">
        <p className="socialnetworks">Call Us Today (+351)963 203 810 | Open 7 days a week </p>
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
            <Link href="/">
              <span className="plastk-icons">instagram</span>
            </Link>
          </li>
        </ul>
      </div>
    </TopBarWrap>
  );
}

export default TopBar;
