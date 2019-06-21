import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router';
import './Profile.css';
import { timingSafeEqual } from 'crypto';

import { followUserThunk } from '../../actions/userActions';
import { unfollowUserThunk } from '../../actions/userActions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalFollowers: false,
      clickedShowFollowing: false,
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


  handleFollowersClick = e => {
    this.toggleFollowersModal();
  };

  toggleFollowersModal = () => {
    this.setState(prevState => ({
      modalFollowers: !prevState.modalFollowers
    }));
  };




  displayFollowersArray = () => {
    let allFollowersForUser = this.props.user.relationships.filter(
      relationship => relationship.following == this.props.viewUserObject.userName
    );
    return (
      allFollowersForUser.map(relationship => {
        return (
          <div className="singleFollower" key={relationship.id}>
            <b>
              <Link to={"/profile/" + relationship.follower}> {relationship.follower} </Link>
            </b>
          </div>
        )
      })
    )
  }

  displayFollowersModal = () => {
    let userName = this.props.viewUserObject.userName;
    let allFollowersForUser = this.props.user.relationships.filter(
      relationship => relationship.following == userName
    );
    if (allFollowersForUser !== undefined) {
      return (
        <Modal isOpen={this.state.modalFollowers} toggle={this.toggleFollowersModal}>
          <div className="allFollowersandFollowingList">
            <p>All Followers</p>
            <b>{this.displayFollowersArray()}</b>
          </div>
        </Modal >
      )
    }
  }


  clickedShowAllFollowing = () => {
    this.setState({
      clickedShowFollowing: true
    })
  }

  clickedUnshowFollowing = () => {
    this.setState({
      clickedShowFollowing: false
    })
  }

  displayFollowingArray = () => {
    let allFollowingForUser = this.props.user.relationships.filter(
      relationship => relationship.follower == this.props.viewUserObject.userName
    );

    return (
      allFollowingForUser.map(relationship => {
        return (
          <div className="singleFollowing" key={relationship.id}>
            <b>
              <Link to={"/profile/" + relationship.following}> {relationship.following} </Link>
            </b>
          </div>
        )
      })
    )
  }

  displayFollowingList = () => {
    if (this.state.clickedShowFollowing === true) {
      return (
        <div className="allFollowersandFollowingSection">
          <div className="allFollowersandFollowingList">
            <span className="closeBtn" onClick={this.clickedUnshowFollowing}>&times;</span>
            <p>All Following</p>
            <b>{this.displayFollowingArray()}</b>
          </div>
        </div>
      )
    } else {
      return (
        <div />
      )
    }
  }

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

            <div className="userStat userFollowers" onClick={this.handleFollowersClick}>
              <b>{allFollowersForUser.length}</b> followers
            </div>
            <div>{this.displayFollowersModal()}</div>

            <div className="userStat userFollowing" onClick={this.clickedShowAllFollowing}>
              <b>{allFollowingForUser.length}</b> following
            </div>
            <div>{this.displayFollowingList()}</div>

          </div>
          <div className="userDisplayName">
            <b>{this.props.viewUserObject.displayName}</b>
          </div>

          <div className="userBio">
            <b>{this.props.viewUserObject.bio}</b>
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
