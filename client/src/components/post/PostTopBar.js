import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostTopBar extends Component {
  constructor(props) {
    super(props);
  }

  displayTopBar = () => {
    if (this.props.userName) {
      return (
        <b>
          <Link to={this.props.userName}>{this.props.userName}</Link>
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostTopBar);
