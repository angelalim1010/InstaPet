import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./UserProfile.css";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Bob Anderson",
      email: "blah@mcblah.com",
      imageUrl: "../../img/fetchDog.png",
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
            <h1 className="name">{this.state.name}</h1>
            <img src={this.state.imageUrl} alt="profile" />
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
