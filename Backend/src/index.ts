import express from "express";
import authRouter from "./routes/authRouter";
import connectUserDB from "./connections/userDB";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
connectUserDB();

console.log('MongoDB URI:', process.env.MONGO_URI);  // Debugging output

const app = express();
const port = process.env.PORT || 3002;
app.use(bodyParser.json());

// Use the auth router
app.use(authRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});