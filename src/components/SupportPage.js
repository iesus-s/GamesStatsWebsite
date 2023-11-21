import React, {Component} from 'react';
import {Container, Row, Col, Form, Button, Card, CardImg} from "react-bootstrap";
document.body.style.backgroundColor = "#FBF5F3";

function SupportPage () {
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
        console.log('Form submitted!');
    }
        return (
            <Container fluid>
              <div className="w-25 p-3"></div>
                <Row className="space-x-3 justify-content-lg-center">
                  <Card  className="shadow-sm" style={{ width: '18rem' }}>
                    <CardImg className="email" src={require("../images/email_support.png")}/>
                    <Card.Body className="email_text">
                      <Card.Title>Mail Support</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card className="shadow-sm" style={{ width: '18rem' }}>
                    <CardImg className="phone" src={require("../images/phone_support.jpg")}/>
                    <Card.Body className="phone_text">
                      <Card.Title>Phone Support</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Card className="shadow-sm" style={{ width: '18rem' }}>
                    <CardImg className="mail" src={require("../images/mail_support.jpg")}/>
                    <Card.Body className="mail_text">
                      <Card.Title>Email Support</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Row>
                <div className="w-25 p-3"></div>
                  <Row className="d-grid gap">
                    <Col md={{ span: 6, offset: 3 }}>
                      <h2>Contact Us</h2>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control className="shadow-sm" type="text" placeholder="Enter your name" required />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control className="shadow-sm" type="email" placeholder="Enter your email" required />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                          <Form.Label>Message</Form.Label>
                          <Form.Control className="shadow-sm" as="textarea" rows={4} placeholder="Enter your message" required />
                        </Form.Group>
                        <div>
                          <div className="w-25 p-1"></div>
                          <Button className="shadow-sm" variant="primary" type="submit">
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
              <div className="w-25 p-3"></div>
            </Container>
        );
}

export default SupportPage;