import express, { Request, Response } from "express";

export interface IAuthController {
  signUp(req: Request, res: Response): Promise<any>;
  verifyOtp(req: Request, res: Response): Promise<any>;
  signIn(req: Request, res: Response): Promise<any>;
  forgotPassOtp(req: Request, res: Response): Promise<any>;
  forgotPassReset(req: Request, res: Response): Promise<any>;
}
export interface IPostController {
  newPost(req: Request, res: Response): Promise<any>;
  getAllPosts(req: Request, res: Response): Promise<any>;
  deletePost(req: Request, res: Response): Promise<any>;
  updateStats(req: Request, res: Response): Promise<any>;
  addComment(req: Request, res: Response): Promise<any>;
  getAllComments(req: Request, res: Response): Promise<any>;
  updatePost(req: Request, res: Response): Promise<any>;
}
export interface IUserDetails {
  email: string;
  userName: string;
  pass: string;
}

export interface IJwt {
  _id: string;
  userName: string;
}

export interface IPostDetails {
  title: string;
  content: string;
  postedBy: string;
}

export type RequestResponse = (
  req: express.Request,
  res: express.Response
) => void;

export interface ILoginDetails {
  userName: string;
  pass: string;
}

export interface IOtp {
  email: string;
  otp: number;
}
