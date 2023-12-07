import {Form, Button, Modal, Badge, Row, Col} from 'react-bootstrap'

const AccountFormLinkGaming = ({showPN, handleShow, handleClose}) => {
  return (
    <Form >
        <h2 className='mt-20 mb-10'>Link Gaming Profiles</h2>
        <Row xs="auto" className='mx-auto'>
            <Col>
                <Badge pill bg='warning'>PC</Badge>
            </Col>
            <Col>
                <h5>Steam Username</h5>
            </Col>
            <Col>
                <Button variant="secondary" onClick={handleClose}>
                    Link
                </Button>
            </Col>
        </Row>
        <Row xs="auto" className='mx-auto'>
            <Col>
                <Badge pill bg='success'>X</Badge>
            </Col>
            <Col>
                <h5>Xbox Gamertag</h5>
            </Col>
            <Col>
                <Button variant="secondary" onClick={handleClose}>
                    Link
                </Button>
            </Col>
        </Row>
        <Row xs="auto" className='mx-auto'>
            <Col>
                <Badge pill bg='primary'>PS</Badge>
            </Col>
            <Col>
                <h5>Playstation Username</h5>
            </Col>
            <Col>
                <Button variant="secondary" onClick={handleClose}>
                    Link
                </Button>
            </Col>
        </Row>
        <Row xs="auto" className='mx-auto'>
            <Col>
                <Badge pill bg='danger'>N</Badge>
            </Col>
            <Col>
                <h5>Nintendo Username</h5>
            </Col>
            <Col>
                <Button variant="secondary" onClick={handleClose}>
                    Link
                </Button>
            </Col>
        </Row>
           
    </Form>
  )
}

export default AccountFormLinkGaming