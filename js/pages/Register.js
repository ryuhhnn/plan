import React from "react";

import { Button, ControlLabel, FieldGroup, FormControl, FormGroup } from "react-bootstrap";

export default class Login extends React.Component {
  render () {
    const marginStyle = {
      marginTop: "70px",
      width: "350px",
      height: "100%"
    };
    return (
      <div class="container" style={marginStyle}>
        <form>
          <FormGroup controlId="username">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" placeholder="Username" />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" placeholder="Password" />
          </FormGroup>
          <FormGroup controlId="confirmPassword">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl type="password" placeholder="Confirm Password" />
          </FormGroup>
          <FormGroup controlId="email">
            <ControlLabel>Email</ControlLabel>
            <FormControl type="email" placeholder="Email" />
          </FormGroup>
          <Button type="submit">
            Register
          </Button>
        </form>
      </div>
    );
  }
}
