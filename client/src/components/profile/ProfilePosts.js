import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Profile.css";

class ProfilePosts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profilePosts">
        <div className="profilePost ">profilePost</div>
        <div className="profilePost ">profilePost</div>
        <div className="profilePost ">profilePost</div>
        <div className="profilePost ">profilePost</div>
        <div className="profilePost ">profilePost</div>
        <div className="profilePost ">profilePost</div>
        <div className="profilePost ">profilePost</div>
        <div className="profilePost ">profilePost</div>
        <div className="profilePost ">profilePost</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePosts);
