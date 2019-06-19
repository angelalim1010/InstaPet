import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Register.css";
import Phone from "./Phone";
import { registerUser } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      displayName: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount = () => {
    // If the user is already logged in and navigates to the Register page, they will be redirected to the homepage
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  };

  componentWillReceiveProps = nextProps => {
    // If there are errors in the form fields, set them to the errors object in the state
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      displayName: this.state.displayName,
      userName: this.state.userName,
      password: this.state.password,
      password2: this.state.password2
    };

    // Since the redirect is handled within the action, the history needs to be passed. It is necessary to wrap the component with 'withRouter'.
    this.props.registerUser(newUser, this.props.history);

    // Clear the errors in the store
    this.props.clearErrors();
  };

  render() {
    const { errors } = this.state; // Equivalent to const errors = this.state.errors. This just makes the code easier to read; can write errors.email instead of this.state.errors.email

    return (
      <div className="background">
        <Phone />
        <div className="signupheader">
          <h1 className="title">Instapet</h1>
          <h3 className="signupmessage">
            Sign up to see some wholesome content
          </h3>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup className="formbox">
              <Input
                type="email"
                name="email"
                className="inputBox"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <span>{errors.email}</span>
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="displayName"
                className="inputBox"
                placeholder="Full Name"
                onChange={this.handleChange}
              />
              <span>{errors.displayName}</span>
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="userName"
                className="inputBox"
                placeholder="Username"
                onChange={this.handleChange}
              />
              <span>{errors.userName}</span>
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                className="inputBox"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <span>{errors.password}</span>
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password2"
                className="inputBox"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
              <span>{errors.password2}</span>
            </FormGroup>
            <Button type="submit" className="signupbutton">
              Sign Up
            </Button>
          </Form>
          <div className="loginbox">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (user, history) => dispatch(registerUser(user, history)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
