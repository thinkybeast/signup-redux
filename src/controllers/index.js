import saveToDb from "../services/saveToDb";

const createAccount = async (req, res) => {
  const fields = req.body;
  const account = await saveToDb(fields);

  if (account.error) {
    res.status(500);
    res.json(account.error);
  } else {
    res.status(201);
    res.json(account);
  }
};

export default createAccount;
