import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Post from "./components/post/Post";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" component={NavBar} />
          <div className="content">
            <Route path="/" component={Post} />
          </div>
        </div>
      </Router>
    );
  }
}
