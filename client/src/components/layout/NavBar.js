import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navBar">
        <div className="navBarLogo">Logo</div>
        <div className="navBarSearch">Search</div>
        <div>
          <Link to="/">Profile</Link>
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
