import React from "react";

const ErrorMessage = ({ message }) => {
  return message !== "" ? (
    <small className="form-text text-muted">{message}</small>
  ) : null;
};

export default ErrorMessage;
