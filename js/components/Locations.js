import React from "react";

import { Glyphicon, ListGroup, ListGroupItem, Panel } from "react-bootstrap";

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
          <ListGroupItem>Create New <Glyphicon glyph="plus" /></ListGroupItem>
          <ListGroupItem>Location 1</ListGroupItem>
          <ListGroupItem>Location 2</ListGroupItem>
        </ListGroup>
      </Panel>
    );
  }
}
