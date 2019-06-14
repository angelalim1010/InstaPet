import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import HomePage from "./components/HomePage/HomePage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={NavBar} />
          <Route path="/homePage" component={HomePage} />
        </div>
      </Router>
    );
  }
}
