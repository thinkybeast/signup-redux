import mongoose from "mongoose";

import Account from "./account";

const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/signup-mongodb-server";

const connectDb = () => {
  return mongoose.connect(DATABASE_URL);
};

const models = { Account };

export { connectDb };

export default models;
