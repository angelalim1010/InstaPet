import React, { Component } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";

class PostComments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="postComments">
        <p>
          <i>View all #### comments</i>
        </p>
        <p>Map the comments array for this postId:</p>
        <Comment />
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
