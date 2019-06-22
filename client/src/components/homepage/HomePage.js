import React, { Component } from "react";
import AllPosts from "./AllPosts";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <AllPosts />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth
});

export default HomePage;
