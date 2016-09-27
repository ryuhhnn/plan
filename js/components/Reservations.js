import React from "react";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

import { Glyphicon, ListGroup, ListGroupItem, Panel } from "react-bootstrap";

import AddReservation from "./AddReservation";
import Message from "./Message";

export default class Reservations extends ParseComponent {
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
        <h3>Reservations</h3>
      </div>
    );

    return (
      <Panel header={locationsPanelTitle} style={panelStyle}>
        <ListGroup fill>
          <ListGroupItem><AddReservation /></ListGroupItem>
          <ListGroupItem>Sally Joe <Message /></ListGroupItem>
          <ListGroupItem>Billy Bob <Message /></ListGroupItem>
        </ListGroup>
      </Panel>
    );
  }
}
