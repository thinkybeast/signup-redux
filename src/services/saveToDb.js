import models from "../models";
import bcrypt from "bcrypt";

const saveToDb = async (fields) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(fields.password, saltRounds);

  fields = { ...fields, password: hash };
  const account = await models.Account.create(fields).catch((error) => ({
    error,
  }));

  if (account.error) {
    return account.error;
  } else {
    const { _id: id, firstName, lastName, username } = account.toObject();
    console.log(account.toJSON());
    return {
      id,
      data: {
        firstName,
        lastName,
        username,
      },
    };
  }
};

export default saveToDb;
