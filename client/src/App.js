import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/homepage/HomePage";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
<<<<<<< HEAD
import Post from "./components/post/Post";
=======
import Profile from "./components/profile/Profile";
>>>>>>> 18733a12b6a9fbf184622280b8b95f771e925b19

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
<<<<<<< HEAD
            <Route exact path="/p/:postId" component={Post} />
=======
            <Route exact path="/profile" component={Profile} />
>>>>>>> 18733a12b6a9fbf184622280b8b95f771e925b19
          </div>
        </div>
      </Router>
    );
  }
}
