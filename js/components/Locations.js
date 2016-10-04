import React from "react";
import { Glyphicon, ListGroup, ListGroupItem, Panel } from "react-bootstrap";
import AddLocation from "./AddLocation";
import EditLocation from "./EditLocation";

export default class Locations extends React.Component {
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
            this.props.locations ?
            this.props.locations.map(function(location) {
              return <ListGroupItem key={location.objectId}>{location.name} <EditLocation location={location} /></ListGroupItem>
            }) :
            <ListGroupItem key="null">No locations created</ListGroupItem>
          }
        </ListGroup>
      </Panel>
    );
  }
}
