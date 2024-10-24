import express from "express";
import authRouter from "./routes/authRouter";
import connectUserDB from "./connections/userDB";
import dotenv from "dotenv";
import bodyParser from "body-parser";


dotenv.config();

connectUserDB();

const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(authRouter);