import React from "react";

import { Button, ControlLabel, FormControl, FormGroup, Glyphicon, Modal } from "react-bootstrap";

export default class AddReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.save = this.save.bind(this);
    this.hide = this.hide.bind(this);
  }

  open() {
    this.setState({ showModal: true });
  }

  save() {
    // Code for saving new reservation to database
    this.setState({ showModal: false });
  }

  hide() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <span>
        <Button bsStyle="success" onClick={this.open}>Invite <Glyphicon glyph="plus" /></Button>
        <Modal show={this.state.showModal} onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title>New Reservation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="eventName">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" placeholder="Jean Doe" />
              </FormGroup>
              <FormGroup controlId="eventName">
                <ControlLabel>Email</ControlLabel>
                <FormControl type="email" placeholder="email@google.com" />
              </FormGroup>
              <FormGroup controlId="details">
                <ControlLabel>Message</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Hey! I'm hosting an event..." />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.save}>Invite</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}
