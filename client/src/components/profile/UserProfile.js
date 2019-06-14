import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./UserProfile.css";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    // Will probably replace state with user:{}
    this.state = {
      name: "Bob Anderson",
      nickname: "Bob the great",
      email: "blah@mcblah.com",
      imageURL: "../../img/fetchDog.png",
      bio: "I am cool , follow me :)",
      followers: 5,
      following: 5
    };
  }

  render() {
    return (
      <div>
        <div className="row top">
          <div className="col-sm-6">
            <h1>@{this.state.nickname}</h1>
            <h2 className="name">{this.state.name}</h2>
            <img src={this.state.imageURL} alt="profile" />
            <a href="#">Edit Profile</a>
          </div>
          <div className="col-sm-6">
            <h2>Bio:</h2>
            <p>{this.state.bio}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h3>Followers: {this.state.followers}</h3>
          </div>
          <div className="col-sm-6">
            <h3>Following: {this.state.following}</h3>
          </div>
        </div>
        <div className="row posts">
          <p>Posts go here</p>
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  name: PropTypes.string,
  nickname: PropTypes.string,
  email: PropTypes.string,
  imageURL: PropTypes.string,
  bio: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.string
};

// CONNECT TO REDUX
