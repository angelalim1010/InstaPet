import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Profile.css';
import ProfileHeader from './ProfileHeader';
import ProfilePosts from './ProfilePosts';
import { getRelationshipsThunk } from '../../actions/userActions';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile">
        <ProfileHeader />
        <ProfilePosts />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    getRelationships: () => dispatch(getRelationshipsThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
