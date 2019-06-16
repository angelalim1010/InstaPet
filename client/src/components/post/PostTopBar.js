import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostTopBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="postTopBar">
        <p>
          <b>
            <Link to={this.props.userName}>{this.props.userName}</Link>
          </b>
        </p>
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
)(PostTopBar);
