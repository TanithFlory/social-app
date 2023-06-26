import { GiHamburgerMenu } from "react-icons/gi";
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
    } catch (err: unknown) {
      console.log(err);
    }
  };
  const [postControls, setPostControls] = useState<boolean>();

  return (
    <SPostControls onClick={() => setPostControls((prev) => !prev)}>
      <GiHamburgerMenu className={postControls ? "active" : ""} />
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
