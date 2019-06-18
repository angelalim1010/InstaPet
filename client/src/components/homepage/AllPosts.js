import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPostsThunk } from '../../actions/postActions';
import Post from '../post/Post';
import CreatePostForm from '../post/CreatePostForm';
import '../post/Post.css';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faMinusCircle
} from '@fortawesome/free-solid-svg-icons';
import './Homepage.css';

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = { toggleForm: false };
  }

  componentDidMount = () => {
    this.props.fetchAllPosts();
  };

  displayPosts = () => {
    if (this.props.post.posts.length === 0) {
      return (
        <div className="noPosts">
          <h2>Loading Posts...</h2>
        </div>
      );
    } else {
      return (
        <div className="allPosts">
          {this.props.post.posts.map(post => {
            return <Post post={post} key={post.id} />;
          })}
        </div>
      );
    }
  };

  displayForm = () => {
    if (this.state.toggleForm) {
      return <CreatePostForm toggleForm={this.state.toggleForm} />;
    }
  };

  displayArrow = () => {
    if (!this.state.toggleForm) {
      return <FontAwesomeIcon icon={faChevronCircleDown} />;
    } else {
      return <FontAwesomeIcon icon={faChevronCircleUp} />;
    }
  };

  toggleForm = () => {
    this.setState(prevState => ({
      toggleForm: !prevState.toggleForm
    }));
  };

  render() {
    return (
      <div className="allPostsContainer">
        <Button
          className="createPostFormToggleButton"
          onClick={this.toggleForm}
        >
          Create New Post {this.displayArrow()}
        </Button>
        {this.displayForm()}

        {this.displayPosts()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPostsThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);
