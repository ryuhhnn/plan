import React from "react";

import { Col, Grid, Row } from "react-bootstrap";

import Events from "../components/Events";
import Locations from "../components/Locations"

export default class Dashboard extends React.Component {
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
              <Events />
            </Col>
            <Col md={6}>
              <Locations />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
