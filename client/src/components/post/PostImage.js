import React, { Component } from "react";

class PostImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="postImage">
        <img src={this.props.imageURL} alt={this.props.caption} />
      </div>
    );
  }
}

export default PostImage;
