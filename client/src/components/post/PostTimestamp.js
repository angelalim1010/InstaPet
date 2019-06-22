import React, { Component } from "react";
import { connect } from "react-redux";

class PostTimestamp extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      postedTime: Date.parse(this.props.createdAt),
      timeAgo: 0,
      weeksAgo: 0,
      daysAgo: 0,
      hoursAgo: 0,
      minutesAgo: 0,
      secondsAgo: 0,
      timestamp: "just now"
    };
  }

  componentDidMount = async () => {
    // Calculates the timeAgo for everything for the first time
    await this.calculateTime();

    // Sets the initial timestamp immediately after calculations
    await this.setTimestamp();

    // Tick every second
    this.interval = setInterval(() => {
      this.calculateTime();
      this.setTimestamp();
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  calculateTime = async () => {
    const ONE_SECOND = 1000; // 1 second = 1000 milliseconds
    const ONE_MINUTE = ONE_SECOND * 60;
    const ONE_HOUR = ONE_MINUTE * 60;
    const ONE_DAY = ONE_HOUR * 24;
    const ONE_WEEK = ONE_DAY * 7;

    // Sets how long it's been since the post was created in milliseconds
    let currentTime = new Date().getTime();
    let millisecondsAgo = currentTime - this.state.postedTime;
    await this.setState({
      timeAgo: millisecondsAgo
    });

    let weeksAgo = Math.floor(this.state.timeAgo / ONE_WEEK);
    let daysAgo = Math.floor(this.state.timeAgo / ONE_DAY);
    let hoursAgo = Math.floor(this.state.timeAgo / ONE_HOUR);
    let minutesAgo = Math.floor(this.state.timeAgo / ONE_MINUTE);
    let secondsAgo = Math.floor(this.state.timeAgo / ONE_SECOND);

    // Sets how many units of time it has been since the post was created
    this.setState({
      weeksAgo: weeksAgo,
      daysAgo: daysAgo,
      hoursAgo: hoursAgo,
      minutesAgo: minutesAgo,
      secondsAgo: secondsAgo
    });
  }; // End calculateTime

  setTimestamp = () => {
    let timestamp = this.state.timestamp;

    if (this.state.weeksAgo >= 1) {
      timestamp = this.state.weeksAgo;
      if (this.state.weeksAgo === 1) {
        timestamp += " week ago";
      } else {
        timestamp += " weeks ago";
      }
    } else if (this.state.daysAgo >= 1) {
      timestamp = this.state.daysAgo;
      if (this.state.daysAgo === 1) {
        timestamp += " day ago";
      } else {
        timestamp += " days ago";
      }
    } else if (this.state.hoursAgo >= 1) {
      timestamp = this.state.hoursAgo;
      if (this.state.hoursAgo === 1) {
        timestamp += " hour ago";
      } else {
        timestamp += " hours ago";
      }
    } else if (this.state.minutesAgo >= 1) {
      timestamp = this.state.minutesAgo;
      if (this.state.minutesAgo === 1) {
        timestamp += " minute ago";
      } else {
        timestamp += " minutes ago";
      }
    } else if (this.state.secondsAgo >= 1) {
      timestamp = this.state.secondsAgo;
      if (this.state.secondsAgo === 1) {
        timestamp += " second ago";
      } else {
        timestamp += " seconds ago";
      }
    }

    this.setState({
      timestamp: timestamp
    });
  };

  displayDifference = () => {
    let postedTimeISO = new Date(this.state.postedTime).toISOString();
    let postedTimeDate = new Date(this.state.postedTime).toDateString();

    return (
      <time dateTime={postedTimeISO} title={postedTimeDate}>
        {this.state.timestamp}
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
)(PostTimestamp);
