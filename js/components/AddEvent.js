import React from "react";
import ReactDOM from "react-dom";
import DateTime from "react-datetime";
import { Button, ControlLabel, FormControl, FormGroup, Glyphicon, Modal } from "react-bootstrap";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

export default class AddEvent extends ParseComponent {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.save = this.save.bind(this);
    this.hide = this.hide.bind(this);
  }

  observe(props, state) {
    return {
      user: ParseReact.currentUser,
      locations: new Parse.Query("Locations").equalTo("createdBy", this.data.user).ascending("createdAt")
    };
  }

  static defaultProps = {
    error: null
  }

  state = {
    error: this.props.error
  }

  open() {
    this.setState({ showModal: true });
  }

  save() {
    // Code for saving new event to database
    var name = ReactDOM.findDOMNode(this.refs.name).value;
    var location = ReactDOM.findDOMNode(this.refs.location).value;
    var date = ReactDOM.findDOMNode(this.refs.date).value;
    var details = ReactDOM.findDOMNode(this.refs.details).value;
    var user = this.data.user;
    if (name.length && location.length && details.length){
      ParseReact.Mutation.Create("Events", {
        createdBy: user,
        name: name,
        location: location,
        date: date,
        details: details
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
        <Button bsStyle="success" onClick={this.open}>Create New <Glyphicon glyph="plus" /></Button>
        <Modal show={this.state.showModal} onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title>New Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              this.state.error ?
              <Alert bsStyle="danger">
                {this.state.error}
              </Alert> :
              null
            }
            <form>
              <FormGroup controlId="eventName">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" ref="name" placeholder="Jordan's Birthday" />
              </FormGroup>
              <FormGroup controlId="location">
                <ControlLabel>Location</ControlLabel>
                <FormControl componentClass="select" ref="location" placeholder="Select">
                  {
                    this.data.locations ?
                    this.data.locations.map(function(location) {
                      return <option value={location.objectId} key={location.objectId}>{location.name}</option>
                    }) :
                    <option key="null" value="null">Please create a location first</option>
                  }
                </FormControl>
              </FormGroup>
              <FormGroup controlId="date">
                <ControlLabel>Date</ControlLabel>
                <DateTime ref="date" />
              </FormGroup>
              <FormGroup controlId="details">
                <ControlLabel>Event Details</ControlLabel>
                <FormControl componentClass="textarea" ref="details" placeholder="We are celebrating Jordan's big day!" />
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
