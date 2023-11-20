import EmailAndPassword from "./EmailAndPassword"
import ForgotPasswordLink from "./ForgotPasswordLink"
import LoginButton from "./LoginButton"
import RememberLogin from "./RememberLogin"
import SignUpButton from "./SignUpButton"
import {Container, Row} from "react-bootstrap";

const LoginForm = () => {
  return (
    // <!--Sign In-->
      <Container fluid>
        <Row>
            <section id="sign-in">
                <div className="container flex flex-col mx-auto">
                    <div className="flex flex-col mb-16 mx-auto space-y-12">
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
                          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        </div>
                        <SignUpButton />
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2023 FragPulse. All rights reserved.
                    </p>
                </div>
            </section>
        </Row>
      </Container>
  )
}

export default LoginForm