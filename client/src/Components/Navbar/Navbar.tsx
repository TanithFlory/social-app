import SNavbar from "./Navbar.styles";

const Navbar = () => {
  return (
    <SNavbar>
      <div>
        <img />
      </div>
      <div>
        <input type="text" placeholder="Search.." />
      </div>
      <div>
        <label>General</label>
        <ul>
          {["Home", "Messages", "Community", "Groups"].map((d, index) => {
            return <li key={`nav-${index}`}>{d}</li>;
          })}
        </ul>
      </div>
    </SNavbar>
  );
};
