import React, { Component } from "react";

class PostImage extends Component {
  render() {
    return (
      <div className="postImage">
        <img src={this.props.imageURL} />
      </div>
    );
  }
}

export default PostImage;
