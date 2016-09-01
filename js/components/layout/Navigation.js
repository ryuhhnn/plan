import React from "react";
import { Link, IndexLink } from "react-router";

import { Nav, Navbar, NavItem } from "react-bootstrap";

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link href="/" to="/">Plan.</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem componentClass={Link} href="login" to="login">Login</NavItem>
          <NavItem componentClass={Link} href="register" to="register">Register</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
