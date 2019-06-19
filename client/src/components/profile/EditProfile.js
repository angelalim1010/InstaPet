import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editUserThunk } from '../../actions/userActions';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      userName: this.props.name,
      email: this.props.email,
      imageURL: this.props.imageURL,
      bio: this.props.bio,
      phone: this.props.phone
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
    if (this.state.name === '' || this.state.imageURL === '') {
      alert('One or more fields are invalid');
    } else {
      // send changed user data
      let changedUser = {
        id: this.props.id,
        userName: this.state.nickname,
        name: this.state.name,
        email: this.state.email,
        imageURL: this.state.imageURL,
        bio: this.state.bio,
        phone: this.state.phone
      };

      this.props.editUser(changedUser);
    }
  };

  render() {
    return (
      <div>
        <form className="editUserForm">
          <label>UserName: </label>
          <input
            type="text"
            value={this.props.nickname}
            name="userName"
            placeholder="New nickname"
            onChange={this.handleChange}
          />
          <br />
          <label>Name: </label>
          <input
            type="text"
            value={this.props.name}
            name="name"
            placeholder="New name"
            onChange={this.handleChange}
          />
          <br />
          <label>Email: </label>
          <input
            type="text"
            value={this.props.email}
            name="email"
            placeholder="New email"
            onChange={this.handleChange}
          />
          <br />
          <label>Image Url: </label>
          <input
            type="text"
            value={this.props.imageURL}
            name="imageURL"
            placeholder="New image"
            onChange={this.handleChange}
          />
          <br />
          <label>Phone:</label>
          <input
            type="text"
            value={this.props.phone}
            name="phone"
            placeholder="New Phone"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="submit"
            onClick={this.handleSubmit}
            value="save changes"
          />
        </form>
      </div>
    );
  }
}

EditProfile.propTypes = {
  name: PropTypes.string,
  nickname: PropTypes.string,
  email: PropTypes.string,
  imageURL: PropTypes.string,
  bio: PropTypes.string,
  phone: PropTypes.string
};

// CONNECT TO REDUX

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    editUser: changedUser => dispatch(editUserThunk(changedUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
