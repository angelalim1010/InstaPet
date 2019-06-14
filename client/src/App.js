import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import Homepage from "./components/layout/HomePage/HomePage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Route exact path="/" component={Homepage}>
          </Route>
        </div>
      </Router>
    );
  }
}
