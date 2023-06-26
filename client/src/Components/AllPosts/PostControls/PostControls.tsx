import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import SPostControls from "./PostControls.styles";
import axios from "axios";

interface IProps {
  postId: string;
}
const PostControls = (props: IProps) => {
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
  const [postControls, setPostControls] = useState<boolean>();

  return (
    <SPostControls onClick={() => setPostControls((prev) => !prev)}>
      <BsThreeDots className={postControls ? "active" : ""} />
      {postControls && (
        <div className="controls">
          <ul>
            <li onClick={() => deletePost(props.postId)}>Delete</li>
            <li>Edit</li>
          </ul>
        </div>
      )}
    </SPostControls>
  );
};

export default PostControls;
