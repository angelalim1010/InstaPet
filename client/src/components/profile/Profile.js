import React, { Component } from "react";
import { connect } from "react-redux";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfilePosts from "./ProfilePosts";
import { withRouter } from "react-router";
import {
  fetchAllPostsThunk,
  fetchAllCommentsThunk,
  fetchAllLikesThunk
} from "../../actions/postActions";
import {
  getRelationshipsThunk,
  getUsersThunk,
  getUser
} from "../../actions/userActions";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // change user object based on params
    if (nextProps.match.params.userName !== prevState.userName)
      return { userName: nextProps.match.params.userName };
    else return null;
  };

  componentDidMount = () => {
    this.props.fetchAllPosts();
    this.props.fetchAllComments();
    this.props.fetchAllLikes();
    this.props.getUsers();
    this.props.getRelationships();
    this.props.getUser(this.state.userName);
  };

  render() {
    let userName = this.state.userName;
    //go thrpugh AllUsers array to find viewingUser
    let viewUserArray = this.props.user.users.filter(
      user => user.userName === userName
    );
    //get the userObject from the array
    let viewUserObject = viewUserArray[0];

    if (viewUserObject === undefined) {
      return (
        <div className="noPosts">
          <h2>Loading User...</h2>
        </div>
      );
    } else {
      return (
        <div className="profile">
          <ProfileHeader viewUserObject={viewUserObject} />
          <ProfilePosts viewUserObject={viewUserObject} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
  users: state.users,
  post: state.post
});

const mapDispatchToProps = dispatch => ({
  getUser: userName => dispatch(getUser(userName)),
  fetchAllPosts: () => dispatch(fetchAllPostsThunk()),
  fetchAllComments: () => dispatch(fetchAllCommentsThunk()),
  fetchAllLikes: () => dispatch(fetchAllLikesThunk()),
  getRelationships: () => dispatch(getRelationshipsThunk()),
  getUsers: () => dispatch(getUsersThunk())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
