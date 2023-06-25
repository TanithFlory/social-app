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
  },
  password: {
    type: String,
    default: null,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Number,
  },
});

export const User = mongoose.model("User", usersSchema);
