import { styled } from "styled-components";

const SCreatePost = styled.div`
  background: var(--clr-gradient);
  width: 100%;
  max-width: 600px;
  height: 480px;
  border-radius: 36px;
  padding: 20px;
  h1 {
    margin: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input,
  input:focus {
    outline: none;
    border: none;
    height: 50px;
    width: 100%;
    border-radius: 30px;
    padding-inline: 1rem;
    font-size: var(--fs-300);
    color: var(--clr-white);
  }
  input,
  textarea {
    background-color: #362a3d;
    border: 1px solid var(--clr-white);
    box-sizing: border-box;
  }
  input:focus,
  textarea:focus {
    outline: 3px solid var(--clr-white);
  }
  input::placeholder {
    color: var(--clr-white);
  }
  textarea {
    height: 100%;
    width: 100%;
    min-height: 275px;
    resize: none;
    border-radius: 36px;
    font-size: var(--fs-500);
    padding: 15px;
  }
  button {
    border-radius: 36px;
    height: 50px;
    background-color: var(--clr-secondary);
    font-weight: 700;
    font-size: var(--fs-300);
    padding: 10px;
  }
`;

export default SCreatePost;
