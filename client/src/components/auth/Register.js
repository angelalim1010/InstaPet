import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { registerUser } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import './Login.css';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      email: '',
      displayName: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  componentDidMount = () => {
    // If the user is already logged in and navigates to the Register page, they will be redirected to the homepage
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
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
        <div className="box">
          <img src={require('../../img/phone.png')} className="phoneImage" />
          <div className="formContainer">
            <h1 className="title">Instapet</h1>
            <h3 className="signupmessage">
              Sign up to see some wholesome content
            </h3>
            <Form className="form" onSubmit={this.handleSubmit}>
              <FormGroup className="formBox">
                <Input
                  type="email"
                  name="email"
                  className="formBoxInput"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <FormText className="formBoxError">{errors.email}</FormText>
              </FormGroup>
              <FormGroup className="formBox">
                <Input
                  type="text"
                  name="displayName"
                  className="formBoxInput"
                  placeholder="Full Name"
                  onChange={this.handleChange}
                />
                <FormText className="formBoxError">
                  {errors.displayName}
                </FormText>
              </FormGroup>
              <FormGroup className="formBox">
                <Input
                  type="text"
                  name="userName"
                  className="formBoxInput"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                <FormText className="formBoxError">{errors.userName}</FormText>
              </FormGroup>
              <FormGroup className="formBox">
                <Input
                  type="password"
                  name="password"
                  className="formBoxInput"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <FormText className="formBoxError">{errors.password}</FormText>
              </FormGroup>
              <FormGroup className="formBox">
                <Input
                  type="password"
                  name="password2"
                  className="formBoxInput"
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                />
                <FormText className="formBoxError">{errors.password2}</FormText>
              </FormGroup>
              <Button type="submit" className="submit">
                Sign Up
              </Button>
            </Form>
            <div className="signupbox">
              Already have an account? <Link to="profile/login">Login</Link>
            </div>
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
