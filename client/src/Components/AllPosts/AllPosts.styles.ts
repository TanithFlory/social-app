import { styled } from "styled-components";

const SAllPosts = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(clamp(250px, 35%, 450px), 1fr));
  gap: 2rem;
`;

export default SAllPosts;
