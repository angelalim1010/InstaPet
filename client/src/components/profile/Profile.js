import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Profile.css';
import ProfileHeader from './ProfileHeader';
import ProfilePosts from './ProfilePosts';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    }
  }

  componentDidMount = () => {
    const {
      match: { params }
    } = this.props;

    this.setState({
      userName: params.userName
    });
  };

  render() {
    let userName = this.state.userName;
    let viewUserArray = this.props.user.users.filter(user => user.userName == userName);

    let viewUserObject = viewUserArray[0];

    console.log("viewUserObject:");
    console.log(viewUserObject);

    if (viewUserObject == undefined) {
      return (
        <div className="noPosts">
          <h2>Loading User...</h2>
        </div>
      )
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

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
