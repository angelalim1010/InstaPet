import React, { Component } from "react";
import { connect } from "react-redux";

class PostImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="postImage">
        <img src={this.props.imageURL} />
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
)(PostImage);
