import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    default: null,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: Number,
  },
  otpExpiry: {
    type: Number,
  },
  posts: [
    {
      title: String,
      content: String,
    },
  ],
});

export const User = mongoose.model("User", usersSchema);
