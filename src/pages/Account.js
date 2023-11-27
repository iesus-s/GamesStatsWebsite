import AccountProfile from "../components/AccountProfile"
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Container, Row, Col, Form, Button, Card, CardImg} from "react-bootstrap";
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
        <div className="container my-8">
          <h2>Edit Profile</h2>
          <div class="d-sm-flex flex-column justify-content-center">
                  
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Profile Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <button class="btn btn-outline-secondary" type="button" id="Profile Name" onClick={handleShow}>Enter</button>
            </div>
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
            <label for="formGroupBioInput" class="form-label ">Bio Entry</label>
            <div class="input-group mb-3" id="formGroupBioInput">
              <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Enter</button>
          </div>

          <h2>Link Gaming Profiles</h2>
          <div class="d-sm-flex flex-column justify-content-center">
            <div class="mb-3">
              <span class="badge rounded-pill bg-warning">PC</span>
              <label for="colFormLabel" class="col col-form-label col-form-label">Steam Username</label>
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Link</button>
            </div>

            <div class="mb-3">
              <span class="badge rounded-pill bg-success">X</span>
              <label for="colFormLabel" class="col col-form-label col-form-label">Xbox Gamertag</label>
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Link</button>
            </div>

            <div class="mb-3">
              <span class="badge rounded-pill bg-primary">PS</span>
              <label for="colFormLabel" class="col col-form-label col-form-label">Playstation Username</label>
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Link</button>
            </div>

            <div class="mb-3">
              <span class="badge rounded-pill bg-danger">N</span>
              <label for="colFormLabel" class="col col-form-label col-form-label">Nintendo Username</label>
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Link</button>
            </div>

          </div>

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