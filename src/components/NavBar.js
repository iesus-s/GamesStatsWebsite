import React, { Component } from 'react';
import LogInStatus from "./LogInStatus";
import LoginForm from "./LoginForm";
import {Navbar, Container, Nav, NavDropdown, Row, Image} from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <div className="container-fluid flex-col flex">
                    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                      <Container>
                        <Navbar.Brand href="/homepage">
                            <Image alt="" src="/images/logo.jpg" width="30" height="30"
                          className="d-inline-block align-top"/>{' '}FragPulse
                        </Navbar.Brand>
                      </Container>

                      <Container>
                        <Navbar.Toggle />
                          <Nav className="">
                            <Nav.Link href="/homepage"> Home</Nav.Link>
                            <Nav.Link href="/apexlegends">Games</Nav.Link>
                              <Nav.Link href="/support">Support</Nav.Link>
                              <Nav.Link href="/aboutus">About Us</Nav.Link>
                              <Nav.Link href="/ads">Ads</Nav.Link>
                          </Nav>
                      </Container>

                      <Container>
                          <Nav className="ms-auto me-5">
                            <NavDropdown className="ms-auto" title="Account" id="basic-nav-dropdown">
                              <NavDropdown.Item>Profile</NavDropdown.Item>
                              <NavDropdown.Item href="/friends">Friends</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                              <NavDropdown.Divider />
                                <LogInStatus />
                            </NavDropdown>
                          </Nav>
                      </Container>
                    </Navbar>
                    </div>
                </Row>
            </Container>
        );
    }
}
