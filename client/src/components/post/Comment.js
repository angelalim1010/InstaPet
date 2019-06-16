import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  displayComment = () => {
    if (this.props.userName) {
      return (
        <div className="comment">
          <b>
            <Link to={this.props.userName}>{this.props.userName}</Link>
          </b>{" "}
          {this.props.content}
        </div>
      );
    }
  };

  render() {
    return <div className="commentContainer">{this.displayComment()}</div>;
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
