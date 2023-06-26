import images from "../../Constants/images";
import SNavbar from "./Navbar.styles";
import {
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TbBuildingCommunity } from "react-icons/tb";
import MenuButton from "./MenuButton";
import { useState } from "react";
import { createPortal } from "react-dom";
import LogoutModal from "../LogoutModal/LogoutModal";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [logout, setLogout] = useState(false);
  const setMenuHandler = () => {
    setMenu((prev) => !prev);
  };
  const logoutModal = () => {
    console.log(logout);
    setLogout(true);
  };
  const closeModal = () => {
    setLogout(false);
  };
  return (
    <>
      <MenuButton menu={menu} setMenuHandler={setMenuHandler} />
      <SNavbar offscreen={menu ? 0 : 300}>
        <div className="logo">
          <img src={images.Logo} alt="logo" />
        </div>
        <div>
          <input type="text" placeholder="Search.." />
        </div>
        <div className="nav-options">
          <label>General</label>
          <ul>
            {[
              {
                navLink: "Home",
                icon: <AiOutlineHome />,
              },
              {
                navLink: "Messages",
                icon: <BiMessageSquareDetail />,
              },
              {
                navLink: "Community",
                icon: <TbBuildingCommunity />,
              },
              {
                navLink: "Groups",
                icon: <AiOutlineUsergroupDelete />,
              },
              {
                navLink: "Logout",
                icon: <AiOutlineLogout />,
              },
            ].map((d, index) => {
              return (
                <li
                  key={`nav-${index}`}
                  className={`clickable ${!index ? "active" : ""}`}
                  onClick={index === 4 ? logoutModal : undefined}
                >
                  <div>
                    {d.icon}
                    <span>{d.navLink}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          {logout &&
            createPortal(
              <LogoutModal closeModal={closeModal} />,
              document.body
            )}
        </div>
      </SNavbar>
    </>
  );
};

export default Navbar;
