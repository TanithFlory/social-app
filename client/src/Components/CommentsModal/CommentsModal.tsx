import SCommentsModal from "./CommentsModal.styles";
import { useCallback, useEffect, useState, useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
import PostCard from "../AllPosts/PostCard/PostCard";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineComment, AiOutlineSend } from "react-icons/ai";
import { IPostData } from "../../types";
import axios from "axios";
import { IComment } from "../../types";
interface IProps {
  post: IPostData;
  closeModal(e: React.SyntheticEvent): void;
}

const CommentsModal = (props: IProps) => {
  const loginContext = useContext(LoginContext);
  const [comments, setComments] = useState<IComment[]>([]);
  const [inputComment, setInputComment] = useState("");
  const getComments = useCallback(async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}api/post/get-comments`,
      {
        params: {
          id: props.post._id,
        },
      }
    );
    setComments(response.data.response.comments);
  }, []);

  useEffect(() => {
    document.querySelector("body")?.classList.add("overflow-y-hidden");
    getComments();

    return () => {
      document.querySelector("body")?.classList.remove("overflow-y-hidden");
    };
  }, []);
  const commentHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setInputComment("");
      await axios.put(`${import.meta.env.VITE_BASE_URL}api/post/add-comment`, {
        id: props.post._id,
        commentBy: loginContext.userName,
        comment: inputComment,
      });
      setComments((prev) => {
        return [
          ...(prev as IComment[]),
          {
            commentBy: loginContext.userName,
            comment: inputComment,
            key: Math.random(),
          },
        ] as IComment[];
      });
    } catch (err: unknown) {
      console.log(err);
    }
  };

  const commentChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInputComment(target.value);
  };
  return (
    <SCommentsModal
      onClick={(e: React.SyntheticEvent) => props.closeModal(e)}
      className="comment-modal"
    >
      <div>
        <div>
          <h3>{`${props.post.userName}'s Post`}</h3>
        </div>
        <div className="post-comments">
          <div>
            <PostCard
              className="commentsModal-card"
              commentModal={true}
              post={props.post}
              closeModal={props.closeModal}
            />
          </div>
          <div className="comments-wrapper">
            <div>
              <span>
                <AiOutlineComment />
              </span>
              <span>Comments</span>
            </div>
            {comments.map((d) => {
              return (
                <div className="user-comment" key={d._id}>
                  <div>
                    <span>
                      <FaUserCircle />
                    </span>
                  </div>
                  <div>
                    <span>{d.commentBy}</span>
                    <span>{d.comment}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="add-comment">
          <form onSubmit={commentHandler}>
            <input
              onChange={commentChangeHandler}
              placeholder="Enter a comment..."
              required
              value={inputComment}
            />
            <button type="submit" className="clickable submit-comment">
              <AiOutlineSend />
            </button>
          </form>
        </div>
      </div>
    </SCommentsModal>
  );
};

export default CommentsModal;
