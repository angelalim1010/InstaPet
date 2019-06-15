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

  render() {
    return (
      <div className="post" key={this.props.post.id}>
        <PostTopBar />
        <PostImage />
        <PostDescription likes={this.props.post.likes} />
        <PostComments />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
