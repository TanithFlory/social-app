import SAllPosts from "./AllPosts.styles";
import { useEffect } from "react";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
const AllPosts = () => {
  useEffect(() => {}, []);
  return (
    <SAllPosts>
      <div className="post-wrapper">
        <div>
          <h3>Posted by</h3>
        </div>
        <div>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="post-interactions">
          <div>
            <AiOutlineLike /> <span>Like</span>
          </div>
          <div>
            <AiOutlineComment /> <span>Comment</span>
          </div>
        </div>
      </div>
    </SAllPosts>
  );
};

export default AllPosts;
