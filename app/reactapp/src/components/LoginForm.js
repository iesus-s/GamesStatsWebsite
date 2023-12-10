import EmailAndPassword from "./EmailAndPassword"
import ForgotPasswordLink from "./ForgotPasswordLink"
import LoginButton from "./LoginButton"
import RememberLogin from "./RememberLogin"
import SignUpButton from "./SignUpButton"
import {Form, Button, Container, Row} from "react-bootstrap";
import { useState, react } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
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

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEMail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email"
                                name='email'
                                value={email}
                                onChange={e => setProfileImage(e.target.value)}

                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="text" 
                                name='password'
                                placeholder="password" 
                                value={password}
                                onChange={e => setProfileName(e.target.value)}
                            
                            />
                        </Form.Group>

                        <div className="form-check max-w-sm mx-auto mb-5  ">
                            <RememberLogin />
                            <ForgotPasswordLink />
                        </div>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>

                        <div className="max-w-sm mx-auto">
                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                        </div>

                        <SignUpButton />
                        
                    </Form>


                </div>
            </div>
        </Row>
      </Container>
  )
}

export default LoginForm