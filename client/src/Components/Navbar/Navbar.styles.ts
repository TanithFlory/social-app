import styled from "styled-components";

interface SProps {
  offscreen: number;
}

const SNavbar = styled.div<SProps>`
  background-image: var(--clr-gradient);
  max-width: 300px;
  border-radius: 0 36px 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  height: 100vh;
  padding-inline: 20px;
  position: fixed;
  left: 0;
  z-index: 9998;
  transition: 0.5s all ease-in-out;
  transform: translateX(-${(props) => props.offscreen}px);
  .logo {
    img {
      width: 150px;
      height: 150px;
    }
  }
  input,
  input:focus {
    background-color: #2d2a40;
    outline: none;
    border: none;
    height: 50px;
    width: 200px;
    border-radius: 36px;
    padding-inline: 1rem;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .nav-options {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      font-size: var(--fs-300);
      width: 100%;
      padding-left: 1rem;
      color: var(--clr-text2);
    }
    ul {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        height: 35px;
        width: 200px;
        padding: 10px;
        border-radius: 36px;
        display: flex;
        justify-content: left;
        align-items: center;
        font-weight: 700;
        & > div {
          padding-left: 16px;
          display: flex;
          gap: 1rem;
          align-items: center;
          svg {
            transform: scale(2);
          }
        }
      }
      .active {
        background-color: var(--clr-secondary);
      }
    }
  }
`;

export default SNavbar;
