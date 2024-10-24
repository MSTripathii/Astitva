// routes/authRouter.ts
import express from "express";
import {
  registerUser,
  authenticateUser,
  // logoutUser, // Commented out for now
} from "../controllers/authController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authenticateUser);
// router.post("/logout", logoutUser); // Commented out for now

export default router;