import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <div className="flex-col flex fixed-bottom">
                        <footer className="p-4 bg-dark text-white text-center">
                            <p className="lead">Copyright &copy; 2023 Game Page Name</p>
                        </footer>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Footer;