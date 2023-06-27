import { styled } from "styled-components";

const SEditPost = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  & > div {
    padding: 20px;
  }
  .close-icon {
    position: absolute;
    top: 0px;
    right: 15px;
    cursor: pointer;
    svg {
      transform: scale(2);
      &:hover {
        fill: var(--clr-secondary);
      }
    }
  }
  textarea,
  textarea:focus {
    font-size: var(--fs-300);
  }
  form {
    position: relative;
  }
  .form-controls {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    align-items: center;
    & > button,
    div {
      width: 150px;
    }
    & > div {
      cursor: pointer;
      border-radius: 36px;
      height: 50px;
      background-color: var(--clr-secondary);
      font-weight: 700;
      font-size: var(--fs-300);
      padding: 10px;
      box-sizing: border-box;
      color: var(--clr-white);
      text-align: center;
    }
  }
`;
export default SEditPost;
