import React from "react";
import ReactDOM from "react-dom";
import { Button, ControlLabel, FormControl, FormGroup, Glyphicon, Modal } from "react-bootstrap";

var Parse = require('parse');
var ParseReact = require('parse-react');

export default class EditLocation extends React.Component {
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
    // Code for updating location in database
    var name = ReactDOM.findDOMNode(this.refs.name).value;
    var address = ReactDOM.findDOMNode(this.refs.address).value;
    var id = this.props.location.objectId;
    ParseReact.Mutation.Set(id, {
      name: name,
      address: address
    }).dispatch();
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
                <FormControl type="text" ref="name" value={this.props.location.name} />
              </FormGroup>
              <FormGroup controlId="locationAddress">
                <ControlLabel>Address</ControlLabel>
                <FormControl type="text" ref="address" value={this.props.location.address} />
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
