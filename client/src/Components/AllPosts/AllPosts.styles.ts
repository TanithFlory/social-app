import { styled } from "styled-components";

const SAllPosts = styled.div`
  margin: 1rem 0;
  .post-wrapper {
    padding: 20px;
    background: var(--clr-gradient);
    border-radius: 36px;
    max-width: 600px;
  }
  p {
    font-size: var(--fs-300);
  }
  h3 {
    margin: 1rem 0 0;
    font-size: var(--fs-400);
  }
  .post-interactions {
    display: flex;
    align-items: center;
    gap: 1rem;
    & > div {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;

export default SAllPosts;
