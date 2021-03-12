import express from "express";
import {
  GET_ALL_STORIES,
  POST_CREATE_A_STORY,
} from "../controllers/storyController.js";
import requireAuth from "../middlewares/authMiddleware.js";
import upload from "../middlewares/fileUpload.js";
const storyRouter = express.Router();

// Router To Create A Story
storyRouter.post(
  "/create-a-story",
  requireAuth,
  upload.single("featuredImage"),
  POST_CREATE_A_STORY
);

// Router To Fetch All Stories
storyRouter.get("/get-all-stories", GET_ALL_STORIES);
export default storyRouter;
