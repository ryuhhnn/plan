import React from "react";
import ReactDOM from "react-dom";
import { Alert, Button, ControlLabel, FormControl, FormGroup, Glyphicon, Modal } from "react-bootstrap";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);

export default class AddLocation extends ParseComponent {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.save = this.save.bind(this);
    this.hide = this.hide.bind(this);
  }

  observe(props, state) {
    return {
      user: ParseReact.currentUser
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
    // Code for saving new location to database
    var name = ReactDOM.findDOMNode(this.refs.name).value;
    var address = ReactDOM.findDOMNode(this.refs.address).value;
    var user = this.data.user;
    if (name.length && address.length){
      ParseReact.Mutation.Create("Locations", {
        createdBy: user,
        name: name,
        address: address
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
            <Modal.Title>Add Location</Modal.Title>
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
              <FormGroup controlId="locationName">
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" ref="name" placeholder="Some Location" />
              </FormGroup>
              <FormGroup controlId="locationAddress">
                <ControlLabel>Address</ControlLabel>
                <FormControl type="text" ref="address" placeholder="1234 Some Street, St. Louis, MO 63123" />
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
