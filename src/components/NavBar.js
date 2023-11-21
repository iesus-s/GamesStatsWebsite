import React, { Component } from 'react';
import { Link } from "react-router-dom"

import LogInStatus from "./LogInStatus";
import LoginForm from "./LoginForm";
import {Navbar, Container, Nav, NavDropdown, Row, Image, CardImg} from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <Container fluid className="contain">
                <nav className="nav">
                    <img className="logo" alt="FragPulse" src={require("../images/logo.jpg")}/>
                    <Link to="/homepage" className="site-title">FragPulse</Link>
                    <ul>
                        <li>
                            <Link to="/homepage">Home</Link>
                        </li>
                        <li>
                            <Link to="/apexlegends">Games</Link>
                        </li>
                        <li>
                            <Link to="/support">Support Page</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">About Us</Link>
                        </li>
                        <li>
                            <Link to="/ads">Ads</Link>
                        </li>
                        <li>
                            <Link to="/account">Account</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        );
    }
}
