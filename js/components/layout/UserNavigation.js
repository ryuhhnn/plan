import React from "react";
import { Link, IndexLink } from "react-router";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

import { Nav, Navbar, NavItem } from "react-bootstrap";

export default class UserNavigation extends ParseComponent {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    Parse.User.logOut();
    this.context.router.push("/");
  }

  observe(props, state) {
    return {
      user: ParseReact.currentUser
    };
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link href="/" to="/">Plan.</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem componentClass={Link} href="dashboard" to="dashboard">Dashboard</NavItem>
          <NavItem onClick={this.logOut}>Log Out</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
