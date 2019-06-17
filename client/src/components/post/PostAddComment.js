import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "reactstrap";
import { addCommentThunk } from "../../actions/postActions";

class PostComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let addedComment = {
      newComment: {
        userId: 1,
        content: this.state.content
      },
      postId: this.props.postId,
    };
    this.props.addComment(addedComment)
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
            name="comment"
            onChange={this.handleChange}
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
    addComment: addedComment => dispatch(addCommentThunk(addedComment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComments);
