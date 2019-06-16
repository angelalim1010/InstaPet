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
  }

  displayPost = () => {
    if (!this.props.post) {
      return <div />;
    } else {
      return (
        <div className="post">
          <PostTopBar userName={this.props.post.userName} />
          <PostImage imageURL={this.props.post.imageURL} />
          <PostDescription
            likes={this.props.post.likes}
            userName={this.props.post.userName}
            caption={this.props.post.caption}
          />
          <PostComments comments={this.props.post.comments} />
          <PostTimestamp createdAt={this.props.post.createdAt} />
          <PostAddComment />
        </div>
      );
    }
  };

  render() {
    return <div className="postContainer">{this.displayPost()}</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
