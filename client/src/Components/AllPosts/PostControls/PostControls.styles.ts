import { styled } from "styled-components";

const SPostControls = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  & > svg {
    transform: scale(2);
    background-color: var(--clr-primary);
    border-radius: 1px;
    &:hover {
      background-color: var(--clr-secondary);
      color: var(--clr-white);
    }
  }
  .active {
    background-color: var(--clr-secondary);
    color: var(--clr-white);
  }
  .controls {
    position: absolute;
    background-color: var(--clr-black);
    color: var(--clr-white);
    top: 23px;
    right: 23px;
    width: 100px;
    height: 75px;
    border-radius: 4px;
    ul {
      list-style: none;
      font-size: var(--fs-200);
      line-height: 18px;
      display: flex;
      padding: 0;
      flex-direction: column;
      margin: 0;
      height: 100%;
      position: relative;
      &::after {
        content: "";
        background: white;
        height: 2px;
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        &:hover {
          color: var(--clr-black);
          background-color: var(--clr-white);
        }
      }
    }
  }
`;

export default SPostControls;
