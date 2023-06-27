import { google } from "googleapis";
import "dotenv/config";
const nodemailer = require("nodemailer");
const OAuth2 = google.auth.OAuth2;

const createTransport = async () => {
  google.options({
    http2: true,
  });
  const email: string = "accdd5490@gmail.com";
  const clientSecret: string = "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";
  const clientID: string =
    "737912097372-d7ig06nhtbb8ug0i53362udqclfo3ksr.apps.googleusercontent.com";
  const refreshToken: string =
    "1//04MsLHKS5hhKRCgYIARAAGAQSNwF-L9IrMe-jC2LriqiaAAp-IiyTP1SZul1x9Je42pUbU_2X9mTTEtASM27eN3qm6oXm7XHg0yY";

  const client = new OAuth2(
    clientID,
    clientSecret,
    "https://developers.google.com/oauthplayground"
  );
  client.setCredentials({
    refresh_token: refreshToken,
  });
  const accessToken = await new Promise((resolve, reject) => {
    client.getAccessToken((err, res) => {
      if (err) {
        console.log(err);
        reject(new Error("Error, failed to generate token."));
      }
      resolve(res);
    });
  });
  console.log(accessToken);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "587",
    auth: {
      accessToken,
      type: "OAuth2",
      user: email,
      clientId: clientID,
      clientSecret: clientSecret,
      refreshToken: refreshToken,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });
  return transporter;
};

const emailOtp = async (otp: number, email: string): Promise<void> => {
  try {
    const transporter = await createTransport();
    transporter.sendMail({
      subject: "OTP Verification - Social-Website",
      text: "OTP",
      to: email,
      from: process.env.OAUTH_EMAIL,
      html: `<div
      style="
        font-family: Franklin Gothic;
        max-width: 550px;
        background: #FBFCFA;
        margin: auto;
        padding: 10px;
        border-radius: 15px;
      "
    >
        Your otp is <strong>${otp}</strong>
    </div>`,
    });
  } catch (err) {
    console.log(err);
  }
};

export default emailOtp;
