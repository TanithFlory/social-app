import React, { useContext, useState, useEffect } from "react";
import { IPostData } from "../../../types";
import { FaUserCircle } from "react-icons/fa";
import PostControls from "../PostControls/PostControls";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { LoginContext } from "../../../Contexts/LoginContext";
import SPostCard from "./PostCard.styles";
import axios from "axios";
import CommentsModal from "../../CommentsModal/CommentsModal";
interface IProps {
  post: IPostData;
  commentModal?: boolean;
  className?: string;
  closeModal?(e: React.SyntheticEvent): void;
}

const PostCard = (props: IProps) => {
  const loginContext = useContext(LoginContext);
  const [userLiked, setUserLiked] = useState<boolean>();
  const [postLikes, setPostLikes] = useState<number>(0);
  const [commentModal, setCommentModal] = useState<boolean>();
  useEffect(() => {
    setPostLikes(props.post.likes || 0);
    setUserLiked(props.post.likedBy.includes(loginContext._id));
  }, []);

  const likeHandler = async () => {
    setUserLiked((prev) => !prev);
    setPostLikes((prev) => (userLiked ? --prev : ++prev));
    if (!userLiked) {
      await axios.put(`${import.meta.env.VITE_BASE_URL}api/post/update`, {
        type: "increment",
        userId: loginContext._id,
        postId: props.post._id,
      });
    } else {
      await axios.put(`${import.meta.env.VITE_BASE_URL}api/post/update`, {
        type: "decrement",
        userId: loginContext._id,
        postId: props.post._id,
      });
    }
  };

  const getDate = (date: number) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const closeModal = (e?: React.SyntheticEvent) => {
    const target = e?.target as HTMLInputElement;
    if (target?.classList?.contains("comment-modal")) {
      setCommentModal(false);
    }
  };

  return (
    <>
      {" "}
      <SPostCard
        className={props.className}
        key={props.post._id}
        id={props.post._id}
      >
        <div className="post-user__details">
          <div>
            <span>
              <FaUserCircle />
            </span>
            <span>{props.post.userName}</span>
          </div>
          <div>{getDate(props.post.date)}</div>
        </div>
        <div className="post-content">
          <h4>{props.post.title}</h4>
          <p>{props.post.content}</p>
        </div>
        {!props.commentModal && (
          <div className="post-interactions">
            <div className="clickable" onClick={likeHandler}>
              <AiOutlineLike className={userLiked ? "liked" : ""} />
              <span>
                {userLiked ? "Liked" : "Like"} {`(${postLikes || "0"})`}
              </span>
            </div>
            <div
              className="clickable"
              onClick={() => setCommentModal((prev) => !prev)}
            >
              <AiOutlineComment />{" "}
              <span>Comments {`(${props.post.comments.length})`}</span>
            </div>
          </div>
        )}

        {props.post.postedBy === loginContext._id && (
          <PostControls post={props.post} />
        )}
      </SPostCard>
      {commentModal && (
        <CommentsModal closeModal={closeModal} post={props.post} />
      )}
    </>
  );
};

export default PostCard;
