import express from "express";
import authRouter from "./routes/authRouter";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(authRouter);