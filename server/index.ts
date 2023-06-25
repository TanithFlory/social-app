import express, { Express, Request, Response } from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import postRoutes from "./routes/postRoutes";
const port: number = 3001;
const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
