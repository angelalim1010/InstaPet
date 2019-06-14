import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./components/profile/UserProfile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProfile />
      </div>
    );
  }
}

export default App;
