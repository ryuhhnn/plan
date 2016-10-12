import React from "react";
import ReactDOM from "react-dom";
import { Alert, Button, ControlLabel, FieldGroup, FormControl, FormGroup } from "react-bootstrap";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);
var myregister;

export default class Login extends ParseComponent {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    myregister = this;
  }

  observe(props, state) {
    return {
      user: ParseReact.currentUser
    };
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    error: null
  }

  state = {
    error: this.props.error,
  }

  register() {
    var email = ReactDOM.findDOMNode(this.refs.email).value;
    var name = ReactDOM.findDOMNode(this.refs.name).value;
    var password = ReactDOM.findDOMNode(this.refs.password).value;
    var confirmPassword = ReactDOM.findDOMNode(this.refs.confirmPassword).value;
    if (password === confirmPassword) {
      var u = new Parse.User({
        username: email,
        password: password,
        name: name,
        email: email
      });
      u.signUp().then(function(success) {
        // Successful registration. Redirect to Dashboard.
        myregister.context.router.push("/dashboard");
      }, function(error) {
        // Registration error.
        self.setState({ error: "There was an error creating your account. Please try again." + error });
      });
    } else {
      this.setState({ error: "Passwords don't match!" });
    }
  }

  render () {
    const marginStyle = {
      marginTop: "70px",
      width: "350px",
      height: "100%"
    };

    return (
      <div class="container" style={marginStyle}>
        <form>
          {
            this.state.error ?
            <Alert bsStyle="danger">
              {this.state.error}
            </Alert> :
            null
          }
          <FormGroup controlId="email">
            <ControlLabel>Email</ControlLabel>
            <FormControl type="email" ref="email" placeholder="Email" />
          </FormGroup>
          <FormGroup controlId="username">
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" ref="name" placeholder="Jean Doe" />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" ref="password" placeholder="Password" />
          </FormGroup>
          <FormGroup controlId="confirmPassword">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl type="password" ref="confirmPassword" placeholder="Confirm Password" />
          </FormGroup>
          <Button onClick={this.register} type="submit">
            Register
          </Button>
        </form>
      </div>
    );
  }
}
