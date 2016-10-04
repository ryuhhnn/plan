import React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import Events from "../components/Events";
import Locations from "../components/Locations"

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

export default class Dashboard extends ParseComponent {
  constructor(props) {
    super(props);
  }

  observe(props, state) {
    return {
      user: ParseReact.currentUser,
      locations: new Parse.Query("Locations").ascending("createdAt"),
      events: new Parse.Query("Events").ascending("createdAt")
    };
  }

  render () {
    const marginStyle = {
      marginTop: "70px",
      width: "100%",
      height: "100%"
    };

    return (
      <div class="container" style={marginStyle}>
        <h1>Dashboard</h1>
        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              <Events events={this.data.events} />
            </Col>
            <Col md={6}>
              <Locations locations={this.data.locations} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
