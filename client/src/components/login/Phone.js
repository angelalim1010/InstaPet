import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom'
import "./Phone.css"
class Phone extends Component{
    render(){
        return(
            <div className = "background">
                <img src={require("../../img/phone.png")} className = "phoneImage"></img>

            </div>
        )
    }
}

export default Phone;
