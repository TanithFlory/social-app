import SCreatePost from "./CreatePost.styles";
import axios from "axios";
import { LoginContext } from "../../Contexts/LoginContext";
import { useContext, useState } from "react";

const CreatePost = () => {
  const loginContext = useContext(LoginContext);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}api/post/new-post`, {
        postedBy: loginContext._id,
        ...formData,
      });
      window.location.reload();
    } catch (err: unknown) {
      console.log(err);
    }
  };
  const changeHandler = (
    e: React.FormEvent<HTMLTextAreaElement> | React.FormEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };
  return (
    <SCreatePost>
      <form onSubmit={submitHandler}>
        <div>
          <h1>What's on your mind?</h1>
        </div>
        <div className="post-title">
          <label>Title</label>
          <input
            onChange={changeHandler}
            type="text"
            placeholder="Enter a title..."
            name="title"
            required
            maxLength={25}
            value={formData.title}
          />
        </div>
        <div className="post-content">
          <label>Content</label>
          <textarea
            required
            onChange={changeHandler}
            name="content"
            value={formData.content}
          />
        </div>
        <button type="submit" className="clickable">
          Post
        </button>
      </form>
    </SCreatePost>
  );
};

export default CreatePost;
