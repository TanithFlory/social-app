import mongoConnection from "../db";
import { IPostController, IPostDetails } from "../types";
import { Post } from "../models/post";
import { User } from "../models/user";
const postController: IPostController = {
  newPost: async (req, res) => {
    const { title, content, postedBy }: IPostDetails = req.body;
    await mongoConnection();
    const response = await User.findOne({ _id: postedBy });

    const post = new Post({
      title,
      content,
      postedBy,
      date: Date.now(),
      userName: response?.userName,
    });
    await post.save();

    await User.updateOne(
      { _id: postedBy },
      {
        $push: {
          posts: {
            title,
            content,
          },
        },
      }
    );

    return res.status(200).json({ message: "Success" });
  },

  getAllPosts: async (_req, res) => {
    try {
      await mongoConnection();
      const response = await Post.find({}).sort({ date: -1 });
      return res.status(200).json(response);
    } catch (err: unknown) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      await mongoConnection();

      const { _id } = req.query;

      await Post.deleteOne({ _id });

      res.status(200).json({ message: "Done" });
    } catch (err: unknown) {
      console.log(err);
    }
  },
  updateStats: async (req, res) => {
    try {
      await mongoConnection();
      const { userId, type, postId } = req.body;
      if (type === "increment") {
        await Post.updateOne(
          { _id: postId },
          { $inc: { likes: 1 }, $push: { likedBy: userId } }
        );
      } else
        await Post.updateOne(
          { _id: postId },
          { $inc: { likes: -1 }, $pull: { likedBy: userId } }
        );

      return res.status(200).json({ message: "Done" });
    } catch (err: unknown) {
      console.log(err);
    }
  },
  addComment: async (req, res) => {
    try {
      await mongoConnection();
      const { comment, id, commentBy } = req.body;
      console.log(comment, id, commentBy);
      await Post.updateOne(
        { _id: id },
        { $push: { comments: { comment, commentBy } } }
      );
      res.status(200).json({ message: "Done" });
    } catch (err: unknown) {
      console.log(err);
    }
  },

  getAllComments: async (req, res) => {
    try {
      await mongoConnection();
      const { id } = req.query;
      const response = await Post.findOne({ _id: id }, { comments: 1, _id: 0 });
      res.status(200).json({ response });
    } catch (err: unknown) {
      console.log(err);
    }
  },
  updatePost: async (req, res) => {
    try {
      const { _id, content, title } = req.body;
      await mongoConnection();

      await Post.updateOne({ _id }, { $set: { content, title } });
      res.status(200).json({ message: "Done" });
    } catch (err: unknown) {
      console.log(err);
    }
  },
};

export default postController;
