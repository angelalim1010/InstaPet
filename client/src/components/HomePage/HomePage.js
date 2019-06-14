import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsThunk } from "../../actions/homePageActions";
import AllPostsView from "./AllPostsView";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount = () => {
    this.props.getPosts();
  };

  displayPosts = () => {
    if (this.props.homePage.posts.length === 0) {
      return <p>No Posts Avaliable</p>;
    } else {
      return <AllPostsView />;
    }
  };

  render() {
    return (
      <div>
        {this.displayPosts()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  homePage: state.homePage
});

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPostsThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);