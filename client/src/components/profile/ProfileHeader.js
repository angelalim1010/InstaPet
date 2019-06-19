import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Profile.css';
import { Button } from 'reactstrap';
import { timingSafeEqual } from 'crypto';

class ProfileHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      following: false,
      text: 'Follow'
    };
  }

  follow = () => {
    if (this.state.following) {
      this.setState(prevState => ({
        following: !prevState.following,
        text: 'Follow'
      }));
    } else {
      this.setState(prevState => ({
        following: !prevState.following,
        text: 'Following'
      }));
    }
  };

  render() {
    return (
      <div className="profileHeader">

        <img
          className="profilePicture"
          src="https://images-na.ssl-images-amazon.com/images/I/41YEgvbgVcL.jpg"
          alt="profilepic"
        />

        <div className="userInfoContainer">
          <div className="userNameFollowStatus">

            <div className="userName">
              <h3>{this.props.viewUserObject.userName}</h3>
            </div>

            <div className="followButtonContainer">
              <Button onClick={this.follow} className="followButton">
                {this.state.text}
              </Button>
            </div>

          </div>

          <div className="userStats">

            <div className="userStat userPostCount">
              <b>{this.props.viewUserObject.posts.length}</b> posts
            </div>

            <div className="userStat userFollowers">
              <b>{this.props.viewUserObject.followers.length}</b> followers
            </div>

            <div className="userStat userFollowing">
              <b>{this.props.viewUserObject.following.length}</b> following
            </div>

          </div>

          <div className="userDisplayName">
            <b>{this.props.viewUserObject.displayName}</b>
          </div>

          <div className="userBio">
            <p>MOOO</p>
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
