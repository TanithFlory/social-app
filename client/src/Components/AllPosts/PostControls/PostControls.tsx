import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import SPostControls from "./PostControls.styles";
import axios from "axios";
import { createPortal } from "react-dom";
import EditPost from "../../EditPost/EditPost";
import { IPostData } from "../../../types";

interface IProps {
  post: IPostData;
}
const PostControls = (props: IProps) => {
  const [editPost, setEditPost] = useState(false);
  const [postControls, setPostControls] = useState<boolean>();
  const deletePost = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}api/post/remove`, {
        params: {
          _id: id,
        },
      });
      document.getElementById(id)?.remove();
      document.getElementsByClassName("comment-modal")[0]?.remove();
    } catch (err: unknown) {
      console.log(err);
    }
  };
  const closeModal = () => {
    setEditPost(false);
  };
  return (
    <>
      <SPostControls onClick={() => setPostControls((prev) => !prev)}>
        <BsThreeDots className={postControls ? "active" : ""} />
        {postControls && (
          <div className="controls">
            <ul>
              <li onClick={() => deletePost(props.post._id)}>Delete</li>
              <li onClick={() => setEditPost(true)}>Edit</li>
            </ul>
          </div>
        )}
      </SPostControls>
      {editPost &&
        createPortal(
          <EditPost closeModal={closeModal} post={props.post} />,
          document.body
        )}
    </>
  );
};

export default PostControls;
