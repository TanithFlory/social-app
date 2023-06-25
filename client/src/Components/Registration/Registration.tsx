import SRegistration from "./Registration.styles";
import image from "../../Constants/images.ts";
import RegistrationForm from "./RegistrationForm";
const Registration = () => {
  return (
    <SRegistration>
      <div className="form-img">
        <img src={image.RegistrationImage} alt="social-img" />
      </div>
      <div className="form-wrapper">
        <RegistrationForm />
      </div>
    </SRegistration>
  );
};

export default Registration;
