import React, { Component } from "react";
import { connect } from "react-redux";

class PostTimestamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // postedTime: Date.parse(this.props.createdAt),
      postedTime: Date.now(),
      timeAgo: 0,
      weeksAgo: 0,
      daysAgo: 0,
      hoursAgo: 0,
      minutesAgo: 0,
      secondsAgo: 0,
      timestamp: "just now",
      interval: null
    };
  }

  componentDidMount = () => {
    let currentTime = new Date().getTime();
    let millisecondsAgo = currentTime - this.state.postedTime;
    this.setState({
      timeAgo: millisecondsAgo
    });
    this.calculateTime();
  };

  componentWillUnmount = () => {
    clearInterval(this.state.interval);
  };

  calculateTime = () => {
    const ONE_SECOND = 1000; // 1 second = 1000 milliseconds
    const ONE_MINUTE = ONE_SECOND * 60;
    const ONE_HOUR = ONE_MINUTE * 60;
    const ONE_DAY = ONE_HOUR * 24;
    const ONE_WEEK = ONE_DAY * 7;

    let weeksAgo = Math.floor(this.state.timeAgo / ONE_WEEK);
    let daysAgo = Math.floor(this.state.timeAgo / ONE_DAY);
    let hoursAgo = Math.floor(this.state.timeAgo / ONE_HOUR);
    let minutesAgo = Math.floor(this.state.timeAgo / ONE_MINUTE);
    let secondsAgo = Math.floor(this.state.timeAgo / ONE_SECOND);

    this.setState({
      weeksAgo: weeksAgo,
      daysAgo: daysAgo,
      hoursAgo: hoursAgo,
      minutesAgo: minutesAgo,
      secondsAgo: secondsAgo
    });

    // If the post was created less than a minute ago, tick every second
    if (this.state.secondsAgo < 60) {
      this.state.interval = setInterval(() => {
        this.updateState("everySecond", ONE_SECOND);
        this.setTimestamp();
        if (this.state.secondsAgo === 60) {
          clearInterval(this.state.interval);
        }
      }, ONE_SECOND);
    }

    // If the post was created less than an hour ago, tick every minute
    if (this.state.minutesAgo < 60) {
      this.interval = setInterval(() => {
        this.updateState("everyMinute", ONE_MINUTE);
        this.setTimestamp();
        if (this.state.minutesAgo === 60) {
          clearInterval(this.state.interval);
        }
      }, ONE_MINUTE);
    }

    // If the post was created less than a day ago, tick every hour
    if (this.state.hoursAgo < 24) {
      this.interval = setInterval(() => {
        this.updateState("everyHour", ONE_HOUR);
        this.setTimestamp();
        if (this.state.hoursAgo === 24) {
          clearInterval(this.state.interval);
        }
      }, ONE_HOUR);
    }
  }; // End calculateTime

  updateState = (interval, timeUnit) => {
    switch (interval) {
      case "everySecond":
        this.setState(prevState => ({
          timeAgo: prevState.timeAgo + timeUnit, // Every second, a second (in milliseconds) will be added to timeAgo
          secondsAgo: prevState.secondsAgo + 1
        }));
        break;
      case "everyMinute":
        this.setState(prevState => ({
          timeAgo: prevState.timeAgo + timeUnit, // Every minute, a minute (in milliseconds) will be added to timeAgo
          minutesAgo: prevState.minutesAgo + 1
        }));
        break;
      case "everyHour":
        this.setState(prevState => ({
          timeAgo: prevState.timeAgo + timeUnit, // Every hour, an hour (in milliseconds) will be added to timeAgo
          hoursAgo: prevState.hoursAgo + 1
        }));
        break;
    }
  };

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
