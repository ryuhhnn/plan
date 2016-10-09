import React from "react";
import ReactDOM from "react-dom";
import { Button, ControlLabel, FormControl, FormGroup, Glyphicon, Modal } from "react-bootstrap";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

export default class AddReservation extends ParseComponent {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.save = this.save.bind(this);
    this.hide = this.hide.bind(this);
  }

  observe(props, state){
    return {
      user: ParseReact.currentUser
    };
  }

  open() {
    this.setState({ showModal: true });
  }

  save() {
    // Code for saving new reservation to database
    var name = ReactDOM.findDOMNode(this.refs.name).value;
    var email = ReactDOM.findDOMNode(this.refs.email).value;
    var message = ReactDOM.findDOMNode(this.refs.message).value;
    // THIS VALUE WILL CHANGE WHEN DATA PROPERTY FOR EVENT DETAIL IS ADDED AND PASSED IN
    // ONLY A DEFAULT VALUE FOR TEMPORARY WORKAROUND
    var eventId = "12345";
    var user = this.data.user;
    if (name.length && email.length){
      ParseReact.Mutation.Create("Reservations", {
        createdBy: user,
        eventId: eventId,
        name: name,
        email: email,
        message: message
      }).dispatch();
      this.setState({ showModal: false });
    } else {
      this.setState({ error: "Please enter all fields" });
    }
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
              <FormGroup controlId="name">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" ref="name" placeholder="Jean Doe" />
              </FormGroup>
              <FormGroup controlId="eventName">
                <ControlLabel>Email</ControlLabel>
                <FormControl type="email" ref="email" placeholder="email@google.com" />
              </FormGroup>
              <FormGroup controlId="details">
                <ControlLabel>Message</ControlLabel>
                <FormControl componentClass="textarea" ref="message" placeholder="Hey! I'm hosting an event..." />
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
