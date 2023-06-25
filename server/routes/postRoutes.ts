import express from "express";
import bodyParser from "body-parser";
import postController from "../controllers/postController";
import { RequestResponse } from "../types";
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

const newPostHandler: RequestResponse = (req, res) => {
  postController.newPost(req, res);
};
router.post("/new-post", newPostHandler);

export default router;
