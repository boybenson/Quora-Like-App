import express from "express";
import { LOGIN_POST, REGISTER_POST } from "../controllers/authController.js";
const authRouter = express.Router();

// Register Route
authRouter.post("/register", REGISTER_POST);

// Login Route
authRouter.post("/login", LOGIN_POST);
export default authRouter;
