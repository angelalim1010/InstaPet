import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import HomePage from "./components/homepage/HomePage";
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
            <Route path="/homePage" component={HomePage} />
            <Route path="/post" component={Post} />
            <Route path="/" component={Post} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </div>
        </div>
      </Router>
    );
  }
}
