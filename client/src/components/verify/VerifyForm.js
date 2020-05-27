import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SaveRow from "../shared/SaveRow";
import ErrorMessage from "../shared/ErrorMessage";
import VerifyFields from "./VerifyFields";

import axios from "axios";

const mapStateToProps = (state) => {
  return {
    fields: state.fields,
  };
};

class VerifyForm extends Component {
  state = { error: "" };

  componentDidMount() {
    if (!this.props.fields.username) {
      this.props.history.push("/");
    }
    document.body.classList.add("verification");
  }

  componentWillUnmount() {
    document.body.classList.remove("verification");
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...fields } = this.props.fields;
    axios
      .post("/api/accounts", fields)
      .then((resp) => {
        this.props.history.push("/success");
      })
      .catch((error) => {
        const errorFields = Object.keys(error.response.data.errors).join(", ");
        this.setState({
          error: `We had trouble saving your information. Please edit the following fields and try again: ${errorFields}`,
        });
      });
  };

  render() {
    return (
      <div id="signup-form" className="container">
        <h1>Does this look correct?</h1>
        <ErrorMessage message={this.state.error} />
        <form action="#" onSubmit={this.handleSubmit}>
          <VerifyFields fields={this.props.fields} />
          <SaveRow>
            <button
              type="button"
              className="btn btn-danger btn-lg"
              id="edit_info_btn"
              onClick={(e) => {
                e.preventDefault();
                this.props.history.push("/");
              }}
            >
              Edit Information
            </button>
            <button
              type="submit"
              className="btn btn-success btn-lg"
              id="create_acct_btn"
            >
              Confirm
            </button>
          </SaveRow>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(VerifyForm));
