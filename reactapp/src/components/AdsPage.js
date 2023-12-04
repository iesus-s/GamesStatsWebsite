import React, { Component } from 'react';
import {Row, Col, Container, AccordionCollapse} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

class AdsPage extends Component {
    render() {
        return (
            <div>
                <Container fluid className="flex justify-content-center">
                    <Row>
                        <video className="gorilla" width="200px" height="100px" autoPlay controls>
                            <source className="gorilla" src={require("../images/ad.mp4")}></source>
                        </video>
                        <div className="w-25 p-5"></div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AdsPage;