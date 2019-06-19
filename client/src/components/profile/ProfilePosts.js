import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Profile.css';

class ProfilePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // This component will receive a prop with the postIds
  }

  render() {
    //testing for bob
    let userName = this.props.currentUserObject.userName;
    let allPostsForUser = this.props.post.posts.filter(post => post.userId == 16);


    if (allPostsForUser.length === 0) {
      return <div className="postCommentsNone" />;
    } else {
      return (
        allPostsForUser.map(post => {
          {
            return (
              <img
                className="profilePost" key={post.id}
                src={post.imageURL}
              />
            )
          }
        })
      )
    }
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePosts);
