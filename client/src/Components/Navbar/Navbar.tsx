import images from "../../Constants/images";
import SNavbar from "./Navbar.styles";
import { AiOutlineHome, AiOutlineUsergroupDelete } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TbBuildingCommunity } from "react-icons/tb";
import MenuButton from "./MenuButton";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const setMenuHandler = () => {
    setMenu((prev) => !prev);
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
            ].map((d, index) => {
              return (
                <li
                  key={`nav-${index}`}
                  className={`clickable ${!index ? "active" : ""}`}
                >
                  <div>
                    {d.icon}
                    <span>{d.navLink}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </SNavbar>
    </>
  );
};

export default Navbar;
