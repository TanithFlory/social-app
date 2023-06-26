import Navbar from "../Components/Navbar/Navbar";
import CreatePost from "../Components/CreatePost/CreatePost";
import styled from "styled-components";
import AllPosts from "../Components/AllPosts/AllPosts";

const SHome = styled.div`
  display: flex;
  & > div:nth-child(2) {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 0 300px;
    margin-top: 3rem;
    & > h1 {
      color: var(--clr-text2);
      margin: 2rem 0 0;
    }
  }
`;
const Home = () => {
  return (
    <SHome>
      <Navbar />
      <div>
        <CreatePost />
        <h1>Posts from users</h1>
        <AllPosts />
      </div>
    </SHome>
  );
};
export default Home;
