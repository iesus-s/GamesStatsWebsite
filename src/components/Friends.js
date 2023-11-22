import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

const Friends = () => {

    return(
<div>
<div className="w-25 p-1"></div>
    <Row>
        <Col>
            <Card style={{ width: 'auto' }}>
              <Card.Body>
                <Card.Title>Player Name</Card.Title>
                <Card.Text>
                  Current Rank
                </Card.Text>
                <Card.Text>
                    K/D Ratio
                </Card.Text>
                <Card.Text>
                    W/L Ratio
                </Card.Text>
                <Card.Text>
                    Recently Played
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: 'auto' }}>
              <Card.Body>
                <Card.Title>Season Rankings</Card.Title>
                <Card.Text>
                  Season #
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: 'auto' }}>
              <Card.Body>
                <Card.Title>Mutual Friends</Card.Title>
                <Card.Text>
                  Friends list
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col xs={6}>
            <Card style={{ width: 'auto' }}>
                <Row>
                    <Col>
                        <Row className="hello">
                            <Col>
                                Dust 2
                                <img className="ad1" src={require("../images/Csgo_dust2.jpg")}/>
                            </Col>
                            <Col>
                                K/D Ratio
                                <div>
                                    2.3
                                </div>
                                <div>
                                    MVP
                                </div>
                            </Col>
                            <Col>
                                Game 1
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                            Ally Team
                        <div>
                            Hello
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card style={{ width: 'auto' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: 'auto' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col>
            <div className="text-center">
                <Card>
                    <img className="ad1" src={require("../images/bottomAd2.png")}/>
                </Card>
            </div>
        </Col>
    </Row>
</div>
    )
}

export default Friends;