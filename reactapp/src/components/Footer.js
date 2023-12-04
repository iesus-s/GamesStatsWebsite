import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <footer className="footer">
                        <p className="lead">Copyright &copy; 2023 PulseFrag</p>
                    </footer>
                </Row>
            </Container>
        );
    }
}

export default Footer;