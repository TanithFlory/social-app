import { useState, useEffect } from "react";
import SRegistrationForm from "./RegistrationForm.styles";
import axios from "axios";

const RegistrationForm = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    pass: "",
    confirmPass: "",
    userName: "",
  });
  const [error, setError] = useState<boolean>();
  const [signin, setSignin] = useState<boolean>();
  const [otpForm, setOtpForm] = useState<boolean>();
  const [otp, setOtp] = useState<number>();
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

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (signin) {
      try {
        const url = `${import.meta.env.VITE_BASE_URL}api/auth/sign-in`;
        const response = await axios.post(url, {
          userName: userDetails.userName,
          pass: userDetails.pass,
        });
        localStorage.setItem("accessToken", response.data);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
    if (!otp && !signin) {
      const url = `${import.meta.env.VITE_BASE_URL}api/auth/signup`;
      try {
        const response = await axios.post(url, userDetails);
        if (response) {
          setOtpForm(true);
        }
      } catch (err: unknown) {
        console.log(err);
      }
    }

    if (otp && !signin) {
      const url = `${import.meta.env.VITE_BASE_URL}api/auth/verify-otp`;
      try {
        const response = await axios.post(url, {
          otp,
          email: userDetails.email,
        });
        localStorage.setItem("accessToken", response.data.message);
        window.location.reload();
      } catch (err: unknown) {
        console.log(err);
      }
    }
  };
  const otpHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setOtp(Number(target.value));
  };
  return (
    <SRegistrationForm onSubmit={submitHandler}>
      <div>
        <h1>Hey, {!signin ? "Hello!" : "Welcome Back!"}</h1>
      </div>
      <div className="form-inputs">
        {otpForm ? (
          <>
            <h5>Enter the otp sent to {userDetails.email} </h5>
            <input
              type="text"
              placeholder="OTP"
              required
              pattern="[\d]{6,6}"
              onChange={otpHandler}
              value={otp?.toString() || ""}
            />
          </>
        ) : (
          <>
            {!signin && (
              <input
                type="email"
                pattern="^[\w\-.]+@([\w]{3,6}\.)+([\w]{2,5})$"
                name="email"
                onChange={onChangeHandler}
                required
                placeholder="Email"
                value={userDetails.email}
              />
            )}
            <input
              type="text"
              name="userName"
              pattern="^[\w\_-]+$"
              onChange={onChangeHandler}
              required
              placeholder="Username"
              value={userDetails.userName}
            />
            <input
              type="password"
              min={6}
              required
              name="pass"
              onChange={onChangeHandler}
              placeholder="Password"
              value={userDetails.pass}
            />
            {!signin && (
              <input
                type="password"
                name="confirmPass"
                onChange={onChangeHandler}
                placeholder="Confirm Password"
                value={userDetails.confirmPass}
              />
            )}
          </>
        )}
        {error && !signin && <h5>Password doesn't match</h5>}
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
