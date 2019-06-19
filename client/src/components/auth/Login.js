import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { loginUser } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import "./Login.css";
import Phone from "./Phone";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount = () => {
    // If the user is already logged in and navigates to the Login page, they will be redirected to the homepage
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  };

  componentWillReceiveProps = nextProps => {
    // Upon successful login, redirect the user to the homepage
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }

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

  handleSubmit = async e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    // Since the redirect is handled within our component, the history does not need to be passed. 'withRouter' is NOT necessary for this.
    // The redirect is handled in componentWillReceiveProps when the component hears that the user is authenticated.
    this.props.loginUser(user);

    // Clear the errors in the store
    this.props.clearErrors();
  };

  render() {
    const { errors } = this.state; // Equivalent to const errors = this.state.errors. This just makes the code easier to read; can write errors.email instead of this.state.errors.email

    return (
      <div className="background">
        <Phone />
        <div className="box">
          <h1 className="title">Instapet</h1>
          <Form>
            <FormGroup className="formbox">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="inputBox"
                onChange={this.handleChange}
              />
              <span>{errors.email}</span>
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                className="inputBox"
                onChange={this.handleChange}
              />
              <span>{errors.password}</span>
            </FormGroup>
          </Form>
          <Button className="submit" onClick={this.handleSubmit}>
            Log In
          </Button>
          <div className="signupbox">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = dispatch => {
  return {
    loginUser,
    clearErrors
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
