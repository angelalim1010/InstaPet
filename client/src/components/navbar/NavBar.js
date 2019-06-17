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
                src={require('../../img/logo.png')}
                width={150}
                height={60}
                alt="logo"
              />
            </Link>
          </div>

          <Form className="navBarSearch navBarItem">
            <Input type="text" placeholder="Search" />
          </Form>

          <div className="navBarProfile navBarItem">
            <Link to="/">Profile</Link>
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
