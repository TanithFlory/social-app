import express from "express";
import bodyParser from "body-parser";
import authController from "../controllers/authController";
import { RequestResponse } from "../types";
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

const signupHandler: RequestResponse = (req, res) => {
  authController.signup(req, res);
};
router.post("/signup", signupHandler);
