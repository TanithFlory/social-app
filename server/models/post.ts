import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: true,
  },
});

export const Post = mongoose.model("Post", postsSchema);
