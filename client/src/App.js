import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Homepage from "./components/layout/Homepage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Homepage} />
        </div>
      </Router>
    );
  }
}
