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
        postedBy: loginContext.email,
        ...formData,
      });
      window.location.reload();
    } catch (err: unknown) {
      console.log(err);
    }
  };
  const changeHandler = (e: any) => {
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
          <h1>Post something on your feed.</h1>
        </div>
        <div>
          <input
            onChange={changeHandler}
            type="text"
            placeholder="Enter a title..."
            name="title"
          />
        </div>
        <div>
          <textarea onChange={changeHandler} name="content" />
        </div>
        <button type="submit" className="clickable">
          Post
        </button>
      </form>
    </SCreatePost>
  );
};

export default CreatePost;
