import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editUserThunk } from '../../actions/userActions';
import { modifyAuth } from '../../actions/authActions';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.auth.user.id,
      displayName: this.props.auth.user.displayName,
      userName: this.props.auth.user.userName,
      email: this.props.auth.user.email,
      profilePicture: this.props.auth.user.profilePicture,
      bio: this.props.auth.user.bio
    };
  }

  // EVENT HANDLERS
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    // this is only if the user deletes the initial properties and leaves fields blank
    // Its okay if save changes is clicked and nothing actually changed
    e.preventDefault();
    if (this.state.userName === '') {
      alert('Username CANNOT be empty');
    } else {
      // send changed user data
      let changedUser = {
        id: this.props.auth.user.id,
        userName: this.state.userName,
        displayName: this.state.name,
        email: this.state.email,
        profilePicture: this.state.profilePicture,
        bio: this.state.bio
      };

      // send user to update Database
      console.log('Edited User sent!');
      this.props.editUser(changedUser);

      // update the Authenticator
      console.log('AUTH sent');
      this.props.editAuth(changedUser);
    }
  };

  componentDidUpdate = () => {
    if (this.state.bio === null) {
      this.setState({ bio: '' });
    }

    if (this.state.profilePicture === null) {
      this.setState({ profilePicture: '' });
    }
  };

  render() {
    return (
      <div>
        <form className="editUserForm">
          <label>UserName: </label>
          <input
            type="text"
            value={this.state.userName}
            name="userName"
            placeholder="New userName"
            onChange={this.handleChange}
          />
          <br />
          <label>Display Name: </label>
          <input
            type="text"
            value={this.state.displayName}
            name="displayName"
            placeholder="New name"
            onChange={this.handleChange}
          />
          <br />
          <label>Email: </label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            placeholder="New email"
            onChange={this.handleChange}
          />
          <br />
          <label>Profile Picture: </label>
          <input
            type="text"
            value={this.state.profilePicture}
            name="profilePicture"
            placeholder="New image"
            onChange={this.handleChange}
          />
          <br />
          <label>Bio:</label>
          <textarea
            type="text"
            value={this.state.bio}
            name="bio"
            placeholder="your bio..."
            onChange={this.handleChange}
          />
          <br />
          <input
            type="submit"
            onClick={this.handleSubmit}
            value="Save changes"
          />
        </form>
      </div>
    );
  }
}

EditProfile.propTypes = {
  name: PropTypes.string,
  userName: PropTypes.string,
  email: PropTypes.string,
  profilePicture: PropTypes.string,
  bio: PropTypes.string,
  phone: PropTypes.string
};

// CONNECT TO REDUX

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    editUser: changedUser => dispatch(editUserThunk(changedUser)),
    editAuth: changedUser => dispatch(modifyAuth(changedUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
