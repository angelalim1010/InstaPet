import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input } from "reactstrap";
import { addCommentThunk } from "../../actions/postActions";

class PostComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      currentUserName: this.props.auth.user.userName
    };
  }

  // componentWillReceiveProps = async nextProps => {
  //   await console.log(nextProps.auth.user.userName);
  //   await this.setState({
  //     currentUserName: nextProps.auth.user.userName
  //   });
  // };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let addedComment = {
      userName: this.state.currentUserName,
      postId: this.props.postId,
      content: this.state.content
    };
    this.props.addComment(addedComment);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div className="postAddComment">
        <Form className="postAddCommentForm">
          <Input
            className="postAddCommentInput postAddCommentText"
            type="text"
            placeholder="Add a comment..."
            value={this.state.content}
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

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    addComment: addedComment => dispatch(addCommentThunk(addedComment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostComments);
