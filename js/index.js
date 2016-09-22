import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

var Parse = require('parse');

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Initialize Parse
Parse.initialize('APPLICATION_ID', 'JAVASCRIPT_KEY');

const app = document.getElementById("app");
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="login" component={Login}></Route>
      <Route path="register" component={Register}></Route>
      <Route path="dashboard" component={Dashboard}></Route>
    </Route>
  </Router>,
app);
