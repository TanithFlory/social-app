import axios from "axios";
import SAllPosts from "./AllPosts.styles";
import { useCallback, useEffect, useState } from "react";
import { IPostData } from "../../types";
import PostCard from "./PostCard/PostCard";
const AllPosts = () => {
  const [postData, setPostData] = useState<IPostData[]>();
  const getData = useCallback(async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}api/post/all-posts`
    );
    setPostData(response.data);
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <SAllPosts>
      {postData?.map((post) => {
        return <PostCard post={post} key={post._id} />;
      })}
    </SAllPosts>
  );
};

export default AllPosts;
