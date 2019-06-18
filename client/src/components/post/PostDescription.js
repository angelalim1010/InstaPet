import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { likePostThunk } from "../../actions/postActions";
import { unlikePostThunk } from "../../actions/postActions";

class PostDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeStatus: false,
      currentUserId: 2
    };
  }

  toggleLikeStatus = () => {
    //if current user did not like post and clicked like
    if (!this.state.likeStatus) {
      this.setState(prevState => ({
        likeStatus: !prevState.likeStatus,
      }));
      let newLikePost = {
        postId: this.props.postId,
        userId: this.state.currentUserId
      }
      //call likePost
      this.props.likePost(newLikePost)
    } else {
      this.setState(prevState => ({
        likeStatus: !prevState.likeStatus,
      }));
      //if current user likes post and clicked unlike
      let newUnlikePost = {
        postId: this.props.postId,
        userId: this.state.currentUserId
      }
      //call unlike
      this.props.unlikePost(newUnlikePost)
    }
  };

  // displayLikeStatus = () => {
  //   let postObject = this.props.post.posts.filter(post => post.id == this.props.postId)

  //   //check if current user liked post
  //   if (postObject[0].likes.includes(this.state.currentUserId)) {
  //     return (
  //       <FontAwesomeIcon
  //         className="postLikeStatus postLikeStatusFull"
  //         icon={faStarFull}
  //         onClick={this.toggleLikeStatus}
  //       />
  //     );
  //   } else {
  //     return (
  //       <FontAwesomeIcon
  //         className="postLikeStatus postLikeStatusEmpty"
  //         icon={faStarEmpty}
  //         onClick={this.toggleLikeStatus}
  //       />
  //     );
  //   }
  // }

  // displayLikeCount = () => {
  //   //find post with postId
  //   let postObject = this.props.post.posts.filter(post => post.id == this.props.postId)
  //   //find like count of that post
  //   console.log(postObject[0].likes.length);

  //   if (postObject[0].likes.length === 1) {
  //     return `1 like`;
  //   } else {
  //     return `${postObject[0].likes.length} likes`;
  //   }
  // };

  render() {
    return (
      <div className="postDescription">
        {/* <div>{this.displayLikeStatus()}</div> */}
        <div className="postLikeCount">
          {/* <b>{this.displayLikeCount()}</b> */}
        </div>
        <Comment
          className="postCaption"
          userName={this.props.userName}
          content={this.props.caption}
        />
      </div>
    );
  }
};
const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    likePost: likedPost => dispatch(likePostThunk(likedPost)),
    unlikePost: unlikedPost => dispatch(unlikePostThunk(unlikedPost))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDescription);
