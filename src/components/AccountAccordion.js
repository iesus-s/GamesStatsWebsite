import Accordion from 'react-bootstrap/Accordion'
import ForgotPasswordLink from './ForgotPasswordLink'
import AccordionProfileName from './AccordionProfileName'
import AccordionBioEntry from './AccordionBioEntry'
import { AccordionItem, AccordionHeader} from 'react-bootstrap'
import AccordionBody from 'react-bootstrap/AccordionBody'

const AccountAccordion = () => {
  return (
    <Accordion defaultActiveKey={['0']} flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Account Information</Accordion.Header>
        <Accordion.Body>
                Hello Test
                <ForgotPasswordLink />
                <AccordionProfileName />
                <AccordionBioEntry />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Account Preferences</Accordion.Header>
        <Accordion.Body>
        <div className="d-sm-flex flex-column justify-content-center">

          <div className="d-sm-flex form-check form-switch ">
            <p className="d-sm-flex px-5">Dark Mode</p>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
          </div>

          <select className="form-select" aria-label="Default select example">
            <option selected>Language</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <AccordionItem eventKey="3">
        <AccordionHeader>Linked Accounts</AccordionHeader>
        <AccordionBody>
        <div className="d-sm-flex flex-column justify-content-center">

            <div className="mb-3">
                <span className="badge rounded-pill bg-warning">PC</span>
                <label for="colFormLabel" className="col col-form-label col-form-label">Steam Username</label>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Link</button>
            </div>

            <div className="mb-3">
                <span className="badge rounded-pill bg-success">X</span>
                <label for="colFormLabel" className="col col-form-label col-form-label">Xbox Gamertag</label>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Link</button>
            </div>

            <div className="mb-3">
                <span className="badge rounded-pill bg-primary">PS</span>
                <label for="colFormLabel" className="col col-form-label col-form-label">Playstation Username</label>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Link</button>
            </div>

            <div className="mb-3">
                <span className="badge rounded-pill bg-danger">N</span>
                <label for="colFormLabel" className="col col-form-label col-form-label">Nintendo Username</label>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Link</button>
            </div>

        </div>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem eventKey="4">
        <AccordionHeader>Notifications</AccordionHeader>
        <AccordionBody>
        <div className="d-sm-flex flex-column justify-content-center">

          <div className="d-sm-flex justify-content-center">
            <p className="d-sm-inline-flex px-5">New Friends</p>
            <div className="d-sm-inline-flex form-check form-switch ">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            </div>
          </div>

          <div className="d-sm-flex justify-content-center">
            <p className="d-sm-inline-flex px-5">Game updates</p>
            <div className="d-sm-inline-flex form-check form-switch ">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            </div>
          </div>

          <div className="d-sm-flex justify-content-center">
            <p className="d-sm-inline-flex px-5">Challenges</p>
            <div className="d-sm-inline-flex form-check form-switch ">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            </div>
          </div>

          <div className="d-sm-flex justify-content-center">
            <p className="d-sm-inline-flex px-5">Site News</p>
            <div className="d-sm-inline-flex form-check form-switch ">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            </div>
          </div>
        </div>
        </AccordionBody>
    </AccordionItem>

    </Accordion>

  )
}

export default AccountAccordion