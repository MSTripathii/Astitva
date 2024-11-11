import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';
import chatbotRoutes from './routes/chatbotRoutes'; // Adjust the path
import { authenticate } from './middleware/authMiddleware';
import { errorHandler } from './middleware/errorMiddleware';
import connectUserDB from './connections/userDB';


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

// Middleware setup
app.use(helmet());
app.use(express.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cookieParser());

// CORS setup
app.use(
    cors({
        origin: "*", // Frontend origin
        credentials: true,
    })
);

// Connect to the database
connectUserDB();

// Mount the chatbot routes at '/api'
app.use('/api', chatbotRoutes);

// Sample route
app.get("/sample", (req, res) => {
    res.send("hello from sample");
});

// Authentication and user routes
app.use(authRouter);
app.use("/users", authenticate, userRouter);

// Global error handler
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
