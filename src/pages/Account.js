import AccountProfile from "../components/AccountProfile";
import AccountFormProfile from "../components/AccountFormProfile";
import AccountFormLinkGaming from "../components/AccountFormLinkGaming";

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Container, Row, Col, Form, Button, Card, CardImg, Badge} from "react-bootstrap";
document.body.style.backgroundColor = "#FBF5F3";
// import AccountAccordion from "../components/AccountAccordion"

const Account = () => {
  const [showPN, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <AccountProfile />

        <div className="max-w-lg mx-auto">
            <hr className="h-px my-8 bg-gray-200 border-10 dark:bg-gray-700"/>
        </div>

        <div className="container my-8 bg-red">

          <h1 className="mb-20">Settings</h1>
        
          <AccountFormProfile 
            showPN={showPN} 
            handleShow={handleShow} 
            handleClose={handleClose}
          />

          <AccountFormLinkGaming

          
          />
  
          <h2>Notifications</h2>

          <div class="d-sm-flex justify-content-center">
            <p class="d-sm-inline-flex px-5">New Friends</p>
            <div class="d-sm-inline-flex form-check form-switch ">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            </div>
          </div>

          <div class="d-sm-flex justify-content-center">
            <p class="d-sm-inline-flex px-5">Game updates</p>
            <div class="d-sm-inline-flex form-check form-switch ">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            </div>
          </div>

          <div class="d-sm-flex justify-content-center">
            <p class="d-sm-inline-flex px-5">Challenges</p>
            <div class="d-sm-inline-flex form-check form-switch ">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            </div>
          </div>

          <div class="d-sm-flex justify-content-center">
            <p class="d-sm-inline-flex px-5">Site News</p>
            <div class="d-sm-inline-flex form-check form-switch ">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Account