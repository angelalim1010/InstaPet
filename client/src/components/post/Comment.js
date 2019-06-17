import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  displayComment = () => {
    if (this.props.userId) {
      return (
        <div className="comment">
          <b>
<<<<<<< HEAD
            <Link to={this.props.userId}>{this.props.userId}</Link>
=======
            <Link to="/profile">{this.props.userName}</Link>
>>>>>>> 18733a12b6a9fbf184622280b8b95f771e925b19
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
