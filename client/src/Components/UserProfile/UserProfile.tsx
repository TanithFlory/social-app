import SUserProfile from "./UserProfile.styles";
import { LoginContext } from "../../Contexts/LoginContext";
import { useContext } from "react";
import images from "../../Constants/images";
const UserProfile = () => {
  const loginContext = useContext(LoginContext);
  return (
    <SUserProfile>
      <div>
        <img src={images.User} alt="user" />
      </div>
      <div>
        <div>
          <h3>@{loginContext.userName}</h3>
        </div>
        <div className="profile-stats">
          <div>
            <h5>15.3K</h5>
            <span>Posts</span>
          </div>
          <div>
            <h5>1k</h5>
            <span>Followers</span>
          </div>
          <div>
            <h5>2k</h5>
            <span>Following</span>
          </div>
        </div>
        <div className="clickable">
          <span>View Posts</span>
        </div>
      </div>
    </SUserProfile>
  );
};

export default UserProfile;
