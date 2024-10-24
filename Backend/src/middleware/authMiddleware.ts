import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User, { IUserModel } from "../models/User";
import asyncHandler from "express-async-handler";
import { AuthenticationError } from "./errorMiddleware";

// Authentication middleware
const authenticate = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.cookies.jwt;

            if (!token) {
                throw new AuthenticationError("Token not found");
            }

            const jwtSecret = process.env.JWT_SECRET || "";
            const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

            if (!decoded || !decoded.userId) {
                throw new AuthenticationError("UserId not found");
            }

            const user = await User.findById(decoded.userId, "_id name email") as IUserModel;

            if (!user) {
                throw new AuthenticationError("User not found");
            }

            // Convert _id to string and assign user
            req.user = {
                _id: user._id as string, // Convert ObjectId to string
                name: user.name,
                email: user.email,
            };

            next();
        } catch (e) {
            throw new AuthenticationError("Invalid token");
        }
    }
);

export { authenticate };
