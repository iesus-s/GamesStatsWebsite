import AccountProfile from "../components/AccountProfile";
import AccountFormProfile from "../components/AccountFormProfile";
import AccountFormLinkGaming from "../components/AccountFormLinkGaming";
import AccountFormNotifications from "../components/AccountFormNotifications";

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Container, Row, Col, Form, Button, Card, CardImg, Badge} from "react-bootstrap";
document.body.style.backgroundColor = "#FBF5F3";
// import AccountAccordion from "../components/AccountAccordion"

const Account = () => {
  const [showProfileSubmittion, setProfileSubmittion] = useState(false);
  const [showProfileSettings, setProfileSettings] = useState(true);
  const [showLinkAccountSettings, setLinkAccountSettings] = useState(false);
  const [showNotificationSettings, setNotificationsSettings] = useState(false);

  const handleClose = () => setProfileSubmittion(false);
  const handleShow = () => setProfileSubmittion(true);

  const handleButtonEditProfile = () => {
    setProfileSettings(true);
    setLinkAccountSettings(false);
    setNotificationsSettings(false);
  };

  const handleButtonLinkProfile = () => {
    setProfileSettings(false);
    setLinkAccountSettings(true);
    setNotificationsSettings(false);
  };

  const handleButtonEditNotifications = () => {
    setProfileSettings(false);
    setLinkAccountSettings(false);
    setNotificationsSettings(true);
  };

  return (
    <div className="container-fluid pt-40 pb-20 bg-gradient-to-b from-logo via-night to-logo">
      <div className=" my-0">
        <h1></h1>
        <AccountProfile />

        <div className="max-w-lg mx-auto">
            <hr className="h-px my-20 bg-night border-10 dark:bg-gray-700"/>
        </div>

        <div className="container mt-10 pb-10 bg-beaver">

          <h1 className="mb-10 mx-auto">Settings</h1>
          <Row>
            <Col md={4}>
              <Row>
                <Button variant="black" onClick={ () =>{
                  handleButtonEditProfile();
                }}>
                  Edit Profile
                </Button>
              </Row>
              <Row>
                <Button variant="black"  onClick={ () =>{
                  handleButtonLinkProfile();
                }}>
                  Link Gaming Profiles
                </Button>
              </Row>
              <Row>
                <Button variant="black"  onClick={ () =>{
                  handleButtonEditNotifications();
                }}>
                  Edit Notifications
                </Button>
              </Row>
            </Col>

            <Col lg={8}>
              {showProfileSettings ? <AccountFormProfile /> : <></> }
              {showLinkAccountSettings ? <AccountFormLinkGaming/> : <></>}
              {showNotificationSettings ? <AccountFormNotifications/> : <></>}
            </Col>

          </Row>

          
        </div>
      </div>
    </div>
  )
}

export default Account