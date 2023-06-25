import styled from "styled-components";
const SRegistrationForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-inline: 15px;
  input[data-display="none"] {
    display: none;
  }
  h1 {
    font-size: var(--fs-500);
  }
  input,
  input:focus {
    background: #f7f8fa;
    height: 56px;
    outline: none;
    border: 1px solid #d9d9db;
    box-sizing: border-box;
    color: #8a8a8a;
    padding-left: 12px;
    max-width: 420px;
    width: 100%;
    border-radius: 12px;
    font-size: var(--fs-300);
  }
  .form-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin-bottom: 15px;
  }
  button {
    background: #2f6ce5;
    width: 100%;
    border-radius: 20px;
    max-width: 220px;
    height: 40px;
    margin: 19px 0;
    border: none;
    cursor: pointer;
    font-size: var(--fs-300);
  }

  .form-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 420px;
  }
  h5 {
    margin: 0 0 1rem;
    font-size: var(--fs-300);
    color: red;
  }
`;

export default SRegistrationForm;
