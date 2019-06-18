import React, { Component } from "react";
import { connect } from "react-redux";
import AllPosts from "./AllPosts";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log(this.props.user.user);
    console.log("From HomePage.js: ", localStorage.getItem("JWT"));
  };
  render() {
    return (
      <div className="homePage">
        <AllPosts />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
