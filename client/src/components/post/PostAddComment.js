import React, { Component } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import { Form, Input } from "reactstrap";

class PostComments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="postAddComment">
        <Form className="postAddCommentForm">
          <Input
            className="postAddCommentInput postAddCommentText"
            type="textarea"
            placeholder="Add a comment..."
            rows="1"
          />
          <Input
            className="postAddCommentInput postAddCommentSubmit"
            type="submit"
            value="Post"
          />
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComments);
