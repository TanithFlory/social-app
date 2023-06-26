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
  userName: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: false,
  },
  likedBy: {
    type: [String],
    required: false,
  },
  comments: {
    type: [
      {
        comment: String,
        commentBy: String,
      },
    ],
  },
});

export const Post = mongoose.model("Post", postsSchema);
