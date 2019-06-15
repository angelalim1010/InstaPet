import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import { Button } from "reactstrap";
// import { likePostThunk } from "../../actions/postActions";

class PostDescription extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="postDescription">
        {/* <Button onClick={() => this.props.likePost(this.props.id)}>Like</Button> */}
        <p>Liked by {this.props.likes.length} people</p>
        <Comment />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    // likePost: postId => dispatch(likePostThunk(postId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDescription);
