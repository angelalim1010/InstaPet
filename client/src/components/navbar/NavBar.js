import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Form, Input } from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

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
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
