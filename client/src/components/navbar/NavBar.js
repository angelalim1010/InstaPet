import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Form, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as faUserEmpty } from "@fortawesome/free-regular-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
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
                src={require('../../img/logo.png')}
                alt="logo"
              />
            </Link>
          </div>

          <Form className="navBarSearch navBarItem">
            <Input type="text" placeholder="Search" />
          </Form>

          <div className="navBarProfile navBarItem">
            <Link to="/profile">
              <FontAwesomeIcon className="navBarIcon" icon={faUserEmpty}/>
            </Link>

              <Button className="navBarItem" onClick={this.logout}>
                 <FontAwesomeIcon className="navBarIcon" icon={faDoorOpen}/>
              </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
