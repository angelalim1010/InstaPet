import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Post.css";
import PostTopBar from "./PostTopBar";
import PostImage from "./PostImage";
import PostDescription from "./PostDescription";
import PostComments from "./PostComments";
import { Form, Input } from "reactstrap";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps = () => {};

  displayPost = () => {
    if (!this.props.post) {
      return <div />;
    } else {
      return (
        <div className="postItems">
          <PostTopBar />
          <PostImage imageURL={this.props.post.imageURL} />
          <PostDescription />
          <PostComments />
        </div>
      );
    }
  };

  render() {
    return <div className="post">{this.displayPost()}</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
