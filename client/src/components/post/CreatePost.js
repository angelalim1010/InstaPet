import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "reactstrap";

class CreatePost extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="createPost">
        <Form className="createPostForm">
          <Input
            className="createPostInput createPostText"
            type="number"
            name="userId"
            placeholder="userId (Will remove after login auth setup)"
          />
          <Input
            className="createPostInput createPostText"
            type="text"
            name="imageURL"
            placeholder="imageURL"
          />
          <Input
            className="createPostInput createPostText"
            type="text"
            name="caption"
            placeholder="Caption"
          />
          <Input
            className="createPostInput createPostSubmit"
            type="submit"
            value="Create Post"
            onClick={this.handleSubmit}
          />
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
