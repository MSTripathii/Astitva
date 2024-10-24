import express from "express";
import authRouter from "./routes/authRouter";
import connectUserDB from "./connections/userDB";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter";
import { authenticate } from "./middleware/authMiddleware";
import { errorHandler } from "./middleware/errorMiddleware";

// Load environment variables
dotenv.config();

// Interface for User Basic Info
interface UserBasicInfo {
    _id: string;  // Keep this as string
    name: string;
    email: string;
}

// Extend the Express Request interface
declare global {
    namespace Express {
        interface Request {
            user?: UserBasicInfo | null;
        }
    }
}

const app = express();
const port = process.env.PORT || 8000;
app.use(helmet());

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
connectUserDB();

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Use routes
app.use(authRouter);
app.use("/users", authenticate, userRouter);
app.use(errorHandler);
