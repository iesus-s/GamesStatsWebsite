import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

const Friends = () => {

    const mutualFriendPFP={
    float:'right'
    }
    return(
<Row>
    <Col>

        <div>
                <Card style={{ width: '20rem' }}>

                  <Card.Body className="px-10">
                    <Card.Title >Louie
                    <div>
                    <img src={require("../images/playerIcon.png")}className="img-responsive img-circle" alt={"primary.png"} width={"32"} height={"32"}>
                                </img>
                    </div>
                    </Card.Title>
                    <div className="absolute right-0 top-0">
                            <ul>
                                <li>
                                K/D Ratio
                                <div>
                                1.20
                                </div>
                                </li>

                                <li>
                                W/L Ratio
                                <div>
                                0.5
                                </div>
                                </li>

                                <li>
                                Recently Played
                                <div>
                                <img src={require("../images/playericon.jpg")}className="img-responsive img-circle" alt={"primary.png"} width={"32"} height={"32"}>
                                </img>
                                </div>
                                </li>
                                </ul>


                    </div>
                    <Col>
                    <div >
                        Current Rank
                        <img src={require("../images/seasonHistory2.webp")}className="img-responsive img-circle" alt={"primary.png"} width={"32"} height={"32"}>
                                </img>
                    </div>
                    </Col>
                  </Card.Body>
                </Card>
        </div>
        <Row>
        <div>
            <Card>
                <div className="h-32 w-32 text-center">
                    Season Ranking
                    <div>
                        <ul>

                            <li>
                                Season 1
                                <img src={require("../images/seasonHistory1.webp")}className="img-responsive img-circle" alt={"playerIcon.png"} width={"12"} height={"12"}></img>
                            </li>
                            <li>

                                Season 2
                                <img src={require("../images/seasonHistory1.webp")}className="img-responsive img-circle" alt={"playerIcon.png"} width={"12"} height={"12"}></img>

                            </li>

                        </ul>
                    </div>
                </div>
            </Card>

            <Card >
                <div className="h-32 w-32 text-center">
                    Mutual Friends
                    <div>

                                Teh
                                <div style={mutualFriendPFP}>
                                <img src={require("../images/seasonHistory1.webp")} alt={"playerIcon.png"} width={"24"} height={"24"}></img>
                                </div>
                                <div style={mutualFriendPFP}>
                                <img src={require("../images/seasonHistory1.webp")} alt={"playerIcon.png"} width={"24"} height={"24"}></img>
                                Yamada
                                </div>
                                <div style={mutualFriendPFP}>
                                <img src={require("../images/seasonHistory1.webp")} alt={"playerIcon.png"} width={"24"} height={"24"}></img>
                                Arnold
                            </div>
                    </div>
                </div>
            </Card>
        </div>
    </Row>
    </Col>


    <Col>
            <div style={{width: '60rem'}}>
                    <ListGroup className="text-center">

                      <ListGroup.Item variant="success">
                      <Row>
                      <h4>
                      Game 1
                      </h4>
                      <Col>
                          <div className="">
                                K/D = 0.69
                                <div>
                                <img src={require("../images/mutualFriendsPlayerIcon.png")}className="absolute top-0" alt={"primary.png"} width={"150"} height={"150"}>
                                </img>

                                </div>
                                <div className="absolute left-32 bottom-0">
                                Dust 2 Remake
                                </div>
                                <div>
                                    MVP: Ashrafi
                                </div>
                                <Col>Champion:
                                <img src={require("../images/mail_support.jpg")} className="champion_image" alt={"playerIcon.png"}></img>
                                </Col>
                          </div>
                      </Col>
                      <Col>
                      <Row>
                        <Col>
                            <div>
                                Ally Team
                                <div>

                                        1. Dogan
                                        <div>
                                        2. Ashrafi
                                        </div>
                                        <div>
                                        3. Alimohammad
                                        </div>

                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div>
                                Enemy Team
                                <div>
                                    1. Dorr
                                    <div>
                                    2. Paolini
                                    </div>
                                    <div>
                                    3. Aksanli
                                    </div>
                                </div>
                            </div>
                        </Col>
                      </Row>
                      </Col>
                        <div className="fst-italic">
                            Game Duration: 5 hours
                        </div>
                        </Row>
                      </ListGroup.Item>

                      <ListGroup.Item variant="success">
                      <Row>
                      <h4>
                      Game 2
                      </h4>
                      <Col>
                          <div className="">
                                K/D = 1.29
                                <div>
                                <img src={require("../images/mutualFriendsPlayerIcon.png")}className="absolute top-0" alt={"primary.png"} width={"150"} height={"150"}>
                                </img>

                                </div>
                                <div className="absolute left-32 bottom-0">
                                Dust 3 Remake
                                </div>
                                <div>
                                    MVP: Teh
                                </div>
                                <div>Champion:
                                <div className="relative">
                                <img src={require("../images/mail_support.jpg")}className="absolute inset-y-0 bottom-0" alt={"playerIcon.png"} width={"24"} height={"24"}></img>

                                </div>
                                </div>
                          </div>
                      </Col>
                      <Col>
                      <Row>
                        <Col>
                            <div>
                                Ally Team
                                <div>

                                        1. Teh
                                        <div>
                                        2. Ashrafi
                                        </div>
                                        <div>
                                        3. Sabzigar
                                        </div>

                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div>
                                Enemy Team
                                <div>
                                    1. Thomas
                                    <div>
                                    2. Xie
                                    </div>
                                    <div>
                                    3. Kumar
                                    </div>
                                </div>
                            </div>
                        </Col>
                      </Row>
                      </Col>
                        <div className="fst-italic">
                            Game Duration: 1 hours
                        </div>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item variant="danger">
                      <Row>
                      <h4>
                      Game 3
                      </h4>
                      <Col>
                          <div className="">
                                K/D = 0.4
                                <div>
                                <img src={require("../images/mutualFriendsPlayerIcon.png")}className="absolute top-0" alt={"primary.png"} width={"150"} height={"150"}>
                                </img>

                                </div>
                                <div className="absolute left-32 bottom-0">
                                Mirage 2 Remake
                                </div>
                                <div>
                                    MVP: Lana
                                </div>
                                <div>Champion:
                                <div className="relative">
                                <img src={require("../images/mail_support.jpg")}className="absolute inset-y-0 bottom-0" alt={"playerIcon.png"} width={"24"} height={"24"}></img>

                                </div>
                                </div>
                          </div>
                      </Col>
                      <Col>
                      <Row>
                        <Col>
                            <div>
                                Ally Team
                                <div>

                                        1. Tito
                                        <div>
                                        2. Yamada
                                        </div>
                                        <div>
                                        3. Lana
                                        </div>

                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div>
                                Enemy Team
                                <div>
                                    1. Bahavana
                                    <div>
                                    2. Chris
                                    </div>
                                    <div>
                                    3. David
                                    </div>
                                </div>
                            </div>
                        </Col>
                      </Row>
                      </Col>
                        <div className="fst-italic">
                            Game Duration: 2.5 hours
                        </div>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item variant="danger">
                      <Row>
                      <h4>
                      Game 4
                      </h4>
                      <Col>
                          <div className="">
                                K/D = 1.7
                                <div>
                                <img src={require("../images/mutualFriendsPlayerIcon.png")}className="absolute top-0" alt={"primary.png"} width={"150"} height={"150"}>
                                </img>

                                </div>
                                <div className="absolute left-32 bottom-0">
                                Skyline Remake
                                </div>
                                <div>
                                    MVP: Dogan
                                </div>
                                <div>Champion:
                                <div className="relative">
                                <img src={require("../images/mail_support.jpg")}className="absolute inset-y-0 bottom-0" alt={"playerIcon.png"} width={"24"} height={"24"}></img>

                                </div>
                                </div>
                          </div>
                      </Col>
                      <Col>
                      <Row>
                        <Col>
                            <div>
                                Ally Team
                                <div>

                                        1. Dogan
                                        <div>
                                        2. Ashrafi
                                        </div>
                                        <div>
                                        3. Alimohammad
                                        </div>

                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div>
                                Enemy Team
                                <div>
                                    1. Dorr
                                    <div>
                                    2. Paolini
                                    </div>
                                    <div>
                                    3. Aksanli
                                    </div>
                                </div>
                            </div>
                        </Col>
                      </Row>
                      </Col>
                        <div className="fst-italic">
                            Game Duration: 7 hours
                        </div>
                        </Row>
                      </ListGroup.Item>


                          <ListGroup.Item variant="success">
                              <Row>
                      <h4>
                      Game 5
                      </h4>
                      <Col>
                          <div className="">
                                K/D = 2.3
                                <div>
                                <img src={require("../images/mutualFriendsPlayerIcon.png")}className="absolute top-0" alt={"primary.png"} width={"150"} height={"150"}>
                                </img>

                                </div>
                                <div className="absolute left-32 bottom-0">
                                Inferno Remake
                                </div>
                                <div>
                                    MVP: Maroue
                                </div>
                                <div>Champion:
                                <div className="relative">
                                <img src={require("../images/mail_support.jpg")}className="absolute inset-y-0 bottom-0" alt={"playerIcon.png"} width={"24"} height={"24"}></img>

                                </div>
                                </div>
                          </div>
                      </Col>
                      <Col>
                      <Row>
                        <Col>
                            <div>
                                Ally Team
                                <div>

                                        1. Maroue
                                        <div>
                                        2. Mark
                                        </div>
                                        <div>
                                        3. Mustafa
                                        </div>

                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div>
                                Enemy Team
                                <div>
                                    1. Schaffer
                                    <div>
                                    2. Paolini
                                    </div>
                                    <div>
                                    3. Aksanli
                                    </div>
                                </div>
                            </div>
                        </Col>
                      </Row>
                      </Col>
                        <div className="fst-italic">
                            Game Duration: 3.75 hours
                        </div>
                        </Row>
                          </ListGroup.Item>

                    </ListGroup>
            </div>


    </Col>
    <Col className="col-span-2">
        <div className="absolute w-36 left-15">
            <Card className="text-center">
                <div className="h-96 text-center">

                </div>
            </Card>
        </div>
    </Col>

    <Row>
        <Col>
        <div className="w-25 p-5"></div>
        <div>
            <Card>
                <div className="h-12 w-12 text-center">
                    ads
                </div>
            </Card>
        </div>
    </Col>
    </Row>

</Row>

    )
}

export default Friends;