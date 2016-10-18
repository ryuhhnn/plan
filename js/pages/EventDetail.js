import React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import EditEvent from "../components/EditEvent";
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

    var defaultEvent = {name: "", details: ""};
    if(this.data.events.length > 0) {
      defaultEvent = { name: this.data.events[0].name, details: this.data.events[0].details };
    }

    return (
      <div class="container" style={marginStyle}>
        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              <h1>{defaultEvent.name}<small>Event Date</small></h1>
              <address><strong>Location Name</strong><br />1234 Some Street<br />St. Louis, MO 63123<br /></address>
              <p>{defaultEvent.details}</p>
              <EditEvent />
            </Col>
            <Col md={6}>
              <Reservations data={this.data.reservations}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
