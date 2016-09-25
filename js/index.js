import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

var Parse = require('parse');

import Dashboard from "./pages/Dashboard";
import EventDetail from "./pages/EventDetail";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Initialize Parse
Parse.initialize("APPLICATION_ID");
Parse.serverURL = "SERVER_URL";

const app = document.getElementById("app");
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="login" component={Login}></Route>
      <Route path="register" component={Register}></Route>
      <Route path="dashboard" component={Dashboard}></Route>
      <Route path="event-detail" component={EventDetail}></Route>
    </Route>
  </Router>,
app);
