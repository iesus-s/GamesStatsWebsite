import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary justify-content-between" data-bs-theme="dark">
              <Container>
                <Navbar.Brand href="#home">FragPulse</Navbar.Brand>
                <Navbar.Toggle />
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                  </Nav>
                  <Nav>
                    <NavDropdown className="d-flex" title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                        </NavDropdown>
                  </Nav>
              </Container>
            </Navbar>
        );
    }
}
