import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { Header } from "components/Header";
import { Home } from "pages/Home";
import { Profile } from "pages/Profile";
import { NotFound } from "pages/NotFound";

import { GlobalStyle, theme } from "./styles";

export const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/my-profile" component={Profile}/>
        <Route component={NotFound}/>
      </Switch>
    </ThemeProvider>
  </Router>
);
