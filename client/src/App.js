import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/homepage/HomePage";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Post from "./components/post/Post";

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
            <Route exact path="/p/:postId" component={Post} />
          </div>
        </div>
      </Router>
    );
  }
}
