import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./Login.css"
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
            <div>
                <h1>Instapet</h1>
                <h3>Sign up to see some wholesome content</h3>
                <Form>
                    <FormGroup>
                      <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <Input type="name" name="name" id="name" placeholder="Full Name" />
                    </FormGroup>
                    <FormGroup>
                      <Input type="userName" name="userName" id="username" placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                      <Input type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup>
                </Form>
                 <Button>Submit</Button>
            </div>
        )
    }
}

export default SignUp;
