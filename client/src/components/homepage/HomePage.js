import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllPosts from './AllPosts';
import './Homepage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="homePage">
        <AllPosts />
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
)(HomePage);
