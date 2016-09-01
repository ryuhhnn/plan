import React from "react";
import { Link, IndexLink } from "react-router";

import { Nav, Navbar, NavItem } from "react-bootstrap";

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Plan.</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem componentClass={IndexLink} href="/" to="/">Home</NavItem>
          <NavItem href="#">Features</NavItem>
          <NavItem href="#">Pricing</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem componentClass={Link} href="login" to="login">Login</NavItem>
          <NavItem componentClass={Link} href="register" to="register">Register</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
