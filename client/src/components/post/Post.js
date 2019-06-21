import React, { Component } from "react";
import { connect } from "react-redux";
import "./Post.css";
import PostTopBar from "./PostTopBar";
import PostImage from "./PostImage";
import PostDescription from "./PostDescription";
import PostComments from "./PostComments";
import PostTimestamp from "./PostTimestamp";
import PostAddComment from "./PostAddComment";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post
    };
  }

  componentDidMount = () => {};

  displayPost = () => {
    if (!this.state.post) {
      return <div />;
    } else {
      return (
        <div className="post">
          <PostTopBar
            userName={this.state.post.userName}
            postId={this.state.post.id}
          />
          <PostImage imageURL={this.state.post.imageURL} />
          <PostDescription
            postId={this.state.post.id}
            userName={this.state.post.userName}
            caption={this.state.post.caption}
            toggleModalFromAfar={this.props.toggleModalFromAfar}
          />
          <PostTimestamp createdAt={this.state.post.createdAt} />
          <PostComments
            postId={this.state.post.id}
            toggleModalFromAfar={this.props.toggleModalFromAfar}
          />
          <PostAddComment postId={this.state.post.id} />
        </div>
      );
    }
  };

  render() {
    return <div className="postContainer">{this.displayPost()}</div>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
