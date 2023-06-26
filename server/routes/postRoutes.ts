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

const getAllPostsHandler: RequestResponse = (req, res) => {
  postController.getAllPosts(req, res);
};
router.get("/all-posts", getAllPostsHandler);

const deletePost: RequestResponse = (req, res) => {
  postController.deletePost(req, res);
};
router.delete("/remove", deletePost);

const updateStats: RequestResponse = (req, res) => {
  postController.updateStats(req, res);
};
router.put("/update", updateStats);

export default router;