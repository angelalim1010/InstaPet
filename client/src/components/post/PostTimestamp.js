import React, { Component } from "react";
import { connect } from "react-redux";

class Postdifference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // postedTime: Date.parse(this.props.createdAt),
      postedTime: Date.now(),
      timeAgo: 0
    };
  }

  componentDidMount = () => {
    let currentTime = new Date().getTime();
    let millisecondsAgo = currentTime - this.state.postedTime;
    this.setState({
      timeAgo: millisecondsAgo
    });

    this.interval = setInterval(
      () =>
        this.setState(prevState => ({
          timeAgo: prevState.timeAgo + 1000 // Every second, 60 milliseconds will be added to timeAgo
        })),
      1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  displayDifference = () => {
    const ONE_SECOND = 1000; // 1 second = 1000 milliseconds
    const ONE_MINUTE = ONE_SECOND * 60;
    const ONE_HOUR = ONE_MINUTE * 60;
    const ONE_DAY = ONE_HOUR * 24;
    const ONE_WEEK = ONE_DAY * 7;

    let postedTimeISO = new Date(this.state.postedTime).toISOString();
    let postedTimeDate = new Date(this.state.postedTime).toDateString();

    let weeksAgo = Math.floor(this.state.timeAgo / ONE_WEEK);
    let daysAgo = Math.floor(this.state.timeAgo / ONE_DAY);
    let hoursAgo = Math.floor(this.state.timeAgo / ONE_HOUR);
    let minutesAgo = Math.floor(this.state.timeAgo / ONE_MINUTE);
    let secondsAgo = Math.floor(this.state.timeAgo / ONE_SECOND);

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
    } else if (secondsAgo < 1) {
      timestamp = "less than 1 second ago";
    } else if (secondsAgo >= 1) {
      timestamp = secondsAgo;
      if (secondsAgo === 1) {
        timestamp += " second ago";
      } else {
        timestamp += " seconds ago";
      }
    }

    return (
      <time datetime={postedTimeISO} title={postedTimeDate}>
        {timestamp}
      </time>
    );
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
