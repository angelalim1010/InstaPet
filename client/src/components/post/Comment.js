import React, { Component } from "react";
import { connect } from "react-redux";

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment">
        <p>
          <b>user.username</b>comment.content Lorem ipsum Consequat nulla labore
          laborum nulla sit ad esse eiusmod fugiat aliquip consectetur mollit.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
