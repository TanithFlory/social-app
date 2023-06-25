import express, { Express, Request, Response } from "express";
// import cors from "cors";

const port: number = 3001;
const app: Express = express();

app.use(express.json());
// app.use(cors());

app.post("/sign-up", (req: Request, res: Response) => {
  console.log(req, res);
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
