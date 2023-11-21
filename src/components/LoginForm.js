import EmailAndPassword from "./EmailAndPassword"
import ForgotPasswordLink from "./ForgotPasswordLink"
import LoginButton from "./LoginButton"
import RememberLogin from "./RememberLogin"
import SignUpButton from "./SignUpButton"
import {Container, Row} from "react-bootstrap";
import React from "react";

const LoginForm = () => {
  return (
    // <!--Sign In-->
      <Container fluid>
      <div className="w-25 p-5"></div>
        <Row>
            <div className="login_form">
                <div className="container flex flex-col mx-auto">
                    <div className="flex flex-col mb-16 mx-auto">
                        <h1 className="max-w-md text-4xl font-bold text-center">
                            Sign in to Frag Pulse
                        </h1>
                    </div>
                    <form>
                        <EmailAndPassword />
                        <div className="form-check max-w-sm mx-auto mb-5  ">
                            <RememberLogin />
                            <ForgotPasswordLink />
                        </div>
                        <LoginButton />
                        <div className="max-w-sm mx-auto">
                        </div>
                        <SignUpButton />
                    </form>
                </div>
            </div>
        </Row>
      </Container>
  )
}

export default LoginForm