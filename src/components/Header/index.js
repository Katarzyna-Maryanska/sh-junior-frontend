import React from "react";

import { Root, Wrapper, Logo, Navbar, NavLink } from "./styles";

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <Navbar>
        <li>
          <NavLink href={"#"}>Start</NavLink>
        </li>
        <li>
          <NavLink href={"#"}>My Profile</NavLink>
        </li>
      </Navbar>
    </Wrapper>
  </Root>
);
