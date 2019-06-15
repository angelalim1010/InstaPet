import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Post.css";
import PostTopBar from "./PostTopBar";
import PostImage from "./PostImage";
import PostDescription from "./PostDescription";
import PostComments from "./PostComments";
import PostAddComment from "./PostAddComment";
import { Form, Input } from "reactstrap";

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

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
