import React from "react";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

import { Glyphicon, ListGroup, ListGroupItem, Panel } from "react-bootstrap";

import AddEvent from "./AddEvent";

export default class Events extends ParseComponent {
  constructor(props) {
    super(props);
  }

  observe(props, state) {
    return {
      user: ParseReact.currentUser,
      events: new Parse.Query("Events").equalTo("createdBy", this.data.user).ascending("createdAt")
    };
  }

  render() {
    const panelStyle = {
      borderRadius: "0px",
      textAlign: "center"
    };
    const panelHeadStyle = {
      textAlign: "center"
    };
    const eventsPanelTitle = (
      <div style={panelHeadStyle}>
        <h3>Events</h3>
      </div>
    );

    return (
      <Panel header={eventsPanelTitle} style={panelStyle}>
        <ListGroup fill>
          <ListGroupItem><AddEvent /></ListGroupItem>
          {
            this.data.events ?
            this.data.events.map(function(event) {
              return <ListGroupItem>{event.name}</ListGroupItem>
            }) :
            <ListGroupItem>No events created</ListGroupItem>
          }
        </ListGroup>
      </Panel>
    );
  }
}
