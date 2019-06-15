import React, { Component } from "react";
import { connect } from "react-redux";
import AllPosts from "./AllPosts";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="homePage">
        <AllPosts />
      </div>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
