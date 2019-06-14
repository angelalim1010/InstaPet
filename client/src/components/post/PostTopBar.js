import React, { Component } from "react";
import { connect } from "react-redux";

class PostTopBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="postTopBar">
        <p>user.image user.username</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostTopBar);
