import React from "react";

import { Button, FormControl, FormGroup, Glyphicon, Modal } from "react-bootstrap";

export default class Message extends React.Component {
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
    // Code for sending message
    this.setState({ showModal: false });
  }

  hide() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <span>
        <Button bsStyle="info" onClick={this.open}><Glyphicon glyph="envelope" /> Message</Button>
        <Modal show={this.state.showModal} onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="message">
                <FormControl componentClass="textarea" placeholder="Hey! I've got an update..." />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.save}>Send</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}
