import React from "react";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

export default class LocationDetail extends ParseComponent {
  constructor(props) {
    super(props);
  }

  observe(props, state) {
    const objectId = this.props.locationId;
    return {
      locations: new Parse.Query("Locations").equalTo("objectId", objectId)
    };
  }

  render() {
    var thisLocation = { name: "", address: "" };
    if(this.data.locations.length > 0) {
      thisLocation = {
        name: this.data.locations[0].name,
        address: this.data.locations[0].address
      };
    }

    return (
      <div>
        <address><strong>{thisLocation.name}</strong><br />{thisLocation.address}</address>
      </div>
    );
  }
}
