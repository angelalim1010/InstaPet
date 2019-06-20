import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfilePosts from "./ProfilePosts";
import { getUsers, getUser } from "../../actions/userActions";
import { withRouter } from "react-router";

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

  componentDidUpdate = (prevProps, prevState) => {
    console.log("Running componentDidUpdate");
    console.log(prevState.userName);
    console.log(this.state.userName);
    if (prevState.userName !== this.state.userName) {
      // Gets this specific user and sets them to the this.props.user.user
      this.props.getUser(this.state.userName);
    }
  };

  render() {
    let userName = this.state.userName;
    let viewUserArray = this.props.user.users.filter(
      user => user.userName == userName
    );

    let viewUserObject = viewUserArray[0];

    console.log("viewUserObject:");
    console.log(viewUserObject);

    if (viewUserObject == undefined) {
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
  user: state.user,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  getUser: userName => dispatch(getUser(userName))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
);
