import React from "react";
import ErrorMessage from "./ErrorMessage";

const SignupFields = ({ fields, onChange }) => {
  return (
    <div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={fields.firstName}
            onChange={onChange}
            noValidate
          />
          <ErrorMessage
            message={fields.errors.firstName}
            show={!!fields.errors.firstName}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={fields.lastName}
            onChange={onChange}
            noValidate
          />
          <ErrorMessage message={fields.errors.lastName} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Email"
          value={fields.email}
          onChange={onChange}
          noValidate
        />
        <ErrorMessage message={fields.errors.email} />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          placeholder="Username"
          value={fields.username}
          onChange={onChange}
          noValidate
        />
        <ErrorMessage message={fields.errors.username} />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={fields.password}
            onChange={onChange}
            noValidate
          />
          <ErrorMessage message={fields.errors.password} />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Password"
            value={fields.confirmPassword}
            onChange={onChange}
            noValidate
          />
          <ErrorMessage message={fields.errors.confirmPassword} />
        </div>
      </div>
    </div>
  );
};

export default SignupFields;
