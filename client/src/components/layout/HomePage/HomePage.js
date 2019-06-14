import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsThunk } from "../../actions/homePageActions";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount = () => {
    this.props.getPosts();
  };

  displayCampuses = () => {
    if (this.props.posts.length === 0) {
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
  posts: state.posts
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