import { useState } from "react";
import SRegistrationForm from "../Registration/RegistrationForm.styles";
import axios from "axios";

const ForgotPassForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    pass: "",
  });
  const [passForm, setPassForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passForm) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}api/auth/forgot-pass`,
          {
            ...formData,
          }
        );
        if (response) {
          setSuccess(true);
        }
      } catch (err: unknown) {
        console.log(err);
      }
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}api/auth/forgot-pass-otp`,
          {
            ...formData,
          }
        );
        if (response) {
          setPassForm(true);
        }
      } catch (err: unknown) {
        console.log(err);
      }
    }
  };
  return (
    <SRegistrationForm onSubmit={submitHandler}>
      {!passForm ? (
        <input
          type="email"
          pattern="^[\w\-.]+@([\w]{3,6}\.)+([\w]{2,5})$"
          name="email"
          required
          placeholder="Enter your email..."
          onChange={onChangeHandler}
          value={formData.email}
        />
      ) : (
        <>
          <input
            minLength={6}
            required
            name="pass"
            type="password"
            onChange={onChangeHandler}
            placeholder="Password"
            value={formData.pass}
          />
          <input
            minLength={6}
            maxLength={6}
            required
            name="otp"
            pattern="[\d]{6,6}"
            onChange={onChangeHandler}
            placeholder="Enter otp..."
            value={formData.otp}
          />
          <h5>Enter the otp sent to {formData.email}</h5>
        </>
      )}
      <button type="submit">Submit</button>
      {success && (
        <div>
          <h5>
            Success! your password is now updated, proceed to login.{"  "}
            <a href="/">Login</a>
          </h5>
        </div>
      )}
    </SRegistrationForm>
  );
};

export default ForgotPassForm;
