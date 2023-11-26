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
                <Row>
                    <Col>
                        <Card.Title>Player Name</Card.Title>
                        <Card.Text>
                          Current Rank
                          <img className="h-auto w-24" src={require("../images/csgoGoldNovaRank.png")}/>
                        </Card.Text>
                        <Card.Text>
                            K/D Ratio 3.9
                        </Card.Text>
                        <Card.Text>
                            W/L Ratio 1.2
                        </Card.Text>

                    </Col>
                    <Col>
                        <img className="rounded-circle w-auto h-36" src={require("../images/playericon.jpg")}/>
                    </Col>
                </Row>
                <div className="w-25 p-1"></div>
                <Row className="text-center">
                    <Card.Text>
                            Recently Played: Dust 2
                            <Row>
                                <img className="w-auto h-auto" src={require("../images/csgo_dust2.jpg")}/>
                            </Row>
                        </Card.Text>
                </Row>
              </Card.Body>
            </Card>
            <Card className="text-center" style={{ width: 'auto' }}>
              <Card.Body>
                <Card.Title>Season Rankings</Card.Title>
                <Card.Text>
                <Row>
                    <Col>
                          Season 1
                          <div className="w-auto h-auto">
                               <img className="" src={require("../images/csgoMasterGuardianRank.png")}/>
                          </div>
                    </Col>
                    <Col>
                          Season 2
                          <div className="w-auto h-auto">
                               <img className="ad1" src={require("../images/csgoGlobalEliteRank.png")}/>
                          </div>
                    </Col>
                    <Col>
                          Season 3
                          <div className="w-auto h-auto">
                               <img className="ad1" src={require("../images/csgoSilverRank.png")}/>
                          </div>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: 'auto' }}>
              <Card.Body>
                <Card.Title>Mutual Friends</Card.Title>
                <Card.Text>
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
        <Col xs={7}>
            <Card style={{ width: 'auto' }}>
            <Card.Body>
            <Card.Title className="text-center">Game 1</Card.Title>
                <Card.Text>
                <Row>
                  <Col xs={5} className="text-center">
                        Dust 2
                        <img className="square bg-primary rounded-3" src={require("../images/csgo_dust2.jpg")}/>
                  </Col>
                  <Col className="col-3">
                        K/D Ratio: 1.2
                        <div>
                            MVP: Player Name
                        </div>
                        <div>
                            Best Weapon:
                            <img className="rounded-circle" src={require("../images/playericon.jpg")}/>
                        </div>
                        <div>
                            Game Duration: 1 Hr
                        </div>
                  </Col>
                  <Col>
                        Ally Team
                        <Row>
                            <Col>
                            Player 1
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            <Row>
                                Player 2
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 3
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 4
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 5
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            </Col>
                        </Row>

                  </Col>
                  <Col className="fluid">
                        Enemy Team
                        <Row>
                            <Col>
                            Player 1
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            <Row>
                                Player 2
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 3
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 4
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 5
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            </Col>
                        </Row>
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
                  <Col xs={5} className="text-center">
                        Dust 2
                        <img className="square bg-primary rounded-3" src={require("../images/mirageCSGO.jpg")}/>
                  </Col>
                  <Col className="col-3">
                        K/D Ratio: 1.2
                        <div>
                            MVP: Player Name
                        </div>
                        <div>
                            Best Weapon:
                            <img className="rounded-circle" src={require("../images/playericon.jpg")}/>
                        </div>
                        <div>
                            Game Duration: 1 Hrs 30 mins
                        </div>
                  </Col>
                  <Col>
                        Ally Team
                        <Row>
                            <Col>
                            Player 1
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            <Row>
                                Player 2
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 3
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 4
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 5
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            </Col>
                        </Row>

                  </Col>
                  <Col className="fluid">
                        Enemy Team
                        <Row>
                            <Col>
                            Player 1
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            <Row>
                                Player 2
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 3
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 4
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 5
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            </Col>
                        </Row>
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
                  <Col xs={5} className="text-center">
                        Dust 2
                        <img className="square bg-primary rounded-3" src={require("../images/infernoCSGO.jpg")}/>
                  </Col>
                  <Col className="col-3">
                        K/D Ratio: 1.2
                        <div>
                            MVP: Player Name
                        </div>
                        <div>
                            Best Weapon:
                            <img className="rounded-circle" src={require("../images/csgoM4A4.png")}/>
                        </div>
                        <div>
                            Game Duration: 2 Hrs
                        </div>
                  </Col>
                  <Col>
                        Ally Team
                        <Row>
                            <Col>
                            Player 1
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            <Row>
                                Player 2
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 3
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 4
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 5
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            </Col>
                        </Row>

                  </Col>
                  <Col className="fluid">
                        Enemy Team
                        <Row>
                            <Col>
                            Player 1
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            <Row>
                                Player 2
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 3
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 4
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            <Row>
                                Player 5
                                <Row>
                                    <img className="rounded-circle w-auto h-8" src={require("../images/playericon.jpg")}/>
                                </Row>
                            </Row>
                            </Col>
                        </Row>
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