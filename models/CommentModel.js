import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  body: {
    type: String,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const commentModel = mongoose.model("comment");

export default commentModel;
