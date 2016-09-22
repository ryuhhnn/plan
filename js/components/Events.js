import React from "react";

import { Glyphicon, ListGroup, ListGroupItem, Panel } from "react-bootstrap";

import AddEvent from "./AddEvent";

export default class Events extends React.Component {
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
          <ListGroupItem>Event 1</ListGroupItem>
          <ListGroupItem>Event 2</ListGroupItem>
        </ListGroup>
      </Panel>
    );
  }
}
