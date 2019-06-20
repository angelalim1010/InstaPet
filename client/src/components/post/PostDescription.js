import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { likePostThunk } from "../../actions/postActions";
import { unlikePostThunk } from "../../actions/postActions";
import { Link } from "react-router-dom";

class PostDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: this.props.auth.user.userName
    };
  }

  // componentWillReceiveProps = async nextProps => {
  //   await this.setState({
  //     currentUserName: nextProps.auth.user.userName
  //   });
  // };

  clickedLikePost = () => {
    //if current user did not like post and clicked like
    let newLike = {
      postId: this.props.postId,
      userName: this.state.currentUserName
    };
    //call likePost
    this.props.likePost(newLike)
  };

  clickedUnlikePost = likeId => {
    //if current user likes post and clicked unlike
    this.props.unlikePost(likeId);
  };

  displayLikeStatus = () => {
    // filter through comments array in store for comments in this post
    let allLikesForPost = this.props.post.likes.filter(
      like => like.postId === this.props.postId
    );

    //find index of like by currentUser
    let indexOfTargetLike = allLikesForPost.findIndex(
      like => like.userName === this.state.currentUserName
    );

    //if index is -1 (user did not like)
    if (indexOfTargetLike !== -1) {
      //look for likeId
      let likeId = allLikesForPost[indexOfTargetLike].id;
      return (
        <FontAwesomeIcon
          className="postLikeStatus postLikeStatusFull"
          icon={faStarFull}
          onClick={() => this.clickedUnlikePost(likeId)}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          className="postLikeStatus postLikeStatusEmpty"
          icon={faStarEmpty}
          onClick={() => this.clickedLikePost()}
        />
      );
    }
  };

  displayLikeCount = () => {

    /*
    *   ADD CLICK EVENT LISTENER (pop up array of likes)
    *
    */

    // filter through likes for postId
    let postId = this.props.postId;
    // filter through comments array in store for comments in this post
    let allLikesForPost = this.props.post.likes.filter(
      like => like.postId === postId
    );

    if (allLikesForPost.length === 1) {
      return `1 like`;
    } else {
      return `${allLikesForPost.length} likes`;
    }
  };

  render() {
    return (
      <div className="postDescription">
        <div>{this.displayLikeStatus()}</div>
        <div className="postLikeCount">
          <b>{this.displayLikeCount()}</b>
        </div>

        <b>
          <Link to={"/profile/" + this.props.userName}> {this.props.userName} </Link>
        </b>{" "}
        {this.props.caption}

      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    likePost: newLike => dispatch(likePostThunk(newLike)),
    unlikePost: likeId => dispatch(unlikePostThunk(likeId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDescription);
