export const saveFields = (fields) => ({
  type: "SAVE_FIELDS",
  payload: {
    fields,
  },
});

export const resetFields = () => ({
  type: "SAVE_FIELDS",
  payload: {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  },
});
