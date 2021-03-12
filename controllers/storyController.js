import storyModel from "../models/StoryModel.js";

// Create A Story
export const POST_CREATE_A_STORY = async (req, res, next) => {
  const { title, body } = req.body;
  const author = req.author;
  const featuredImage = req.file.path.replace(/\\/g, "/");

  try {
    const story = await storyModel.create({
      title,
      body,
      featuredImage,
      author,
    });

    if (story) {
      res.status(201).json({
        title: story.title,
        body: story.body,
        featuredImage: story.featuredImage,
        storyId: story._id,
        author: story.author,
        likes: story.likes,
        comments: story.comments,
        date: story.date,
        status: 201,
      });
    } else {
      const err = new Error("Couldn't Create Your Story, Kindly Try Again");
      err.status = 500;
      next(err);
    }
  } catch (error) {
    const err = new Error(error.message);
    err.status = 500;
    next(err);
  }
};
