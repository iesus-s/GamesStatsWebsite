import EmailAndPassword from "./EmailAndPassword";
import ForgotPasswordLink from "./ForgotPasswordLink";
import LoginButton from "./LoginButton";
import RememberLogin from "./RememberLogin";
import SignUpButton from "./SignUpButton";
import { Container, Row } from "react-bootstrap";
import React, { useState } from "react";

const LoginForm = () => {
  // Step 1: State Management
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 2: Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Step 3: Logging User Information (This is just a placeholder, replace it with your actual implementation)
    console.log("User Information:", { email, password });

    // Add logic here to send the user information to your backend or storage
  };

  return (
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
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <EmailAndPassword
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
              <div className="form-check max-w-sm mx-auto mb-5">
                <RememberLogin />
                <ForgotPasswordLink />
              </div>
              {/* Adjusted layout for better alignment */}
              <div className="flex flex-col items-center w-full">
                <LoginButton />
              </div>
              <div className="max-w-sm mx-auto">
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              </div>
              <SignUpButton />
            </form>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default LoginForm;
