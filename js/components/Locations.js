import React from "react";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

import { Glyphicon, ListGroup, ListGroupItem, Panel } from "react-bootstrap";

import AddLocation from "./AddLocation";
import EditLocation from "./EditLocation";

export default class Locations extends ParseComponent {
  constructor(props) {
    super(props);
  }

  observe(props, state) {
    return {
      user: ParseReact.currentUser,
      locations: new Parse.Query("Locations").equalTo("createdBy", this.data.user).ascending("createdAt")
    }
  }

  render() {
    const panelStyle = {
      borderRadius: "0px",
      textAlign: "center"
    };
    const panelHeadStyle = {
      textAlign: "center"
    };
    const locationsPanelTitle = (
      <div style={panelHeadStyle}>
        <h3>Locations</h3>
      </div>
    );

    return (
      <Panel header={locationsPanelTitle} style={panelStyle}>
        <ListGroup fill>
          <ListGroupItem><AddLocation /></ListGroupItem>
          {
            this.data.locations ?
            this.data.locations.map(function(location) {
              return <ListGroupItem>{location.name} <EditLocation locationId={location.id} /></ListGroupItem>
            }) :
            <ListGroupItem>No locations created</ListGroupItem>
          }
        </ListGroup>
      </Panel>
    );
  }
}
