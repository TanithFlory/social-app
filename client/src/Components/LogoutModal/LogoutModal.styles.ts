import { styled } from "styled-components";

const SLogoutModal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  & > div {
    background: var(--clr-gradient);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    border-radius: 16px;
    width: 180px;
    height: 125px;
    h3 {
      margin: 0;
    }
    & > div {
      display: flex;
      gap: 1rem;
      & > div {
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        font-size: var(--fs-300);
        &:hover {
          background-color: var(--clr-secondary);
        }
      }
    }
  }
`;

export default SLogoutModal;
