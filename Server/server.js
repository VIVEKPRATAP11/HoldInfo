import { app } from "./app.js";
import connectDB from "./config/connectDB.js";

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
