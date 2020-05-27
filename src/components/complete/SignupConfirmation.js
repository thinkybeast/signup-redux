import React, { useEffect } from "react";

const SignupConfimation = () => {
  useEffect(() => {
    document.body.classList.add("confirmation");
    return () => document.body.classList.remove("confirmation");
  }, []);

  return (
    <div id="signup-form" className="container">
      <h1>Your account has been created</h1>
      <p>Congrats! We've successfully created your account.</p>
    </div>
  );
};

export default SignupConfimation;
