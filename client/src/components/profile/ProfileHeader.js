import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router';
import './Profile.css';
import { Button } from 'reactstrap';
import { timingSafeEqual } from 'crypto';

import { followUserThunk } from '../../actions/userActions';
import { unfollowUserThunk } from '../../actions/userActions';

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: this.props.auth.user.userName
    };
  }

  clickedFollow = () => {
    //if current user did not follow and clicked follow
    let newFollow = {
      following: this.props.viewUserObject.userName,
      follower: this.state.currentUserName
    };
    //call followUser
    this.props.followUser(newFollow);
  };

  clickedUnfollow = relationshipId => {
    //if current user follows and clicked unfollow
    this.props.unfollowUser(relationshipId);
  };

  displayButton = () => {
    let userName = this.props.viewUserObject.userName;
    //if on your own profile put edit button
    if (userName === this.state.currentUserName) {
      return <Button className="followButton">Edit Profile</Button>;
    } else {
      // filter through relationships array in store for followings of currentUser
      let allFollowingForUser = this.props.user.relationships.filter(
        relationship => relationship.follower === this.state.currentUserName
      );

      //find index of relationship by currentUser
      let indexOfTargetRelationship = allFollowingForUser.findIndex(
        relationship => relationship.following === userName
      );

      //if index is not -1 (user is following)
      if (indexOfTargetRelationship !== -1) {
        //look for relationshipId
        let relationshipId = allFollowingForUser[indexOfTargetRelationship].id;
        return (
          <Button
            onClick={() => this.clickedUnfollow(relationshipId)}
            className="followButton"
          >
            Unfollow
          </Button>
        );
      } else {
        //is not following
        return (
          <Button onClick={() => this.clickedFollow()} className="followButton">
            Follow
          </Button>
        );
      }
    }
  };

  render() {
    let userName = this.props.viewUserObject.userName;

    //THIS USERS' POSTS
    // filter through posts for userName
    // filter through posts array in store for posts for this user
    let allPostsForUser = this.props.post.posts.filter(
      post => post.userName == userName
    );

    //THIS USERS' FOLLOWERS
    // filter through relationships for where this user is the following
    // filter through posts array in store for posts for this user
    let allFollowersForUser = this.props.user.relationships.filter(
      relationship => relationship.following == userName
    );

    //THIS USERS' FOLLOWING
    // filter through relationships for where this user is the follower
    // filter through posts array in store for posts for this user
    let allFollowingForUser = this.props.user.relationships.filter(
      relationship => relationship.follower == userName
    );

    return (
      <div className="profileHeader">
        <img
          className="profilePicture"
          src="https://i.pinimg.com/originals/9f/81/2d/9f812d4cf313e887ef99d8722229eee1.jpg"
          alt="profilepic"
        />

        <div className="userInfoContainer">
          <div className="userNameFollowStatus">
            <div className="userName">
              <h3>{this.props.viewUserObject.userName}</h3>
            </div>

            <div>{this.displayButton()}</div>
          </div>

          <div className="userStats">
            <div className="userStat userPostCount">
              <b>{allPostsForUser.length}</b> posts
            </div>

            <div className="userStat userFollowers">
              {/* ADD CLICK EVENT LISTENER (pop up array of followers) */}
              <b>{allFollowersForUser.length}</b> followers
            </div>

            <div className="userStat userFollowing">
              {/* ADD CLICK EVENT LISTENER (pop up array of following) */}
              <b>{allFollowingForUser.length}</b> following
            </div>
          </div>

          <div className="userDisplayName">
            <b>{this.props.viewUserObject.displayName}</b>
          </div>

          <div className="userBio">
            <p>{this.props.viewUserObject.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    followUser: newFollow => dispatch(followUserThunk(newFollow)),
    unfollowUser: relationshipId => dispatch(unfollowUserThunk(relationshipId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileHeader)
);
