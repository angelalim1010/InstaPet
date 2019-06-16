import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import { Button } from "reactstrap";
// import { likePostThunk } from "../../actions/postActions";

class PostDescription extends Component {
  constructor(props) {
    super(props);
  }

  displayLikeCount = () => {
    if (this.props.likes.length === 1) {
      return <p className="postLikes">1 like</p>;
    } else {
      return <p className="postLikes">{this.props.likes.length} likes </p>;
    }
  };

  render() {
    return (
      <div className="postDescription">
        {/* <Button onClick={() => this.props.likePost(this.props.id)}>Like</Button> */}
        {this.displayLikeCount()}
        <Comment
          className="postCaption"
          userName={this.props.userName}
          content={this.props.caption}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    // likePost: postId => dispatch(likePostThunk(postId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDescription);
