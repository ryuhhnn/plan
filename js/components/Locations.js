import React from "react";

import { Glyphicon, ListGroup, ListGroupItem, Panel } from "react-bootstrap";

import AddLocation from "./AddLocation";
import EditLocation from "./EditLocation";

export default class Locations extends React.Component {
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
          <ListGroupItem>Location 1 <EditLocation /></ListGroupItem>
          <ListGroupItem>Location 2 <EditLocation /></ListGroupItem>
        </ListGroup>
      </Panel>
    );
  }
}
