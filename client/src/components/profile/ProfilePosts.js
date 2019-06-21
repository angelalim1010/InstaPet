import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "reactstrap";
import Post from "../post/Post";

class ProfilePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      postIndex: 0
    };
  }

  handlePostClick = e => {
    this.setPostIndex(e);
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  setPostIndex = e => {
    this.setState({
      postIndex: e.target.id
    });
  };

  displayModal = () => {
    let userName = this.props.viewUserObject.userName;
    let allPostsForUser = this.props.post.posts.filter(
      post => post.userName == userName
    );

    if (allPostsForUser !== undefined) {
      return (
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <Post
            className="specificPost"
            post={allPostsForUser[this.state.postIndex]}
            toggleModalFromAfar={this.toggleModal}
          />
        </Modal>
      );
    }
  };

  getLikesLength = post => {
    let allLikesForPost = this.props.post.likes.filter(
      like => like.postId === post.id
    );
    return <b>{allLikesForPost.length}</b>;
  };

  getCommentsLength = post => {
    let allCommentsForPost = this.props.post.comments.filter(
      comment => comment.postId == post.id
    );
    return <b>{allCommentsForPost.length}</b>;
  };

  displayPosts = () => {
    let userName = this.props.viewUserObject.userName;
    let allPostsForUser = this.props.post.posts.filter(
      post => post.userName == userName
    );

    if (allPostsForUser === undefined) {
      return <div className="postCommentsNone">No Posts Available</div>;
    } else {
      return (
        <div className="profilePosts">
          {allPostsForUser.map((post, index) => {
            return (
              <div className="profilePost">
                <img className="profilePostImage" src={post.imageURL} />
                <div
                  className="profilePostHover"
                  key={post.id}
                  id={index}
                  onClick={this.handlePostClick}
                >
                  <span className="profilePostHoverItem">
                    <FontAwesomeIcon icon={faHeart} />
                    <b>{this.getLikesLength(post)}</b>
                  </span>
                  <span className="profilePostHoverItem">
                    <FontAwesomeIcon icon={faComment} />
                    <b>{this.getCommentsLength(post)}</b>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="profilePostsContainer">
        {this.displayModal()}
        {this.displayPosts()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

export default withRouter(
  connect(mapStateToProp)(ProfilePosts)
);
