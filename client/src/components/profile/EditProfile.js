import React, { Component } from "react";
<<<<<<< HEAD

class EditProfile extends Component{
    render(){
        return(
            <h1>edit page</h1>
        )
    }
}

export default EditProfile;
=======
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      nickname: this.props.name,
      email: this.props.email,
      imageUrl: this.props.imageUrl,
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
    if (this.state.name === "" || this.state.imageURL === "") {
      alert("One or more fields are invalid");
    } else {
      // send changed user data
      let changedUser = {
        nickname: this.state.nickname,
        name: this.state.name,
        email: this.state.email,
        imageUrl: this.state.imageUrl,
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
          <label>Nickname: </label>
          <input
            type="text"
            value={this.props.nickname}
            name="nickname"
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
            value={this.props.imageUrl}
            name="imageUrl"
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
  imageUrl: PropTypes.string,
  bio: PropTypes.string,
  phone: PropTypes.string
};

// CONNECT TO REDUX
>>>>>>> 4c43a61762a7ce506cde5cb28419c4bd72abfb4e
