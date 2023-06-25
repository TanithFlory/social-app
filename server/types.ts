import express from "express";

export interface IAuthController {
  signup(req: express.Request, res: express.Response): Promise<void>;
}

export interface IUserDetails {
  email: string;
  userName: string;
  pass: string;
}

export type RequestResponse = (
  req: express.Request,
  res: express.Response
) => void;
