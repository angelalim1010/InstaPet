import React, { Component } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import { deleteCommentThunk } from "../../actions/postActions";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

class PostComments extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount = () => {
  //   // this.props.getComments(this.props.postId);
  // };

  // displayViewAllComments = () => {
  //   console.log("LIL VIEW ALL SECTION");
  //   if (this.props.comments.length === 0) {
  //     return <div className="postCommentsNone" />;
  //   }
  //   if (this.props.comments.length >= 3) {
  //     return <i>View all {this.props.comments.length} comments</i>;
  //   }
  // };

  // displayComment = comment => {
  //   console.log("TRYING TO DISPLAY COMMENTS");
  //   return (
  //     <Comment
  //       userName={comment.userId}
  //       content={comment.content}
  //       key={comment.id}
  //     />

  // {/* {this.displayViewAllComments()} */ }
  //   );
  // };

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
            return (
              <div className="comment" key={comment.id}>
                <b>
                  <Link to="/profile">{comment.userName}</Link>
                </b>{" "}
                {comment.content}
                <Button onClick={() => this.props.deleteComment(comment.id)}>Delete</Button>
              </div>
            )
          }
        })
      )
    }
  };


  render() {
    return (
      <div className="postComments">
        {this.displayComments()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
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
