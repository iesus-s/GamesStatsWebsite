import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import LogInStatus from "./LogInStatus";

export default class NavBar extends Component {
    render() {
        return (
            <div className="container-fluid mt-5 flex-col flex">
            <Navbar expand="lg" className="bg-body-tertiary fixed-top" data-bs-theme="dark">
              <Container>
                <Navbar.Brand href="#home"><img alt="" src="/react-frag-pulse/src/images/logo.jpg"
                  width="30" height="30"
                  className="d-inline-block align-top"/>{' '}FragPulse
                </Navbar.Brand>
              </Container>
              <Container>
                <Navbar.Toggle />
                  <Nav className="">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Apex Legends</Nav.Link>
                      <Nav.Link href="#link">Counter-Strike</Nav.Link>
                      <Nav.Link href="#link">Valorant</Nav.Link>
                      <Nav.Link href="#link">Support</Nav.Link>
                      <Nav.Link href="#link">About Us</Nav.Link>
                      <Nav.Link href="#link">Ads</Nav.Link>
                  </Nav>
              </Container>

              <Container>
                  <Nav className="ms-auto me-5">
                    <NavDropdown className="ms-auto" title="Account" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                      <NavDropdown.Divider />
                        <LogInStatus />
                    </NavDropdown>
                  </Nav>
              </Container>
            </Navbar>
            </div>
        );
    }
}
