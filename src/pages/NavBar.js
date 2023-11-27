import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Container} from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <Container fluid className="contain">
                <nav className="nav fixed-top">
                    <ul>
                        <img className="logo" alt="FragPulse" src={require("../images/logo.jpg")}/>
                        <Link to="/homepage" className="site-title">FragPulse</Link>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/homepage">Home</Link>
                        </li>
                        <li>
                            <Link to="/apex">Apex Legends</Link>
                        </li>
                        <li>
                            <Link to="/csgo">CSGO</Link>
                        </li>
                        <li>
                            <Link to="/valorant">Valorant</Link>
                        </li>
                        <li>
                            <Link to="/support">Support Page</Link>
                        </li>
                        <li>
                            <Link to="/friends">Friends</Link>
                        </li>
                        <li>
                            <Link to="/ads">Ads</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">About Us</Link>
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
