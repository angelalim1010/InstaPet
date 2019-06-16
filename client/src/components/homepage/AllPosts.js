import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPostsThunk } from "../../actions/postActions";
import Post from "../post/Post";

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.fetchAllPosts();
  };

  displayPosts = () => {
    if (this.props.post.posts.length === 0) {
      return (
        <div className="noPosts">
          <h2>Loading Posts...</h2>
        </div>
      );
    } else {
      return (
        <div className="allPosts">
          {this.props.post.posts.map(post => {
            return <Post post={post} key={post.id} />;
          })}
        </div>
      );
    }
  };

  render() {
    return <div className="allPostsContainer">{this.displayPosts()}</div>;
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPostsThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);
