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
    const [answersVisible, setAnswersVisible] = useState({
      'faqquestion-one': false,
      'faqquestion-two': false,
      'faqquestion-three': false,
    });
  
    const showAnswer = (questionId) => {
      setAnswersVisible((prev) => ({
        ...prev,
        [questionId]: true,
      }));
      
    };
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
              
              <section id="questions" className="className p-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion accordion-flush" id="faqquestions">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="btn btn-link"
                onClick={() => showAnswer('faqquestion-one')}
                disabled={answersVisible['faqquestion-one']}
              >
                What kind of content can I expect on Fragpulse related to Apex Legends?
              </button>
            </h2>
            {answersVisible['faqquestion-one'] && (
              <div className="accordion-body">
                Fragpulse is your go-to source for curated content on Apex Legends. From weapon meta analyses and character strategies to the latest in-game events, our platform provides timely updates, expert insights, and a thriving community discussion to enhance your Apex Legends experience.
              </div>
            )}
          </div>
          <div className="w-25 p-1"></div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="btn btn-link"
                onClick={() => showAnswer('faqquestion-two')}
                disabled={answersVisible['faqquestion-two']}
              >
                Will I receive a lot of unnecessary notifications or emails if I sign up on Fragpulse?
              </button>
            </h2>
            {answersVisible['faqquestion-two'] && (
              <div className="accordion-body">
                No worries! Fragpulse values your time and commitment. We prioritize delivering only essential and important information directly related to Apex Legends. Expect focused updates on strategies, events, and key insights, keeping you motivated on your journey to become an Apex Predator.
              </div>
            )}
          </div>
          <div className="w-25 p-1"></div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="btn btn-link"
                onClick={() => showAnswer('faqquestion-three')}
                disabled={answersVisible['faqquestion-three']}
              >
                How can Fragpulse help me improve my skills in Apex Legends?
              </button>
            </h2>
            {answersVisible['faqquestion-three'] && (
              <div className="accordion-body">
                Fragpulse is designed to be a comprehensive resource for Apex enthusiasts. Whether you're looking for weapon guides, character tips, or staying up-to-date with the game's meta, Fragpulse provides the information you need to sharpen your skills and elevate your gameplay in Apex Legends. Join our community, and let's conquer the arena together!
              </div>
            )}
          </div>
        </div>
      </div>
      <section id="questions" className="className p-1">
      <div className="container">
      <div className="w-25 p-1"></div>
        <div className="accordion accordion-flush" id="faqquestions">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="btn btn-link"
                onClick={() => showAnswer('faqquestion-four')}
                disabled={answersVisible['faqquestion-four']}
              >
                What kind of content can I expect on Fragpulse related to CS:GO?
              </button>
            </h2>
            {answersVisible['faqquestion-four'] && (
              <div className="accordion-body">
                Fragpulse is your one-stop resource for all things CS:GO. From weapon statistics and map strategies to the latest tournament highlights, our platform offers curated content that keeps you informed and enhances your gameplay in Counter-Strike: Global Offensive.
              </div>
            )}
          </div>
          <div className="w-25 p-1"></div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="btn btn-link"
                onClick={() => showAnswer('faqquestion-fifth')}
                disabled={answersVisible['faqquestion-fifth']}
              >
                Will I receive a lot of unnecessary notifications or emails if I sign up on Fragpulse for CS:GO information?
              </button>
            </h2>
            {answersVisible['faqquestion-fifth'] && (
              <div className="accordion-body">
               No need to worry! Fragpulse values your time and commitment. We understand the importance of focused updates. When you sign up, you'll receive only essential information directly related to CS:GO, ensuring you stay motivated and informed without unnecessary distractions.
              </div>
            )}
          </div>
          <div className="w-25 p-1"></div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="btn btn-link"
                onClick={() => showAnswer('faqquestion-sixth')}
                disabled={answersVisible['faqquestion-sixth']}
              >
                How can Fragpulse help me improve my skills in CS:GO?
              </button>
            </h2>
            {answersVisible['faqquestion-sixth'] && (
              <div className="accordion-body">
                Fragpulse is designed to be a comprehensive resource for CS:GO enthusiasts. Whether you're looking for weapon guides, map strategies, or staying up-to-date with the competitive scene, Fragpulse provides the information you need to sharpen your skills and elevate your gameplay in Counter-Strike: Global Offensive. Join our community, and let's conquer the competitive arena together!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    <section id="questions" className="className p-1">
      <div className="container">
      <div className="w-25 p-1"></div>
        <div className="accordion accordion-flush" id="faqquestions">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="btn btn-link"
                onClick={() => showAnswer('faqquestion-seventh')}
                disabled={answersVisible['faqquestion-seventh']}
              >
                What kind of content can I expect on Fragpulse related to Valorant?

              </button>
            </h2>
            {answersVisible['faqquestion-seventh'] && (
              <div className="accordion-body">
                Fragpulse is your ultimate resource for all things Valorant. From in-depth analyses of agent abilities to weapon metas and the latest esports events, our platform provides curated content designed to keep you informed and enhance your Valorant gameplay.
              </div>
            )}
          </div>
          <div className="w-25 p-1"></div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="btn btn-link"
                onClick={() => showAnswer('faqquestion-eigth')}
                disabled={answersVisible['faqquestion-eigth']}
              >
                Will I receive excessive notifications or emails if I sign up on Fragpulse for Valorant information?
              </button>
            </h2>
            {answersVisible['faqquestion-eigth'] && (
              <div className="accordion-body">
               Absolutely not! At Fragpulse, we respect your time and commitment. When you sign up, expect only essential information directly related to Valorant, ensuring you stay focused and motivated without unnecessary distractions.
              </div>
            )}
          </div>
          <div className="w-25 p-1"></div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="btn btn-link"
                onClick={() => showAnswer('faqquestion-ninth')}
                disabled={answersVisible['faqquestion-ninth']}
              >
                How can Fragpulse help me improve my skills in Valorant?
              </button>
            </h2>
            {answersVisible['faqquestion-ninth'] && (
              <div className="accordion-body">
                Fragpulse is designed to be a comprehensive resource for Valorant enthusiasts. Whether you're looking for agent guides, weapon strategies, or staying up-to-date with esports events, Fragpulse provides the information you need to sharpen your skills and elevate your gameplay in Valorant. Join our community, and let's conquer the tactical arena together!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    </section>
    
            </Container>
            
        );
}

export default SupportPage;