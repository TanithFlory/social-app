import { styled } from "styled-components";

const SMenuButton = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
  width: 35px;
  z-index: 9999;
  .menu-line {
    background-color: var(--clr-secondary);
    height: 3px;
    margin: 10px 0;
    transition: 0.5s all linear;
    z-index: 9998;
    width: 100%;
  }
  .cross-45 {
    transform: translateY(-10px) rotate(-45deg);
  }
  .cross45 {
    transform: translateY(16px) rotate(45deg);
  }
  .opacity-0 {
    opacity: 0;
  }
`;
interface IProps {
  menu: boolean;
  setMenuHandler(): void;
}
const MenuButton = (props: IProps) => {
  return (
    <SMenuButton onClick={() => props.setMenuHandler()} className="clickable">
      <div className={`menu-line ${props.menu && "cross45"}`} />
      <div className={`menu-line ${props.menu && "opacity-0"}`} />
      <div className={`menu-line ${props.menu && "cross-45"}`} />
    </SMenuButton>
  );
};

export default MenuButton;
