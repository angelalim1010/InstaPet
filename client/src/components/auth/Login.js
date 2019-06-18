import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/userActions";
import "./Login.css";
import Phone from "./Phone";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
      this.state.password != "" &&
      this.state.email.match(/\w+@\w+\.(com|edu|org)/)
    ) {
      let user = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginUser(user);
    } else {
      alert("Invalid email or empty password");
    }
  };

  componentWillReceiveProps = async nextProps => {
    console.log("Doing compoenent will receive props");
    console.log(nextProps);
  };

  componentWillUnmount = async () => {
    //this.props.history.push("/");
  };

  render() {
    const { errors } = this.state; // Equivalent to const errors = this.state.errors
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
            </FormGroup>
            <br />
            <FormGroup>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                className="inputBox"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Form>
          <br />
          <Button className="submit" onClick={this.handleSubmit}>
            Log In
          </Button>
          <br />
          <div className="signupbox">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

const mapDispatchToProps = dispatch => {
  return {
    loginUser
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
