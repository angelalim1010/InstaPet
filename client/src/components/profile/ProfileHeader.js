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

    let userName = this.props.viewUserObject.userName;

    //THIS USERS' POSTS
    // filter through posts for userName
    // filter through posts array in store for posts for this user
    let allPostsForUser = this.props.post.posts.filter(post => post.userName == userName);

    //THIS USERS' FOLLOWERS
    // filter through relationships for where this user is the following
    // filter through posts array in store for posts for this user
    let allFollowersForUser = this.props.user.relationships.filter(relationship => relationship.following == userName);

    //THIS USERS' FOLLOWING
    // filter through relationships for where this user is the follower
    // filter through posts array in store for posts for this user
    let allFollowingForUser = this.props.user.relationships.filter(relationship => relationship.follower == userName);

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
              <b>{allPostsForUser.length}</b> posts
            </div>

            <div className="userStat userFollowers">
              <b>{allFollowersForUser.length}</b> followers
            </div>

            <div className="userStat userFollowing">
              <b>{allFollowingForUser.length}</b> following
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

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
