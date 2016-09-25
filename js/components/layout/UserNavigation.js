import React from "react";
import { Link, IndexLink } from "react-router";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

import { Nav, Navbar, NavItem } from "react-bootstrap";

export default class UserNavigation extends ParseComponent {
  constructor(props) {
    super(props);
    // Bind any class functions
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
          {
            this.data.user ?
            <Navbar.Text>Signed in as: {this.data.user.get("name")}</Navbar.Text> :
            null
          }
        </Navbar.Header>
        <Nav pullRight>
          <NavItem componentClass={Link} href="dashboard" to="dashboard">Dashboard</NavItem>
          <NavItem onClick={this.logOut}>Log Out</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
