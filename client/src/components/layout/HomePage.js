import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsThunk } from "../../actions/mainFeedActions";


class HomePage extends Component {

  render() {
    return <div />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);



class AllCampusesContainer extends Component {
  constructor() {
    super();
    this.state = {
      toggleForm: false
    };
  }

  componentDidMount = () => {
    this.props.getCampuses();
  };

  displayCampuses = () => {
    if (this.props.campus.campuses.length === 0) {
      return <p>No Campuses Avaliable</p>;
    } else {
      return <AllCampusesView />;
    }
  };

  displayForm = () => {
    if (this.state.toggleForm) {
      return <AddCampusForm />;
    }
  };

  toggleForm = () => {
    this.setState(prevState => ({
      toggleForm: !prevState.toggleForm
    }));
  };

  render() {
    return (
      <div className="allCampuses">
        <h1 className="allCampusesHeader">All Campuses</h1>
        {this.displayCampuses()}
        <Button className="addNewCampusButton" onClick={this.toggleForm}>
          Add New Campus
        </Button>
        {this.displayForm()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campus: state.campus
});

const mapDispatchToProps = dispatch => {
  return {
    getCampuses: () => dispatch(getCampusesThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampusesContainer);
