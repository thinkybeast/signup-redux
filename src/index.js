import app from "./server";
import models, { connectDb } from "./models";

const port = process.env.PORT || 3001;

const eraseDatabaseOnSync = true; // Re-initialize DB on startup

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await models.Account.deleteMany({});
  }
  app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
  });
});
