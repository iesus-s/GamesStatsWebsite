import {Form, Button, Modal, Badge} from 'react-bootstrap'

const AccountFormNotifications = () => {
  return (
    <Form>  
        <h2>Notifications</h2>

        <Form.Check
            type='switch'
            id='Custom-switch'
            label='New Friends'
        />
        <Form.Check
            type='switch'
            id='Custom-switch'
            label='Game updates'
        />
        <Form.Check
            type='switch'
            id='Custom-switch'
            label='Challenges'
        />
        <Form.Check
            type='switch'
            id='Custom-switch'
            label='Site News'
        />
    </Form>
  )
}

export default AccountFormNotifications