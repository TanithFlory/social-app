import Navbar from "../Components/Navbar/Navbar";
import CreatePost from "../Components/CreatePost/CreatePost";
import styled from "styled-components";
import AllPosts from "../Components/AllPosts/AllPosts";
import UserProfile from "../Components/UserProfile/UserProfile";

const SHome = styled.div`
  display: flex;
  & > div:nth-child(3) {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 3rem;
  }
  .top-content__wrapper {
    & > div:first-child {
      margin: 3rem auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
  .posts {
    h1 {
      text-align: center;
      color: var(--clr-text2);
      margin: 2rem 10px 0;
    }
  }
`;
const Home = () => {
  return (
    <SHome>
      <Navbar />
      <div className="top-content__wrapper">
        <div>
          <UserProfile />
          <CreatePost />
        </div>
        <div className="posts">
          <h1>Posts from users</h1>
          <AllPosts />
        </div>
      </div>
    </SHome>
  );
};
export default Home;
