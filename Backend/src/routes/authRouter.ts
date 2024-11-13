// // routes/authRouter.ts
// import express from "express";
// import {
//   registerUser,
//   authenticateUser,
//   logoutUser,
// } from "../controllers/authController";

// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", authenticateUser);
// // router.post("/logout", logoutUser); // Commented out for now

// export default router;

// routes/authRouter.ts
import express from 'express';
import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import User from '../models/User';

const router = express.Router();

// Register route
router.post('/signup', async (req:any, res:any) => {
    const { name, email, password } = req.body;
    console.log(name)
    console.log(password)
    console.log(email)
    try {
        // Create a new user
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ user: { id: newUser._id, name: newUser.name, email: newUser.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Login route
router.post('/login', async (req:any, res:any) => {
    const { email, password } = req.body;
    console.log(email)
    console.log(password)
    try {
        const user = await User.find({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        res.json({ user});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in' });
    }
});

export default router;