import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Phone from "./Phone";
import { registerUserThunk } from "../../actions/userActions";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      displayName: "",
      userName: "",
      password: "",
      authSuccess: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (
      this.state.userName !== "" &&
      this.state.password !== "" &&
      this.state.email.match(/\w+@\w+\.(com|edu|org)/)
    ) {
      let newUser = {
        email: this.state.email,
        displayName: this.state.displayName,
        userName: this.state.userName,
        password: this.state.password
      };
      await this.props.registerUser(newUser);
      this.props.history.push("/login");
    } else {
      alert("Please fill out all the appropriate fields");
    }
  };

  render() {
    return (
      <div className="background">
        <Phone />
        <div className="signupheader">
          <h1 className="title">Instapet</h1>
          <h3 className="signupmessage">
            Sign up to see some wholesome content
          </h3>
          <br></br>
          <Form>
            <FormGroup className="formbox">
              <Input
                type="email"
                name="email"
                className = "inputBox"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </FormGroup>
            <br></br>
            <FormGroup>
              <Input
                type="name"
                name="displayName"
                className = "inputBox"
                placeholder="Full Name"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="userName"
                name="userName"
                className = "inputBox"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                className = "inputBox"
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    registerUser: user => dispatch(registerUserThunk(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
