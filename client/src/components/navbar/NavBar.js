import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Form, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as faUserEmpty } from "@fortawesome/free-regular-svg-icons";
import { logoutUser } from "../../actions/authActions";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  logout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div className="navBar">
        <div className="navBarItems">
          <div className="navBarLogo navBarItem">
            <Link to="/">
              <img
                className="logo"
                src={require("../../img/logo.png")}
                alt="logo"
              />
            </Link>
          </div>

          <Form className="navBarSearch navBarItem">
            <Input type="text" placeholder="Search" />
          </Form>

          <div className="navBarItem">
            <Link to="/register">Register</Link>
          </div>
          <div className="navBarItem">
            <Link to="/login">Login</Link>
          </div>

          <Button className="navBarItem" onClick={this.logout}>
            Logout
          </Button>

          <div className="navBarProfile navBarItem">
            <Link to="/profile">
              <FontAwesomeIcon icon={faUserEmpty} size="2x" color="black" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
