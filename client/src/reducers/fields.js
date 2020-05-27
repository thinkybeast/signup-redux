const fields = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_FIELDS":
      return { ...action.payload.fields };
    default:
      return state;
  }
};

export default fields;
