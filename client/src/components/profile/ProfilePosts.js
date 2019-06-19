import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllPostsThunk } from '../../actions/postActions';
import './Profile.css';

class ProfilePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // This component will receive a prop with the postIds
  }

  componentDidMount = () => {
    this.props.fetchAllPosts();
  };

  render() {
    return (
      <div className="profilePosts">
        <Link to="/">
          <img
            className="profilePost"
            src="https://data.whicdn.com/images/298844185/large.jpg?t=1507433077"
          />
        </Link>
        <Link to="/">
          <img
            className="profilePost"
            src="https://data.whicdn.com/images/298844185/large.jpg?t=1507433077"
          />
        </Link>
        <Link to="/">
          <img
            className="profilePost"
            src="https://data.whicdn.com/images/298844185/large.jpg?t=1507433077"
          />
        </Link>
        <Link to="/">
          <img
            className="profilePost"
            src="https://data.whicdn.com/images/298844185/large.jpg?t=1507433077"
          />
        </Link>
        <Link to="/">
          <img
            className="profilePost"
            src="https://data.whicdn.com/images/298844185/large.jpg?t=1507433077"
          />
        </Link>
        <Link to="/">
          <img
            className="profilePost"
            src="https://data.whicdn.com/images/298844185/large.jpg?t=1507433077"
          />
        </Link>
        <Link to="/">
          <img
            className="profilePost"
            src="https://data.whicdn.com/images/298844185/large.jpg?t=1507433077"
          />
        </Link>
        <Link to="/">
          <img
            className="profilePost"
            src="https://data.whicdn.com/images/298844185/large.jpg?t=1507433077"
          />
        </Link>
        <Link to="/">
          <img
            className="profilePost"
            src="https://data.whicdn.com/images/298844185/large.jpg?t=1507433077"
          />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPostsThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePosts);
