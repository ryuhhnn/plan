import React from "react";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import UserNavigation from "../components/layout/UserNavigation";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

export default class Layout extends ParseComponent {
  observe(props, state) {
    return {
      user: ParseReact.currentUser
    };
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    const wrapper = {
      position: "relative",
      minHeight: "100%"
    };

    return (
      <div style={wrapper}>
        {
          this.data.user ?
          <UserNavigation /> :
          <Navigation />
        }
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
