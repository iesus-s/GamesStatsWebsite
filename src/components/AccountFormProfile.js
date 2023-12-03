import { useState } from 'react';

import {Form, Button, Modal} from 'react-bootstrap'

const AccountFormProfile = ({showProfileSubmittion, handleShow, handleClose}) => {
    const [onSubmit, SetSubmit] = useState(false)
    const [profileImage, setProfileImage] = useState('')
    const [profileName, setProfileName] = useState('')
    const [profileBio, setProfileBio] = useState('')


    
    const handleSubmit = (event) => {
        event.preventDefault();
        const profileUpdate = { profileImage, profileName, profileBio };
        SetSubmit(true);
        console.log(profileUpdate);
    }
  
    return (
        <Form onSubmit={handleSubmit}>
            <h2>Edit Profile</h2>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control 
                    type="file"
                    name='ProfileImage'
                    value={profileImage}
                    onChange={e => setProfileImage(e.target.value)}

                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Profile Name</Form.Label>
                <Form.Control 
                    type="text" 
                    name='ProfileName'
                    placeholder="Profile Name" 
                    value={profileName}
                    onChange={e => setProfileName(e.target.value)}
                
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Bio Entry</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3}
                    name='ProfileBio'
                    value={profileBio}
                    onChange={e => setProfileBio(e.target.value)}

                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    )
}

export default AccountFormProfile