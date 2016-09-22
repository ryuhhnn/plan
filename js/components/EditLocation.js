import React from "react";

import { Button, ControlLabel, FormControl, FormGroup, Glyphicon, Modal } from "react-bootstrap";

export default class EditLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.hide = this.hide.bind(this);
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    // Code for saving new location to database
    this.setState({ showModal: false });
  }

  hide() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <span>
        <Button onClick={this.open}><Glyphicon glyph="pencil" /> Edit</Button>
        <Modal show={this.state.showModal} onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="locationName">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" placeholder="Some Location" />
              </FormGroup>
              <FormGroup controlId="locationAddress">
                <ControlLabel>Address</ControlLabel>
                <FormControl type="text" placeholder="1234 Some Street, St. Louis, MO 63123" />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Save</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}
