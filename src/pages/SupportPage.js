import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Container, Row, Col, Form, Button, Card, CardImg} from "react-bootstrap";
document.body.style.backgroundColor = "#FBF5F3";

function SupportPage () {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    // For Email Support functions
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // For Phone Support functions
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    // For Mail Support functions
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleSubmit = (event) => {
      event.preventDefault();
        setShow3(true);
    }
    const handleClose3 = () => setShow3(false);
        return (
            <Container fluid>
            <div className="w-25 p-3"></div>
            <h1 className="text-center">SupportPage</h1>
            <div className="w-25 p-3"></div>
                <Row className="space-x-3 justify-content-lg-center">
                  <Card  className="shadow-sm text-center" style={{ width: '18rem' }}>
                    <CardImg className="email" src={require("../images/email_support.png")}/>
                    <Card.Body className="email_text">
                      <Card.Title className="text-center">Email Support</Card.Title>
                      <Card.Text className="text-center">
                        Send us a message with any question or comment and we will respond as soon as possible.
                      </Card.Text>
                      <Button variant="primary" onClick={handleShow}>Email</Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Email</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-center">support@frag-pulse.com</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Card.Body>
                  </Card>
                  <Card className="shadow-sm text-center" style={{ width: '18rem' }}>
                    <CardImg className="phone" src={require("../images/phone_support.jpg")}/>
                    <Card.Body className="phone_text">
                      <Card.Title>Phone Support</Card.Title>
                      <Card.Text>
                        Call us anytime! Someone may or may not respond. But, feel free to call.
                      </Card.Text>
                      <Button variant="primary" onClick={handleShow1}>Phone Number</Button>
                      <Modal show={show1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                          <Modal.Title>Phone Number</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-center">911</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose1}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Card.Body>
                  </Card>
                  <Card className="shadow-sm text-center" style={{ width: '18rem' }}>
                    <CardImg className="mail" src={require("../images/mail_support.jpg")}/>
                    <Card.Body className="mail_text">
                      <Card.Title>Mail Support</Card.Title>
                      <Card.Text>
                        Send a letter to our P.O. Box and we will respond in a timely manner.
                      </Card.Text>
                      <Button variant="primary" onClick={handleShow2}>P.O. Box Address</Button>
                      <Modal show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                          <Modal.Title>Mail Address</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-center">1600 Pennsylvania Avenue NW, Washington, DC 20500</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose2}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Card.Body>
                  </Card>
                </Row>
                <div className="w-25 p-3"></div>
                  <Row className="d-grid gap">
                    <Col md={{ span: 6, offset: 3 }}>
                      <h2>Send Us a Message!</h2>
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
                          <Modal show={show3} onHide={handleClose3}>
                            <Modal.Header closeButton>
                              <Modal.Title>Success!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="text-center">Message Sent!</Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose3}>
                                Close
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </div>
                      </Form>
                    </Col>
                  </Row>
              <div className="w-25 p-3"></div>
            </Container>
        );
}

export default SupportPage;