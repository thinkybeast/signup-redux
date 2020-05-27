const saveFieldsRequest = (fields) => ({
  type: "SAVE_FIELDS",
  payload: {
    fields,
  },
});

const createAccountRequest = () => ({
  type: "CREATE_ACCOUNT_REQUEST",
});
const createAccountSuccess = () => ({
  type: "SUBMIT_SIGNUP_SUCCESS",
});

export const saveFields = (fields) => (dispatch) => {
  console.log(JSON.stringify(fields));
  dispatch(saveFieldsRequest(fields));
};

export const createAccount = (fields) => (dispatch) => {
  // save to database and fire callback
};
