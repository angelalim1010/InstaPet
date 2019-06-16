import React, { Component } from "react";
import { connect } from "react-redux";

class Postdifference extends Component {
  constructor(props) {
    super(props);
  }

  displayDifference = () => {
    const ONE_SECOND = 1000; // 1 second = 1000 milliseconds
    const ONE_MINUTE = ONE_SECOND * 60;
    const ONE_HOUR = ONE_MINUTE * 60;
    const ONE_DAY = ONE_HOUR * 24;
    const ONE_WEEK = ONE_DAY * 7;
    let postedTime = Date.parse(this.props.createdAt);
    let postedTimeISO = new Date(postedTime).toISOString();
    let currentTime = new Date().getTime();
    let difference = currentTime - postedTime;
    let weeksAgo = Math.floor(difference / ONE_WEEK);
    let daysAgo = Math.floor(difference / ONE_DAY);
    let hoursAgo = Math.floor(difference / ONE_HOUR);
    let minutesAgo = Math.floor(difference / ONE_MINUTE);
    let secondsAgo = Math.floor(difference / ONE_SECOND);
    let timestamp = 0;
    if (weeksAgo >= 1) {
      timestamp = weeksAgo;
      if (weeksAgo === 1) {
        timestamp += " week ago";
      } else {
        timestamp += " weeks ago";
      }
    } else if (daysAgo >= 1) {
      timestamp = daysAgo;
      if (daysAgo === 1) {
        timestamp += " day ago";
      } else {
        timestamp += " days ago";
      }
    } else if (hoursAgo >= 1) {
      timestamp = hoursAgo;
      if (hoursAgo === 1) {
        timestamp += " hour ago";
      } else {
        timestamp += " hours ago";
      }
    } else if (minutesAgo >= 1) {
      timestamp = minutesAgo;
      if (minutesAgo === 1) {
        timestamp += " minute ago";
      } else {
        timestamp += " minutes ago";
      }
    } else if (secondsAgo >= 1) {
      timestamp = secondsAgo;
      if (secondsAgo === 1) {
        timestamp += " second ago";
      } else {
        timestamp += " seconds ago";
      }
    }
    return <time datetime={postedTimeISO}>{timestamp}</time>;
  };

  render() {
    return <div className="postTimestamp">{this.displayDifference()}</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Postdifference);
