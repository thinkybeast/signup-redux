import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import SaveRow from "../shared/SaveRow";
import { createAccount } from "../../actions";
import { connect } from "react-redux";
import VerifyFields from "./VerifyFields";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (fields) => {
    dispatch(createAccount(fields));
  },
});

const VerifyForm = (props) => {
  const history = useHistory();

  useEffect(() => {
    if (!props.fields.username) {
      history.push("/");
    }
    document.body.classList.add("verification");
    return () => document.body.classList.remove("verification");
  }, [props.fields]);

  return (
    <div id="signup-form" className="container">
      <h1>Does this look correct?</h1>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(props.fields);
          history.push("/success");
        }}
      >
        <VerifyFields fields={props.fields} />
        <SaveRow>
          <button
            type="button"
            className="btn btn-danger btn-lg"
            id="edit_info_btn"
            onClick={(e) => {
              e.preventDefault();
              history.push("/");
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
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyForm);
