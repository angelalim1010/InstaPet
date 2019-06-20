import React, { Component } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import { deleteCommentThunk } from "../../actions/postActions";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

class PostComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: this.props.auth.user.userName
    };
  }

  // componentDidMount = () => {
  //   // this.props.getComments(this.props.postId);
  // };

  displayViewAllComments = () => {
    // filter through comments for postId
    let postId = this.props.postId;
    // filter through comments array in store for comments in this post
    let allCommentsForPost = this.props.post.comments.filter(comment => comment.postId == postId);

    if (allCommentsForPost.length === 0) {
      return <div className="postCommentsNone" />;
    }
    if (allCommentsForPost.length >= 3) {
      return <i>View all {allCommentsForPost.length} comments</i>;
    }
  };

  displayComments = () => {
    // filter through comments for postId
    let postId = this.props.postId;
    // filter through comments array in store for comments in this post
    let allCommentsForPost = this.props.post.comments.filter(comment => comment.postId == postId);

    if (allCommentsForPost.length === 0) {
      return <div className="postCommentsNone" />;
    } else {
      return (
        allCommentsForPost.map(comment => {
          {
            if (comment.userName === this.state.currentUserName) {
              return (
                <div className="comment" key={comment.id}>
                  <b>
                    <Link to={"/profile/" + comment.userName}> {comment.userName} </Link>
                  </b>{" "}
                  {comment.content}
                  <Button  className="deleteButton" onClick={() => this.props.deleteComment(comment.id)}>
                    <FontAwesomeIcon className= "deleteCommentIcon"icon={faTrashAlt} size="2x" />
                  </Button>
                </div>
              )
            } else {
              return (
                <div className="comment" key={comment.id}>
                  <b>
                    <Link to={"/profile/" + comment.userName}> {comment.userName} </Link>
                  </b>{" "}
                  {comment.content}
                </div>
              )
            }
          }
        })
      )
    }
  };


  render() {
    return (
      <div className="postComments">
        {this.displayViewAllComments()}
        {this.displayComments()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: commentId => dispatch(deleteCommentThunk(commentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComments);
