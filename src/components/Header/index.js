import React from "react";

import { Root, Wrapper, Logo, Navbar, NavLink } from "./styles";

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <Navbar>
        <li>
          <NavLink to={"/"}>Start</NavLink>
        </li>
        <li>
          <NavLink to={"/my-profile"}>Profile</NavLink>
        </li>
      </Navbar>
    </Wrapper>
  </Root>
);
