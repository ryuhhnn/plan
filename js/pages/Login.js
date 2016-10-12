import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router";
import { Alert, Button, ControlLabel, FieldGroup, FormControl, FormGroup } from "react-bootstrap";

var Parse = require('parse');
var ParseReact = require('parse-react');
var ParseComponent = ParseReact.Component(React);
var mylogin;

export default class Login extends ParseComponent {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    mylogin = this;
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

  login() {
    var self = this;
    var username = ReactDOM.findDOMNode(this.refs.username).value;
    var password = ReactDOM.findDOMNode(this.refs.password).value;
    function error() {
      self.setState({ error: "Incorrect username or password" });
    }
    if (username.length && password.length) {
      Parse.User.logIn(username,password).then(function(success) {
        // Successful Login. Redirect to Dashboard.
        mylogin.context.router.push("/dashboard");
      }, function(err) {
        // Log-in error.
        error();
      });
    } else {
      this.setState({ error: "Please enter all fields" });
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
          <FormGroup controlId="username">
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" ref="username" placeholder="Username" />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" ref="password" placeholder="Password" />
          </FormGroup>
          <Button onClick={this.login} type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}
