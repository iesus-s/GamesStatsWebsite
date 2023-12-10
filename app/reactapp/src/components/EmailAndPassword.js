import React from "react";

const EmailAndPassword = ({ email, setEmail, password, setPassword }) => {
  // Event handlers to update state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center max-w-sm mx-auto mb-5 space-y-8">
      {/* Use value and onChange to bind the inputs to the state */}
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        id="inputEmail"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        id="inputPassword3"
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
  );
};

export default EmailAndPassword;
