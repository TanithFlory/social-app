import mongoConnection from "../db";
import { encryptData, decryptData } from "../services/encryption";
import emailOtp from "../services/emailService";
import { IAuthController, IUserDetails, ILoginDetails, IOtp } from "../types";
import { User } from "../models/user";
import getAccessToken from "../helpers/getAccessToken";
const authController: IAuthController = {
  signUp: async (req, res) => {
    try {
      const { userName, email, pass }: IUserDetails = req.body;
      const otp = Math.floor(Math.random() * 600000) + 100000;

      await mongoConnection();
      const response = await User.findOne({ email });
      if (
        (response && response.emailVerified === true) ||
        (userName === response?.userName && response.emailVerified === true)
      ) {
        return res.status(409).json({ message: "User already exists! " });
      }

      if (!response) {
        const hashedPass = await encryptData(pass);

        const user = new User({
          userName: userName,
          email: email,
          pass: hashedPass,
          otp: otp,
          otpExpiry: Date.now() + 600000,
        });
        await user.save();
        emailOtp(otp, email);
        return res.status(200).json({ message: "OK" });
      }
      emailOtp(otp, email);
      await User.updateOne(
        { email },
        {
          $set: { otp, otpExpiry: Date.now() + 600000 },
        }
      );
      return res.status(200).json({ message: "OK" });
    } catch (err: unknown) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  verifyOtp: async (req, res) => {
    try {
      const { email, otp }: IOtp = req.body;
      await mongoConnection();
      const response = await User.findOne({ email });
      if (!(otp === response?.otp)) {
        return res.status(409).json({ message: "Invalid OTP" });
      }

      if (Date.now() > (response?.otpExpiry as number)) {
        return res.status(401).json({
          message: "The otp has expired, please resend another one. ",
        });
      }
      await User.updateOne(
        { email },
        { $set: { emailVerified: true }, $unset: { otp: "", otpExpiry: "" } }
      );

      const dataStored = await User.findOne({ email });
      const accessToken = getAccessToken({
        _id: dataStored?._id.toString() as string,
        userName: dataStored?.userName as string,
      });
      return res.status(200).json({
        message: accessToken,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error!" });
    }
  },

  signIn: async (req, res) => {
    try {
      const { userName, pass }: ILoginDetails = req.body;
      await mongoConnection();
      const response = await User.findOne({ userName });
      if (!response) {
        return res.status(404).json({ message: "User doesn't exist! " });
      }
      if (!response.emailVerified) {
        return res.status(401).json({
          message: "Email not verified, complete the signup process again. ",
        });
      }
      const hashedPass = response.pass;
      const { _id } = response;
      const verifyPass = await decryptData(pass, hashedPass);
      if (!verifyPass) {
        return res.status(401).json({ message: "Invalid Password" });
      }
      const accessToken = getAccessToken({
        _id: _id.toString(),
        userName,
      });
      res.status(200).json(accessToken);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error!" });
    }
  },

  forgotPassOtp: async (req, res) => {
    try {
      const { email } = req.body;
      await mongoConnection();

      const response = await User.findOne({ email });
      if (!response) {
        return res.status(404).json({ message: "User not found!" });
      }
      const otp = Math.floor(Math.random() * 600000) + 100000;
      await emailOtp(otp, email);

      await User.updateOne(
        { email },
        {
          $set: { otp, otpExpiry: Date.now() + 600000 },
        }
      );

      res.status(200).json({ message: "Done" });
    } catch (err: unknown) {
      console.log(err);
    }
  },

  forgotPassReset: async (req, res) => {
    try {
      await mongoConnection();
      const { email, otp, pass } = req.body;
      const response = await User.findOne({ email });
      if (!(Number(otp) === response?.otp)) {
        return res.status(409).json({ message: "Invalid OTP" });
      }

      if (Date.now() > (response?.otpExpiry as number)) {
        return res.status(401).json({
          message: "The otp has expired, please resend another one. ",
        });
      }

      const hashedPass = await encryptData(pass);
      await User.updateOne({ email }, { $set: { pass: hashedPass } });
      res.status(200).json({ message: "Done" });
    } catch (err: unknown) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
export default authController;
