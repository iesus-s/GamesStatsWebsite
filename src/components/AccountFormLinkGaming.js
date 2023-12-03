import {Form, Button, Modal, Badge} from 'react-bootstrap'

const AccountFormLinkGaming = ({showPN, handleShow, handleClose}) => {
  return (
    <Form >
        <h2 >Link Gaming Profiles</h2>

        <Badge pill bg='warning'>PC</Badge>
        <h5>Steam Username</h5>
        <Button variant="secondary" onClick={handleClose}>
            Link
        </Button>
        

        
        <Badge pill bg='success'>X</Badge>
        <h5>Xbox Gamertag</h5>
        <Button variant="secondary" onClick={handleClose}>
            Link
        </Button>
        

        
        <Badge pill bg='primary'>PS</Badge>
        <h5>Playstation Username</h5>
        <Button variant="secondary" onClick={handleClose}>
            Link
        </Button>

        
        <Badge pill bg='danger'>N</Badge>
        <h5>Nintendo Username</h5> 
        <Button variant="secondary" onClick={handleClose}>
            Link
        </Button>
           
    </Form>
  )
}

export default AccountFormLinkGaming