import React from "react";

import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
