import React from "react";
import {Row, Col, Container} from 'react-bootstrap'

const Banner = ({message}) => {
  return (
      <Container fluid>
        <Row>
            <Col>
                <div className="banner_class">
                    <div className="container-fluid flex flex-col mx-auto px-2 bg-gradient-to-r from-red-600 to-stone-950">
                        <div className="flex flex-col mx-auto">
                            <h1 className="max-w-md text-xl font-bold text-center text-white ">
                                {message}
                            </h1>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
  )
}

Banner.defaultProps = {
    message: 'Monitor Game metrics and challenge friends with Frag Pulse',
}


export default Banner