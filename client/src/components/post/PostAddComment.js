import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "reactstrap";
import { addCommentThunk } from "../../actions/postActions";

class PostComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      currentUserId: 1
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
      userId: this.state.currentUserId,
      postId: this.props.postId,
      content: this.state.content
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
            name="content"
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
