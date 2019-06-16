import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
// import { likePostThunk } from "../../actions/postActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartFull } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";

class PostDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeStatus: false
    };
  }

  toggleLikeStatus = e => {
    this.setState(prevState => ({
      likeStatus: !prevState.likeStatus
    }));
  };

  displayLikeStatus = () => {
    if (this.state.likeStatus) {
      return (
        <FontAwesomeIcon
          className="postLikeStatus postLikeStatusFull"
          icon={faHeartFull}
          onClick={this.toggleLikeStatus}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          className="postLikeStatus postLikeStatusEmpty"
          icon={faHeartEmpty}
          onClick={this.toggleLikeStatus}
        />
      );
    }
  };

  displayLikeCount = () => {
    if (this.props.likes.length === 1) {
      return `1 like`;
    } else {
      return `${this.props.likes.length} likes`;
    }
  };

  render() {
    return (
      <div className="postDescription">
        <div>{this.displayLikeStatus()}</div>
        <div className="postLikeCount">
          <b>{this.displayLikeCount()}</b>
        </div>
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
