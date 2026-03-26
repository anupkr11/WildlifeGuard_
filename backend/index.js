import app from "./app.js"
import dbConnect from "./config/database.js"
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
dbConnect();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});