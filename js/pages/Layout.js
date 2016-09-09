import React from "react";

import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";

export default class Layout extends React.Component {
  render() {
    const wrapper = {
      position: "relative",
      minHeight: "100%"
    };

    return (
      <div style={wrapper}>
        <Navigation/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
