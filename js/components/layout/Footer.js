import React from "react";

export default class Footer extends React.Component {
  render() {
    const containerStyle = {
      textAlign: "center",
      width: "100%",
      padding: "25px 0px"
    };

    return (
      <div class="container-fluid" style={containerStyle}>
        <p>Made with by ❤︎ <a href="http://availdigital.co/">Avail Digital Ventures, LLC</a>. © 2016</p>
      </div>
    );
  }
}
