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
<<<<<<< HEAD
          <Link to={this.props.userName}>{this.props.userName}</Link>
          <Button onClick={() => this.props.deletePost(this.props.postId)}>Delete</Button>
=======
          <Link to="/profile">{this.props.userName}</Link>
>>>>>>> 18733a12b6a9fbf184622280b8b95f771e925b19
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
