import mongoConnection from "../db";
import { encryptData, decryptData } from "../services/encryption";
import emailOtp from "../services/emailService";
import { IAuthController, IUserDetails } from "../types";
import { User } from "../models/user";

const authController: IAuthController = {
  signup: async (req, res) => {
    try {
      const { userName, email, pass }: IUserDetails = req.body;
      const otp = Math.floor(Math.random() * 600000) + 100000;

      await mongoConnection();

      const response = await User.findOne({ email });

      if (response && response.emailVerified === true) {
        return res.status(409).json({ message: "User already exists! " });
      }

      if (!response) {
        const hashedPass = await encryptData(pass);

        const user = new User({
          userName: userName,
          email: email,
          password: hashedPass,
          otp: otp,
          otpExpiry: Date.now() + 600000,
        });
        await user.save();
        emailOtp(otp, email);
        return res.status(200).json({ message: "OK" });
      }
      emailOtp(otp, email);
      return res.status(200).json({ message: "OK" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
export default authController;
