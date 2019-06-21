import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllPostsThunk,
  fetchAllCommentsThunk,
  fetchAllLikesThunk
} from "../../actions/postActions";
import {
  getRelationshipsThunk,
  getUsersThunk
} from "../../actions/userActions";
import Post from "../post/Post";
import CreatePostForm from "../post/CreatePostForm";
import "../post/Post.css";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleUp
} from '@fortawesome/free-solid-svg-icons';

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = { toggleForm: false };
  }

  componentDidMount = () => {
    this.props.fetchAllPosts();
    this.props.fetchAllComments();
    this.props.fetchAllLikes();
    this.props.getUsers();
    this.props.getRelationships();
  };

  displayPosts = () => {
    if (this.props.post.posts.length === 0) {
      return (
        <div className="noPosts">
          <h2>Loading Posts...</h2>
        </div>
      );
    } else {
      return (
        <div className="allPosts">
          {this.props.post.posts.map(post => {
            return <Post post={post} key={post.id} />;
          })}
        </div>
      );
    }
  };

  displayForm = () => {
    if (this.state.toggleForm) {
      return <CreatePostForm toggleForm={this.state.toggleForm} />;
    }
  };

  displayArrow = () => {
    if (!this.state.toggleForm) {
      return <FontAwesomeIcon icon={faChevronCircleDown} />;
    } else {
      return <FontAwesomeIcon icon={faChevronCircleUp} />;
    }
  };

  toggleForm = () => {
    this.setState(prevState => ({
      toggleForm: !prevState.toggleForm
    }));
  };

  render() {
    return (
      <div className="allPostsContainer">
        <Button
          className="createPostFormToggleButton"
          onClick={this.toggleForm}
        >
          Create New Post {this.displayArrow()}
        </Button>
        {this.displayForm()}

        {this.displayPosts()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
  users: state.users,
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPostsThunk()),
    fetchAllComments: () => dispatch(fetchAllCommentsThunk()),
    fetchAllLikes: () => dispatch(fetchAllLikesThunk()),
    getRelationships: () => dispatch(getRelationshipsThunk()),
    getUsers: () => dispatch(getUsersThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);
