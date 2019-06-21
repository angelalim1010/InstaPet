import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "reactstrap";
import { createPostThunk } from "../../actions/postActions";

class CreatePostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: this.props.auth.user.userName,
      imageURL: "",
      caption: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // create new post
    let newPost = {
      userName: this.state.currentUserName,
      imageURL: this.state.imageURL,
      caption: this.state.caption
    };
    // send the data
    this.props.createPost(newPost);
  };

  render() {
    return (
      <Form className="createPostForm">
        {/* <Input
          className="createPostInput createPostText"
          type="number"
          name="username"
          onChange={this.handleChange}
          placeholder="userId (Will remove after login auth setup)"
        /> */}
        <Input
          className="createPostInput createPostText"
          type="text"
          name="imageURL"
          onChange={this.handleChange}
          placeholder="imageURL"
        />
        <Input
          className="createPostInput createPostText"
          type="text"
          name="caption"
          onChange={this.handleChange}
          placeholder="Caption"
        />
        <Input
          className="createPostInput createPostSubmit"
          type="submit"
          value="Create Post"
          onClick={this.handleSubmit}
        />
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPostThunk(post))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePostForm);
