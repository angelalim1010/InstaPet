import React, { Component } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import {
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

class PostComments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="postAddComment">
        <Form>
          <InputGroup>
            <InputGroupAddon
              className="postAddCommentInput"
              addonType="prepend"
            >
              <Input placeholder="Add a comment..." />
            </InputGroupAddon>
            <InputGroupAddon
              className="postAddCommentSubmit"
              type="submit"
              addonType="append"
            >
              <InputGroupText>Post</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
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
