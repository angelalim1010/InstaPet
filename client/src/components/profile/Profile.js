import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfilePosts from "./ProfilePosts";
import { getUsers, getUser } from "../../actions/userActions";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  componentDidMount = async () => {
    // Gets users and sets them to the userReducer part of the store
    // this.props.getUsers();

    // Gets the parameters from the URL
    const {
      match: { params }
    } = this.props;

    /**
     * This is equivalent to:
     * const match = this.props.match;
     * const params = match.params;
     */

    // Sets the state so that the rest of the component can use the username taken from the parameter
    await this.setState({
      userName: params.userName
    });

    // Gets this specific user and sets them to the this.props.user.user
    this.props.getUser(this.state.userName);
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
