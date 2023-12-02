import {Form, Button, Modal} from 'react-bootstrap'

const AccountFormLinkGaming = () => {
  return (
    <div>
        <h2>Link Gaming Profiles</h2>

        <h5>
        <Badge pill bg='warning'>PC</Badge>
        Steam Username
        <Button variant="secondary" onClick={handleClose}>
            Link
        </Button>
        </h5>

        <h5>
        <Badge pill bg='success'>X</Badge>
        Xbox Gamertag
        <Button variant="secondary" onClick={handleClose}>
            Link
        </Button>
        </h5>

        <h5>
        <Badge pill bg='primary'>PS</Badge>
        Playstation Username
        <Button variant="secondary" onClick={handleClose}>
            Link
        </Button>
        </h5>

        <h5>
        <Badge pill bg='danger'>N</Badge>
        Nintendo Username
        <Button variant="secondary" onClick={handleClose}>
            Link
        </Button>
        </h5>    
    </div>
  )
}

export default AccountFormLinkGaming