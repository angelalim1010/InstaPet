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
        <div className="profilePictureContainer">
          <img
            className="profilePicture"
            src="https://scontent-lga3-1.cdninstagram.com/vp/8f44df3ad8ebaffa965a411c4970749b/5D8063C7/t51.2885-19/s150x150/47694621_2177639972485384_1638061124664426496_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com"
          />
        </div>
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
