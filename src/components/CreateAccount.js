import EmailAndPassword from "./EmailAndPassword"
import ForgotPasswordLink from "./ForgotPasswordLink"
import LoginButton from "./LoginButton"
import FirstNameLastName from "./FirstLastName"
import RememberLogin from "./RememberLogin"
import SignUpButton from "./SignUpButton"
import {Container, Row} from "react-bootstrap";
import React, {Component} from 'react';
import FirstLastName from "./FirstLastName";
import NewUser from "./NewUser";
import SignInLink from "./SignInLink";

class CreateAccount extends Component {
    render() {
        return (
            <Container fluid>
              <div className="w-25 p-5"></div>
                <Row>
                    <div className="login_form">
                        <div className="container flex flex-col mx-auto">
                            <div className="flex flex-col mb-16 mx-auto">
                                <h1 className="max-w-md text-4xl font-bold text-center">
                                    Create Account
                                </h1>
                                <h2 className="max-w-sm font-bold text-center">
                                    Give Us Your Information
                                </h2>
                            </div>
                            <form>
                                <FirstNameLastName />
                                <EmailAndPassword />
                                <NewUser />
                                <div className="form-check max-w-sm mx-auto mb-5  ">
                                    Already Registered?
                                    <SignInLink />
                                </div>
                            </form>
                        </div>
                    </div>
                </Row>
          </Container>
        );
    }
}

export default CreateAccount;