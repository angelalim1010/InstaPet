import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./Login.css"
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
            <div>
                <div>
                    <h1>Instapet</h1>
                    <Form>
                        <FormGroup>
                          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                          <Input type="password" name="password" id="password" placeholder="Password" />
                        </FormGroup>
                    </Form>
                     <Button>Submit</Button>
                 </div>
            </div>
        )
    }
}

export default Login;
