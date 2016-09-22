import React from "react";
import DateTime from "react-datetime";

import { Button, ControlLabel, FormControl, FormGroup, Glyphicon, Modal } from "react-bootstrap";

export default class AddEvent extends React.Component {
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
    // Code for saving new location to database
    this.setState({ showModal: false });
  }

  hide() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <span>
        <Button bsStyle="success" onClick={this.open}>Create New <Glyphicon glyph="plus" /></Button>
        <Modal show={this.state.showModal} onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title>New Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="eventName">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" placeholder="Jordan's Birthday" />
              </FormGroup>
              <FormGroup controlId="location">
                <ControlLabel>Location</ControlLabel>
                <FormControl componentClass="select" placeholder="Select">
                  <option value="select">Location 1</option>
                  <option value="other">Location 2</option>
                </FormControl>
              </FormGroup>
              <FormGroup controlId="date">
                <ControlLabel>Date</ControlLabel>
                <DateTime />
              </FormGroup>
              <FormGroup controlId="details">
                <ControlLabel>Event Details</ControlLabel>
                <FormControl componentClass="textarea" placeholder="We are celebrating Jordan's big day!" />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.save}>Save</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}
