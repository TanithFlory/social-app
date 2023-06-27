import { useState } from "react";
import { IPostData } from "../../types";
import SCreatePost from "../CreatePost/CreatePost.styles";
import SEditPost from "./EditPost.styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
interface IProps {
  post: IPostData;
  closeModal(): void;
}

const EditPost = (props: IProps) => {
  const [formData, setFormData] = useState({
    title: props.post.title,
    content: props.post.content,
  });
  const changeHandler = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    console.log(
      props.post.title === formData.title &&
        props.post.content === formData.content
    );
    const target = e.target as HTMLInputElement;
    setFormData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const submitHandler = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (
      props.post.title === formData.title &&
      props.post.content === formData.content
    ) {
      return props.closeModal();
    }
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}api/post/update-post`,
        {
          _id: props.post._id,
          ...formData,
        }
      );
      if (response) {
        window.location.reload();
      }
    } catch (err: unknown) {
      console.log(err);
    }
  };
  return (
    <SEditPost>
      <div>
        <SCreatePost onSubmit={submitHandler}>
          <form>
            <div className="post-title">
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter a title..."
                name="title"
                required
                maxLength={25}
                value={formData.title}
                onChange={changeHandler}
              />
            </div>
            <div className="post-content">
              <label>Content</label>
              <textarea
                required
                name="content"
                onChange={changeHandler}
                value={formData.content}
              />
            </div>
            <div className="form-controls">
              <button type="submit" className="clickable">
                Edit
              </button>
              <div onClick={() => props.closeModal()}>Cancel</div>
            </div>
            <div className="close-icon" onClick={() => props.closeModal()}>
              <AiOutlineCloseCircle />
            </div>
          </form>
        </SCreatePost>
      </div>
    </SEditPost>
  );
};

export default EditPost;
