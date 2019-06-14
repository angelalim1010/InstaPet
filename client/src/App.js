import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'

class App extends Component {
    render(){
        return (
            <Router>
              <div>
                <Route exact path="/" component={Login}>
                </Route>
              </div>
            </Router>
        );
    }
}

export default App;
