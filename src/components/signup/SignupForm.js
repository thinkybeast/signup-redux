import React, { Component } from "react";
import SignupFields from "./SignupFields";
import SaveRow from "../shared/SaveRow";
import { validateField } from "../../lib/validation";
import { saveFields } from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (fields) => {
    dispatch(saveFields(fields));
  },
});

class SignupForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  };

  componentDidMount() {
    if (this.props.fields.firstName) {
      this.setState({ ...this.props.fields });
    }

    document.body.classList.add("landing");
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const errorMsg = validateField[name](value, this.state);

    this.setState((prevState) => {
      const errors = { ...prevState.errors, [name]: errorMsg };
      return {
        [name]: value,
        errors,
      };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { errors, ...fields } = this.state;
    this.props.onSubmit(fields);
    this.props.history.push("/verify");
  };

  isValidForm = () => {
    const { errors, ...fields } = this.state;
    let formIsValid = true;

    for (let field in fields) {
      console.log(field, fields[field], errors[field]);
      formIsValid = formIsValid && fields[field] !== "" && errors[field] === "";
      console.log(formIsValid);
    }

    return formIsValid;
  };
  render() {
    let validForm = this.isValidForm();

    return (
      <div id="signup-form" className="container">
        <h1>Get started with your account</h1>
        <form action="#" onSubmit={this.handleSubmit}>
          <SignupFields fields={this.state} onChange={this.handleChange} />
          <SaveRow>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              id="create_acct_btn"
              disabled={!validForm}
            >
              Create Account
            </button>
          </SaveRow>
        </form>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignupForm)
);
