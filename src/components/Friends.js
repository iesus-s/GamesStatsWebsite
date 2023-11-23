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
                  <img className="h-12 w-12" src={require("../images/seasonHistory1.webp")}/>
                </Card.Text>
                <Card.Text>
                    K/D Ratio 3.9
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
                  Season 1
                  <div className="w-12 h-12">
                       <img className="ad1" src={require("../images/seasonHistory2.webp")}/>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: 'auto' }}>
              <Card.Body>
                <Card.Title>Mutual Friends</Card.Title>
                <Card.Text>
                  Friends list
                  <Row>
                    <Row>
                      <Col>
                            Player Name
                      </Col>
                      <Col>
                            <img className="h-10 w-10" src={require("../images/playerIcon.png")}/>
                      </Col>
                    </Row>
                    <div className="w-25 p-1"></div>
                    <Row>
                        <Col>
                        Player Name
                        </Col>
                        <Col>
                            <img className="h-10 w-10" src={require("../images/playericon.jpg")}/>
                      </Col>
                    </Row>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col xs={6}>
            <Card style={{ width: 'auto' }}>
            <Card.Body>
            <Card.Title className="text-center">Game 1</Card.Title>
                <Card.Text>
                <Row>
                  <Col xs={6}>
                        Dust 2
                        <img className="ad1" src={require("../images/csgo_dust2.jpg")}/>
                  </Col>
                  <Col>
                        K/D Ratio: 1.2
                        <div>
                            MVP: Player Name
                        </div>
                        <div>
                            Champ:
                            <img className="rounded-circle" src={require("../images/playericon.jpg")}/>
                        </div>
                        <div>
                            Game Duration: 2 Hours
                        </div>
                  </Col>
                  <Col>
                        Ally Team
                        <Row>
                            Player 1
                            <Row>
                                Player 2
                            </Row>
                            <Row>
                                Player 3
                            </Row>
                            <Row>
                                Player 4
                            </Row>
                            <Row>
                                Player 5
                            </Row>
                        </Row>
                  </Col>
                  <Col>
                        Enemy Team

                  </Col>

                </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: 'auto' }}>
              <Card.Body>
                <Card.Title className="text-center">Game 2</Card.Title>
                <Card.Text>
                <Row>
                  <Col xs={6}>
                        Inferno
                        <img className="ad1" src={require("../images/infernoCSGO.jpg")}/>
                  </Col>
                  <Col>
                        K/D Ratio: 1.2
                        <div>
                            MVP:
                        </div>
                        <div>
                            Champ:
                            <img className="rounded-circle" src={require("../images/playericon.jpg")}/>
                        </div>
                        <div>
                            Game Duration:
                        </div>
                  </Col>
                  <Col>
                        Ally Team
                  </Col>
                  <Col>
                        Enemy Team
                  </Col>

                </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: 'auto' }}>
              <Card.Body>
                <Card.Title className="text-center">Game 3</Card.Title>
                <Card.Text>
                <Row>
                  <Col xs={6}>
                    Mirage
                    <img className="ad1" src={require("../images/mirageCSGO.jpg")}/>
                  </Col>
                  <Col>
                        K/D Ratio: 1.2
                        <div>
                            MVP:
                        </div>
                        <div>
                            Champ:
                            <img className="rounded-circle" src={require("../images/playericon.jpg")}/>
                        </div>
                        <div>
                            Game Duration:
                        </div>
                  </Col>
                  <Col>
                        Ally Team
                  </Col>
                  <Col>
                        Enemy Team
                  </Col>

                </Row>
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