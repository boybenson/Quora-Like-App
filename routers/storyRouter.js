import express from "express";
import { POST_CREATE_A_STORY } from "../controllers/storyController.js";
import upload from "../middlewares/fileUpload.js";
const storyRouter = express.Router();

// Router To Create A Story
storyRouter.post(
  "/create-a-story/:userId",
  upload.single("featuredImage"),
  POST_CREATE_A_STORY
);
export default storyRouter;
