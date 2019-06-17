import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Profile.css";
import { Button } from "reactstrap";

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profileHeader">
        <img
          className="profilePicture"
          src="https://images-na.ssl-images-amazon.com/images/I/41YEgvbgVcL.jpg"
        />
        <div className="userInfoContainer">
          <div className="userNameFollowStatus">
            <div className="userName">
              <h3>userName</h3>
            </div>
            <div className="followButtonContainer">
              <Button className="followButton">Following</Button>
            </div>
          </div>
          <div className="userStats">
            <div className="userStat userPostCount">
              <b>368</b> posts
            </div>
            <div className="userStat userFollowers">
              <b>300</b> followers
            </div>
            <div className="userStat userFollowing">
              <b>350</b> following
            </div>
          </div>
          <div className="userDisplayName">
            <b>userDisplayName</b>
          </div>
          <div className="userBio">
            Reprehenderit culpa culpa nisi ex laborum. Est cillum eiusmod
            incididunt sunt esse est sit eiusmod ut aliqua sunt eiusmod eiusmod
            cillum.
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
