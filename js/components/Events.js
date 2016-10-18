import React from "react";
import { Link } from "react-router";
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
            this.props.events.length > 0 ?
            this.props.events.map(function(event) {
              return <ListGroupItem key={event.objectId}><Link to={`/event-detail/${event.objectId}`}>{event.name}</Link></ListGroupItem>
            }) :
            <ListGroupItem key="null">No events created</ListGroupItem>
          }
        </ListGroup>
      </Panel>
    );
  }
}
