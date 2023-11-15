import React, {Component} from 'react';
import {NavDropdown} from "react-bootstrap";
let signed = 0;
class LogInStatus extends Component {
    render() {
        if (signed === 0){
            return (
                <NavDropdown.Item href="#action/3.4">Log In</NavDropdown.Item>
            );
        }
        else {
            return (
                <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
            );
        }
    }
}

export default LogInStatus;