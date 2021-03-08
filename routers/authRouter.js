import express from "express";
import { REGISTER_POST } from "../controllers/authController.js";
const authRouter = express.Router();

// Register Route
authRouter.post("/register", REGISTER_POST);

export default authRouter;
