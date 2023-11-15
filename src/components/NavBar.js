import React, { Component } from 'react';
import LogInStatus from "./LogInStatus";
import LoginForm from "./LoginForm";
import {Navbar, Container, Nav, NavDropdown, Row} from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <div className="container-fluid flex-col flex">
                    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                      <Container>
                        <Navbar.Brand href="/homepage"><img alt="" src="/react-frag-pulse/src/images/logo.jpg"
                          width="30" height="30"
                          className="d-inline-block align-top"/>{' '}FragPulse
                        </Navbar.Brand>
                      </Container>

                      <Container>
                        <Navbar.Toggle />
                          <Nav className="">
                            <Nav.Link href="/homepage"> Home</Nav.Link>
                            <Nav.Link href="/apexlegends">Apex Legends</Nav.Link>
                              <Nav.Link href="/counterstrike">Counter-Strike</Nav.Link>
                              <Nav.Link href="/valorant">Valorant</Nav.Link>
                              <Nav.Link href="/support">Support</Nav.Link>
                              <Nav.Link href="/aboutus">About Us</Nav.Link>
                              <Nav.Link href="/ads">Ads</Nav.Link>
                          </Nav>
                      </Container>

                      <Container>
                          <Nav className="ms-auto me-5">
                            <NavDropdown className="ms-auto" title="Account" id="basic-nav-dropdown">
                              <NavDropdown.Item>Profile</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
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
