import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom'
import "./SignUp.css"
class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            name: "",
            userName: "",
            password: ""
        }
    }
    render(){
        return(
            <div className = "background">
                <div className="signupheader">
                    <h1>Instapet</h1>
                    <h3>Sign up to see some wholesome content</h3>
                    <Form>
                        <FormGroup>
                          <Input type="email" name="email" className="formbox" placeholder="Email" />
                        </FormGroup>
                        <br></br>
                        <FormGroup>
                          <Input type="name" name="name" className="formbox" placeholder="Full Name" />
                        </FormGroup>
                        <br></br>
                        <FormGroup>
                          <Input type="userName" name="userName" className="formbox" placeholder="Username" />
                        </FormGroup>
                        <br></br>
                        <FormGroup>
                          <Input type="password" name="password" className="formbox" placeholder="Password" />
                        </FormGroup>
                        <br></br>
                    </Form>
                     <Button className = "signupbutton">Sign Up</Button>
                     <br></br>
                     <div className= "loginbox">
                        Already have an account? <Link to="/login">Login</Link>
                     </div>
                 </div>
            </div>
        )
    }
}

export default SignUp;
