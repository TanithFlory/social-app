import mongoConnection from "../db";
import { IPostController, IPostDetails } from "../types";
import { Post } from "../models/post";
import { User } from "../models/user";
const postController: IPostController = {
  newPost: async (req, res) => {
    const { title, content, postedBy }: IPostDetails = req.body;
    await mongoConnection();
    const post = new Post({
      title,
      content,
      postedBy,
    });
    await post.save();
    await User.updateOne(
      { email: postedBy },
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
};

export default postController;
