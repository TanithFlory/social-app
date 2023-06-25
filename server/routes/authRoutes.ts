import express from "express";
import bodyParser from "body-parser";
import authController from "../controllers/authController";
import { RequestResponse } from "../types";
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

const signupHandler: RequestResponse = (req, res) => {
  authController.signUp(req, res);
};
router.post("/signup", signupHandler);

const otpHandler: RequestResponse = (req, res) => {
  authController.verifyOtp(req, res);
};
router.post("/verify-otp", otpHandler);

const signInHandler: RequestResponse = (req, res) => {
  authController.signIn(req, res);
};
router.post("/sign-in", signInHandler);

export default router;
