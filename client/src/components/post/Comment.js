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
          <b>{this.props.userName}</b> {this.props.content}
        </p>
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
)(Comment);
