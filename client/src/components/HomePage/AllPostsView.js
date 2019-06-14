import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "../post/Post";
// import { Button } from "reactstrap";
// import { likePostThunk } from "../../actions/homePageActions";

class AllPostsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.homePage.posts,
      samplePost: {
        id: 5,
        userId: 13,
        imageURL: "/img/default_picture.jpg",
        likes: 250,
        description:
          "Mollit ut ullamco commodo minim Lorem tempor quis aliqua voluptate ut proident commodo sunt do. Elit nostrud exercitation culpa quis in et nulla dolor esse tempor esse et fugiat. Amet est duis ullamco incididunt ex Lorem ex Lorem eu sint veniam excepteur. Nisi aliquip excepteur minim dolor ad laborum occaecat deserunt do minim occaecat enim. Officia in qui esse mollit amet.",
        comments: [7, 13, 15, 22, 30]
      }
    };
  }

  render() {
    return (
      <div>
        <Post post={this.state.samplePost} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  homePage: state.homePage
});

// const mapDispatchToProps = dispatch => {
//     return {
//         likePost: postId => dispatch(likePostThunk(postId))
//     };
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(AllPostsView);
