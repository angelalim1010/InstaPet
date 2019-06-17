import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { deletePostThunk } from "../../actions/postActions";

class PostTopBar extends Component {
  constructor(props) {
    super(props);
  }

  displayTopBar = () => {
    if (this.props.userName) {
      return (
        <b>
          <Link to={this.props.userName}>{this.props.userName}</Link>
          <Button onClick={() => this.props.deletePost(this.props.postId)}>Delete</Button>
        </b>
      );
    }
  };

  render() {
    return <div className="postTopBar">{this.displayTopBar()}</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    deletePost: postId => dispatch(deletePostThunk(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostTopBar);
