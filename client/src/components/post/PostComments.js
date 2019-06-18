import React, { Component } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import { getCommentsThunk } from "../../actions/postActions";
import { Link } from "react-router-dom";

class PostComments extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getComments(this.props.postId);
  };

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

    let indexOfTarget = this.props.post.posts.findIndex(
      post => post.id === this.props.postId
    );

    if (this.props.post.posts[indexOfTarget].comments.length === 0) {
      return <div className="postCommentsNone" />;
    } else {
      return (
        this.props.post.posts[indexOfTarget].comments.map(comment => {
          {
            return (
              <div className="comment" key={comment.id}>
                <b>
                  <Link to="/profile">{comment.userId}</Link>
                </b>{" "}
                {comment.content}
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
    getComments: postId => dispatch(getCommentsThunk(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComments);
