import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import logoImg from "./assets/logo.svg";


export const Logo = () => <img alt="Startup Development House" src={logoImg} />;

export const Navbar = styled.ul`
  width: 10rem;
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({theme}) => theme.color.black};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  text-decoration: none;
`;

export const Root = styled.header`
  height: 5rem;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.size.contentWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
