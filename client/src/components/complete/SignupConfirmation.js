import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { resetFields } from "../../actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    fields: state.fields,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetFields: () => {
      dispatch(resetFields());
    },
  };
};

class SignupConfimation extends Component {
  componentDidMount() {
    if (!this.props.fields.username) {
      this.props.history.push("/");
    }

    this.props.resetFields();
    document.body.classList.add("confirmation");
  }

  componentWillUnmount() {
    document.body.classList.remove("confirmation");
  }

  render() {
    return (
      <div id="signup-form" className="container">
        <h1>Your account has been created</h1>
        <p>
          Congrats! We've successfully created your account. Click
          <Link to="/"> here </Link>
          to return to the signup page.
        </p>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignupConfimation)
);
