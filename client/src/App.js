import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={NavBar} />
        </div>
      </Router>
    );
  }
}
