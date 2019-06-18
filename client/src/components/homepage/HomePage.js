import React, { Component } from "react";
import { connect } from "react-redux";
import AllPosts from "./AllPosts";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    let accessString = localStorage.getItem("JWT");
    console.log(accessString);
    await this.setState({
      accessString: accessString
    });
    // if (accessString === null) {
    //   await this.setState({
    //     isLoading: false,
    //     error: true
    //   });
    // } else {
    //   await this.setState({
    //     accessString: accessString
    //   });
    // }
  };

  render() {
    return (
      <div className="homePage">
        Access String: {localStorage.getItem("JWT")}
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
