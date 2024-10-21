import { Request, Response } from "express";
import mongoose, { Document } from "mongoose";
import User from "../models/User";
import { generateToken, clearToken } from "../utils/auth";

// Define the IUser interface extending Document
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  _id: mongoose.Types.ObjectId;  // Define _id as ObjectId explicitly
  comparePassword: (password: string) => Promise<boolean>;
}

// Register a new user
const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // Check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "The user already exists" });
  }

  // Create a new user
//   const user = new User({
//     name,
//     email,
//     password,
//   }) as IUser;  // Cast user as IUser to avoid type issues
const user = await User.create({
    name,
    email,
    password,
}) as unknown as IUser;

  await user.save();  // Save the user

  if (user) {
    generateToken(res, user._id.toString());  // Cast _id to string
    res.status(201).json({
      id: user._id.toString(),  // Cast _id to string
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json({ message: "An error occurred in creating the user" });
  }
};

// Authenticate the user
const authenticateUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }) as IUser;  // Ensure user is of type IUser
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  const isMatch = await user.comparePassword(password);  // Use comparePassword properly
  if (!isMatch) {
    return res.status(401).json({ message: "Password incorrect" });
  }

  generateToken(res, user._id.toString());  // Cast _id to string
  res.status(201).json({
    id: user._id.toString(),  // Cast _id to string
    name: user.name,
    email: user.email,
  });
};

// Log out the user
const logoutUser = (req: Request, res: Response) => {
  clearToken(res);
  res.status(200).json({ message: "User logged out" });
};

export { registerUser, authenticateUser, logoutUser };
