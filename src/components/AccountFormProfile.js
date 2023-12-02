import {Form, Button, Modal} from 'react-bootstrap'

const AccountFormProfile = ({showPN, handleShow, handleClose}) => {
  return (
    <Form>
    <h2>Edit Profile</h2>
    <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="file" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Profile Name</Form.Label>
        <Form.Control type="text" placeholder="Profile Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Bio Entry</Form.Label>
        <Form.Control as="textarea" rows={3} />
    </Form.Group>

    <Button variant="primary" type="submit" onClick={handleShow}>
        Submit
    </Button>

    <Modal show={showPN} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Profile Name</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">Success!</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
    </Modal>

    </Form>
  )
}

export default AccountFormProfile