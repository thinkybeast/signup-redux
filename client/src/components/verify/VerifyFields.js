import React from "react";

const VerifyFields = ({ fields }) => {
  return (
    <div id="verifyFields">
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="first_name">First Name</label>
          <p id="firstName">{fields.firstName || "First Name"}</p>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="last_name">Last Name</label>
          <p id="lastName">{fields.lastName || "Last Name"}</p>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <p id="email">{fields.email || "Email"}</p>
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <p id="username">{fields.username || "Username"}</p>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control-plaintext"
            id="password"
            placeholder="Password"
            value={fields.password}
            readOnly={true}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            className="form-control-plaintext"
            id="confirmPassword"
            placeholder="Password"
            value={fields.confirmPassword}
            readOnly={true}
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyFields;
