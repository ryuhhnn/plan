import React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import EditEvent from "../components/EditEvent";
import LocationDetail from "../components/LocationDetail";
import Reservations from "../components/Reservations";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

export default class EventDetail extends ParseComponent {
  constructor(props) {
    super(props);
  }

  observe(props, state) {
    const objectId = this.props.params.eventId;
    return {
      events: new Parse.Query("Events").equalTo("objectId", objectId).ascending("createdAt"),
      reservations: new Parse.Query("Reservations").equalTo("eventId", objectId).ascending("createdAt")
    };
  }

  render () {
    const marginStyle = {
      marginTop: "70px",
      width: "100%",
      height: "100%"
    };

    var thisEvent = { objectId: "", name: "", details: "", date: "", location: "" };
    if(this.data.events.length > 0) {
      thisEvent = {
        objectId: this.data.events[0].objectId,
        name: this.data.events[0].name,
        details: this.data.events[0].details,
        date: this.data.events[0].date,
        location: this.data.events[0].location
      };
    }

    return (
      <div class="container" style={marginStyle}>
        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              <h1>{thisEvent.name}<small>{thisEvent.date}</small></h1>
              <LocationDetail locationId={thisEvent.location} />
              <p>{thisEvent.details}</p>
              <EditEvent />
            </Col>
            <Col md={6}>
              <Reservations data={this.data.reservations} eventId={thisEvent.objectId} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
