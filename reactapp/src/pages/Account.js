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

  const handleClose = () => setProfileSubmittion(false);
  const handleShow = () => setProfileSubmittion(true);

  return (
    <div>
        <AccountProfile />

        <div className="max-w-lg mx-auto">
            <hr className="h-px my-8 bg-gray-200 border-10 dark:bg-gray-700"/>
        </div>

        <div className="container my-8 bg-red">

          <h1 className="mb-20">Settings</h1>
        
          <AccountFormProfile 
            showPN={showProfileSubmittion} 
            handleShow={handleShow} 
            handleClose={handleClose}
          />

          <AccountFormLinkGaming
            
          
          />

          <AccountFormNotifications
          />

          
        </div>
    </div>
  )
}

export default Account