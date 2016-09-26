import React from "react";

import { Col, Grid, Row } from "react-bootstrap";

import EditEvent from "../components/EditEvent";
import Reservations from "../components/Reservations";

export default class EventDetail extends React.Component {
  render () {
    const marginStyle = {
      marginTop: "70px",
      width: "100%",
      height: "100%"
    };

    return (
      <div class="container" style={marginStyle}>
        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              <h1>Event Title <small>Event Date</small></h1>
              <address>
                <strong>Location Name</strong><br />
                1234 Some Street<br />
                St. Louis, MO 63123<br />
              </address>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate nisl id augue aliquam, non consequat nisl dignissim. Aliquam erat volutpat. Nullam sed leo a augue consequat venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce et tortor ut arcu iaculis pellentesque. Suspendisse eget ex at nunc tempor volutpat non ut odio. Aenean dictum purus nec neque tincidunt, ac venenatis tellus consectetur. Donec tortor sem, tincidunt et nibh id, mattis blandit felis. Integer condimentum non quam vitae venenatis. Morbi quis tortor nunc. In tempor turpis mi, varius vulputate dolor luctus sit amet. Morbi feugiat vulputate mi ut imperdiet. Nam condimentum augue ut augue aliquam, sit amet eleifend diam suscipit. Aenean tristique lorem diam, pulvinar blandit neque consectetur id. Sed nec auctor enim.</p>
              <EditEvent />
            </Col>
            <Col md={6}>
              <Reservations />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
