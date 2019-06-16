import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom'
import "./Login.css"
import Phone from './Phone'
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    render(){
        return(
            <div className = "background">
                <Phone/>
                <div className = "box">
                    <h1 className= "title">Instapet</h1>
                    <Form>
                        <FormGroup>
                          <Input type="email" name="email" className="formbox" placeholder="Email" />
                        </FormGroup>
                        <br></br>
                        <FormGroup>
                          <Input type="password" name="password" className="formbox" placeholder="Password" />
                        </FormGroup>
                    </Form>
                    <br></br>
                     <Button className="submit">Log In</Button>
                     <br></br>
                     <div className= "signupbox">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                     </div>
                 </div>

            </div>
        )
    }
}

export default Login;
