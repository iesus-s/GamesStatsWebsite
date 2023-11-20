import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <div className="footer">
                        <footer className="footer">
                            <p className="lead">Copyright &copy; 2023 Game Page Name</p>
                        </footer>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Footer;