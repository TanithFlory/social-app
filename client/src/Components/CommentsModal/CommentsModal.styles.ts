import { styled } from "styled-components";

const SCommentsModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--clr-text3);
  z-index: 9999;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  & > div:first-child {
    background: var(--clr-gradient);
    padding: 20px;
    border-radius: 16px;
    height: 100%;
    max-height: 550px;
    width: 100%;
    max-width: 650px;
    position: relative;
    h3 {
      margin: 0 0 1rem;
      text-align: center;
    }
  }
  p {
    margin: 0;
  }
  .comments-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > div:first-child {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;
      font-weight: 700;
      svg {
        transform: scale(2.3);
      }
    }
  }
  .commentsModal-card {
    background-color: transparent;
  }
  .user-comment {
    display: flex;
    gap: 15px;
    align-items: center;
    & > div:nth-child(2) {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      span:first-child {
        font-weight: 700;
      }
    }
    svg {
      transform: scale(2);
    }
  }
  .post-comments {
    overflow-y: scroll;
    max-height: 420px;
    min-height: 420px;
    padding-inline: 15px;
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: #bec4c4;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    & > div:first-child {
      border-bottom: 1px solid white;
      border-top: 1px solid white;
      margin: 15px 0;
    }
  }
  .add-comment {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    input,
    input:focus {
      width: 100%;
      border-radius: 12px;
      outline: none;
      border: none;
      height: 35px;
      padding: 25px;
      font-size: var(--fs-300);
      box-sizing: border-box;
    }
    form {
      position: relative;
      button {
        position: absolute;
        right: 15px;
        top: 15px;
        background-color: transparent;
        border: none;
        svg {
          transform: scale(2);
        }
        &:hover {
          svg {
            fill: var(--clr-secondary);
          }
        }
      }
    }
  }
  @media screen and (max-width: 650px) {
    & > div:first-child {
      padding: 20px 0;
      margin: 1rem auto;
    }
  }
`;

export default SCommentsModal;
