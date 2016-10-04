import React from "react";
import { Button, Col, Grid, Jumbotron, Panel, Row } from "react-bootstrap";

export default class Home extends React.Component {
  render() {
    const style = {
      paddingBottom: "100px"
    };
    const jumbotronContainer = {
      width: "100%",
      padding: "0px"
    };
    const jumbotronStyle = {
      borderRadius: "0px",
      paddingTop: "118px"
    };
    const featuresStyle = {
    };
    const pricingStyle = {
    };
    const listStyle = {
      listStyleType: "none",
      textAlign: "center",
      padding: "0"
    };
    const panelStyle = {
      borderRadius: "0px",
      textAlign: "center"
    };
    const panelHeadStyle = {
      textAlign: "center",
      paddingTop: "10px",
      paddingBottom: "10px"
    };
    const freePanelTitle = (
      <div style={panelHeadStyle}>
        <h3>Free</h3>
        <h4>$0</h4>
      </div>
    );
    const paidPanelTitle = (
      <div style={panelHeadStyle}>
        <h3>Premium</h3>
        <h4>$4.99</h4>
      </div>
    );
    const professionalPanelTitle = (
      <div style={panelHeadStyle}>
        <h3>Professional</h3>
        <h4>$9.99</h4>
      </div>
    );
    const buttonStyle = {
      borderRadius: "0px",
      border: "Opx solid transparent"
    };

    return (
      <div style={style}>
        <div class="container-fluid" style={jumbotronContainer}>
          <Jumbotron style={jumbotronStyle}>
          <h1>Plan.</h1>
          <p>Planning an event can be hard, but it doesn't have to be! With Plan, everything you need for your event to run smoothly is in the palm of your hands.</p>
          <p><Button bsStyle="primary" style={buttonStyle}>Register</Button></p>
          </Jumbotron>
        </div>
        <div class="container-fluid" style={featuresStyle}>
          <h1>Features</h1>
          <h3>Planning</h3>
          <p>Plan your events with ease. Just select a date, a time, a location, and who you want to invite and how you want them to be contacted and we will take care of the rest. We wish we could provide you more instruction on how to use Plan. but it's really that easy.</p>
          <h3>RSVPs</h3>
          <p>Don't you hate when plans change? Yeah, so do we, so we took the headache out of it. If you decide to make changes to your event, don't worry about letting your guests know, we've got you covered. Did one of your guests change their mind? No biggie. We'll let you know so you won't be surprised.</p>
          <h3>Venues</h3>
          <p>Goodbye endless Google searches and spending hours on the phone trying to secure a venue. We have curated a list of places close to you that are ready to host your event. You simply select which one and we will take care of the rest.</p>
          <h3>Tickets</h3>
          <p>Need tickets for your event? No problem. We will take care of allowing your guests to not only purchase tickets, but we give you the tools on validating them at the door so you don't have to worry about keeping track of who you've sold them to or who made it to the event.</p>
        </div>
        <div class="container-fluid" style={pricingStyle}>
          <h1>Pricing</h1>
          <Grid>
            <Row className="show-grid">
              <Col md={4}>
                <Panel header={freePanelTitle} style={panelStyle}>
                  <ul style={listStyle}>
                    <li><b>1</b> hosted event</li>
                    <li><b>99¢</b> per additional event</li>
                    <li><b>100</b> free guest invites</li>
                    <li><b>1¢</b> per additional guest invite</li>
                    <li><b>Unlimited</b> event updates</li>
                  </ul>
                </Panel>
              </Col>
              <Col md={4}>
                <Panel header={paidPanelTitle} style={panelStyle}>
                  <ul style={listStyle}>
                    <li><b>10</b> hosted events</li>
                    <li><b>99¢</b> per additional event</li>
                    <li><b>Unlimited</b> guest invites</li>
                    <li><b>Unlimited</b> event updates</li>
                  </ul>
                </Panel>
              </Col>
              <Col md={4}>
                <Panel header={professionalPanelTitle} style={panelStyle}>
                  <ul style={listStyle}>
                    <li><b>Unlimited</b> hosted events</li>
                    <li><b>Unlimited</b> guest invites</li>
                    <li><b>Unlimited</b> event updates</li>
                  </ul>
                </Panel>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
