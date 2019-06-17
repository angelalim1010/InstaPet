import React, { Component } from "react";
import { connect } from "react-redux";
import "./Post.css";
import PostTopBar from "./PostTopBar";
import PostImage from "./PostImage";
import PostDescription from "./PostDescription";
import PostComments from "./PostComments";
import PostTimestamp from "./PostTimestamp";
import PostAddComment from "./PostAddComment";
import { getCommentsThunk } from "../../actions/postActions";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post
    };
  }

  componentDidMount = () => {
    this.props.getComments(this.props.post.id);
    this.setState(prevState => ({
      post: {
        ...prevState.post,
        userName: "userName"
      }
    }));
  };

  displayPost = () => {
    if (!this.state.post) {
      return <div />;
    } else {
      return (
        <div className="post">
          <PostTopBar userName={this.state.post.userName} postId={this.state.post.id} />
          <PostImage imageURL={this.state.post.imageURL} />
          <PostDescription
            likes={this.state.post.likes}
            userName={this.state.post.userName}
            caption={this.state.post.caption}
          />
          <PostComments comments={this.state.post.comments} />
          <PostTimestamp createdAt={this.state.post.createdAt} />
          <PostAddComment postId={this.state.post.id} />
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
  return {
    getComments: postId => dispatch(getCommentsThunk(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
