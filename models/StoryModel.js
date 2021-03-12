import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },

  featuredImage: {
    type: String,
    required: true,
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const storyModel = mongoose.model("Story", storySchema);

export default storyModel;
