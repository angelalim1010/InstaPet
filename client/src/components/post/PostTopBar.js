import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { deletePostThunk } from '../../actions/postActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './Post.css';

class PostTopBar extends Component {
  constructor(props) {
    super(props);
  }

  canDelete = () => {
    if (this.props.auth.user.userName === this.props.userName) {
      return (
        <Button
          className="deleteButton"
          onClick={() => this.props.deletePost(this.props.postId)}
        >
          <FontAwesomeIcon icon={faTrashAlt} size="2x" />
        </Button>
      );
    }
  };

  displayTopBar = () => {
    if (this.props.userName) {
      return (
        <b>
          <Link to={'/profile/' + this.props.userName}>
            {this.props.userName}
          </Link>
          {this.canDelete()}
        </b>
      );
    }
  };

  render() {
    return <div className="postTopBar">{this.displayTopBar()}</div>;
  }
}

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    deletePost: postId => dispatch(deletePostThunk(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostTopBar);
