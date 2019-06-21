// React & Redux
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Authentication
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setAuthUser, logoutUser } from "./actions/authActions";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute"; // ProtectedRoutes will only display if the user isAuthenticated

// Components
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/homepage/HomePage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/profile/Profile";

// Check localStorage for token
if (localStorage.jwtToken) {
  // Grab token from localStorage
  const token = localStorage.jwtToken;

  // Set Authorization header
  setAuthToken(token);

  // Decode token to get user data
  const decoded = jwt_decode(token);

  // Set current user and isAuthenticated
  store.dispatch(setAuthUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // Date.now() returns the current time in milliseconds. Divide by 1000 to convert it into seconds. The token is configured to expire in terms of seconds.
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to Login page
    window.location.href = "/login";
  }
} // End checking for token

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <ProtectedRoute path="/" component={NavBar} />
            <div className="content">
              <ProtectedRoute exact path="/" component={HomePage} />
              <ProtectedRoute
                exact
                path="/profile/:userName"
                component={Profile}
              />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
