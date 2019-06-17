import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "reactstrap";
import { addCommentThunk } from "../../actions/postActions";

class PostComments extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state.newComment)
  };

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
            onClick={this.handleSubmit}
          />
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    addComment: newComment => dispatch(addCommentThunk(newComment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComments);
