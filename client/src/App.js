import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Post from "./components/post/Post";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" component={NavBar} />
          <div className="content">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </div>
      </Router>
    );
  }
}
