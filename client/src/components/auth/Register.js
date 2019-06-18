import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Register.css";
import Phone from "./Phone";
import { registerUser } from "../../actions/userActions";
import { clearErrors } from "../../actions/errorActions";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      displayName: "",
      password: "",
      password2: "",
      error: {}
    };
  }

  componentDidMount = () => {
    // If user is already logged in and navigates to the Register page, they will be redirected to the homepage
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.error) {
      this.setState({
        error: nextProps.error
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

    // Since the redirect is handled within the action, the history needs to be passed. withRouter is necessary for this.
    this.props.registerUser(newUser, this.props.history);

    // Clear the errorReducer
    this.props.clearError();
  };

  render() {
    return (
      <div className="background">
        <Phone />
        <div className="signupheader">
          <h1>Instapet</h1>
          <h3 className="signupmessage">
            Sign up to see some wholesome content
          </h3>
          <Form>
            <FormGroup>
              <Input
                type="email"
                name="email"
                className="formbox"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="name"
                name="displayName"
                className="formbox"
                placeholder="Full Name"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="userName"
                name="userName"
                className="formbox"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                className="formbox"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Form>
          <Button className="signupbutton" onClick={this.handleSubmit}>
            Sign Up
          </Button>
          <br />
          <div className="loginbox">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

const mapDispatchToProps = dispatch => {
  return {
    registerUser
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
