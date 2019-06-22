import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Profile.css";
import { followUserThunk } from "../../actions/userActions";
import { unfollowUserThunk } from "../../actions/userActions";
import { Button, Modal } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog as faCogFull } from "@fortawesome/free-solid-svg-icons";
import EditProfile from "./EditProfile";

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    let defsrc =
      " https://images-na.ssl-images-amazon.com/images/I/41YEgvbgVcL.jpg";
    this.state = {
      currentUserName: this.props.auth.user.userName,
      defaultSrc: defsrc,
      toggleEdit: false,
      modalFollowers: false,
      modalFollowing: false
    };
  }

  handleClick = () => {
    this.setState(state => ({
      toggleEdit: !state.toggleEdit
    }));
  };

  toggleEdit = () => {
    if (this.state.toggleEdit) {
      return <EditProfile viewUserObject={this.props.viewUserObject} />;
    }
  };

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
      return (
        <div>
          <Button onClick={this.handleClick} className="editProfile">
              <FontAwesomeIcon
                icon={faCogFull}
              />
          </Button>
          {this.toggleEdit()}
        </div>
      );
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
      relationship =>
        relationship.following == this.props.viewUserObject.userName
    );
    return allFollowersForUser.map(relationship => {
      return (
        <div className="singleFollower" key={relationship.id}>
          <b>
            <Link to={"/profile/" + relationship.follower}>
              {" "}
              {relationship.follower}{" "}
            </Link>
          </b>
        </div>
      );
    });
  };

  displayFollowersModal = () => {
    let userName = this.props.viewUserObject.userName;
    let allFollowersForUser = this.props.user.relationships.filter(
      relationship => relationship.following == userName
    );
    if (allFollowersForUser !== undefined) {
      return (
        <Modal
          isOpen={this.state.modalFollowers}
          toggle={this.toggleFollowersModal}
        >
          <div className="allFollowersandFollowingList">
            <p>All Followers</p>
            <b>{this.displayFollowersArray()}</b>
          </div>
        </Modal>
      );
    }
  };

  handleFollowingClick = e => {
    this.toggleFollowingModal();
  };

  toggleFollowingModal = () => {
    this.setState(prevState => ({
      modalFollowing: !prevState.modalFollowing
    }));
  };

  displayFollowingArray = () => {
    let allFollowingForUser = this.props.user.relationships.filter(
      relationship =>
        relationship.follower == this.props.viewUserObject.userName
    );

    return allFollowingForUser.map(relationship => {
      return (
        <div className="singleFollowing" key={relationship.id}>
          <b>
            <Link to={"/profile/" + relationship.following}>
              {" "}
              {relationship.following}{" "}
            </Link>
          </b>
        </div>
      );
    });
  };

  displayFollowingModal = () => {
    let userName = this.props.viewUserObject.userName;
    let allFollowingForUser = this.props.user.relationships.filter(
      relationship => relationship.follower == userName
    );

    if (allFollowingForUser !== undefined) {
      return (
        <Modal
          isOpen={this.state.modalFollowing}
          toggle={this.toggleFollowingModal}
        >
          <div className="allFollowersandFollowingList">
            <p>All Following</p>
            <b>{this.displayFollowingArray()}</b>
          </div>
        </Modal>
      );
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
    // filter through posts array in store for posts for this user=
    let allFollowingForUser = this.props.user.relationships.filter(
      relationship => relationship.follower == userName
    );

    return (
      <div className="profileHeader">
        <div className="profilePictureContainer">
          <img
            className="profilePicture"
            src={this.props.viewUserObject.profilePicture}
            alt="profilepic"
          />
        </div>

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

            <div
              className="userStat userFollowers"
              onClick={this.handleFollowersClick}
            >
              <b>{allFollowersForUser.length}</b> followers
            </div>
            <div>{this.displayFollowersModal()}</div>

            <div
              className="userStat userFollowing"
              onClick={this.handleFollowingClick}
            >
              <b>{allFollowingForUser.length}</b> following
            </div>
            <div>{this.displayFollowingModal()}</div>
          </div>
          <div className="userDisplayName">
            <b>{this.props.viewUserObject.displayName}</b>
          </div>

          <div className="userBio">{this.props.viewUserObject.bio}</div>
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
