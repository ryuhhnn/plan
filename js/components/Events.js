import React from "react";

import { Glyphicon, ListGroup, ListGroupItem, Panel } from "react-bootstrap";

import AddEvent from "./AddEvent";

export default class Events extends React.Component {
  constructor(props) {
    super(props);
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
            this.props.events ?
            this.props.events.map(function(event) {
              return <ListGroupItem key={event.objectId}>{event.name}</ListGroupItem>
            }) :
            <ListGroupItem key="null">No events created</ListGroupItem>
          }
        </ListGroup>
      </Panel>
    );
  }
}
