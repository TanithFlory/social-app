import { useState, useEffect } from "react";
import SRegistrationForm from "./RegistrationForm.styles";
const RegistrationForm = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    pass: "",
    confirmPass: "",
    userName: "",
  });
  const [error, setError] = useState<boolean>();
  const [signin, setSignin] = useState<boolean>();
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setUserDetails((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };
  useEffect(() => {
    if (userDetails.confirmPass === userDetails.pass) {
      setError(false);
    } else setError(true);
  }, [userDetails.confirmPass]);

  return (
    <SRegistrationForm>
      <div>
        <h1>Hey, {!signin ? "Hello!" : "Welcome Back!"}</h1>
      </div>
      <div className="form-inputs">
        <input
          type="email"
          pattern="^[\w\-.]+@([\w]{3,6}\.)+([\w]{2,5})$"
          name="email"
          onChange={onChangeHandler}
          required
          placeholder="Email"
          data-display={signin && "none"}
        />
        <input
          type="text"
          name="userName"
          pattern="^[\w\_-]+$"
          onChange={onChangeHandler}
          required
          placeholder="Username"
        />
        <input
          type="text"
          name="secret"
          pattern="^[\w]+$"
          onChange={onChangeHandler}
          required
          placeholder="Enter a secret keyword."
          data-display={signin && "none"}
        />
        <input
          type="text"
          min={6}
          required
          name="pass"
          onChange={onChangeHandler}
          placeholder="Password"
        />
        <input
          type="text"
          name="confirmPass"
          required
          onChange={onChangeHandler}
          data-display={signin && "none"}
          placeholder="Confirm Password"
        />
        {error && <h5>Password doesn't match</h5>}
      </div>
      <div className="clickable">
        <span>Forgot password?</span>
      </div>
      <div className="form-controls">
        <button type="submit">{signin ? "Sign in" : "Register"}</button>
        <div onClick={() => setSignin((prev) => !prev)} className="clickable">
          {!signin ? "Sign in." : "Sign up."}
        </div>
      </div>
    </SRegistrationForm>
  );
};

export default RegistrationForm;
