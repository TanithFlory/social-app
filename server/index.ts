import express, { Express } from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import postRoutes from "./routes/postRoutes";
import path from "path";
const port: number = 3001;
const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

app.use(express.static(path.join(__dirname, "/client")));
app.get("*", (_req, res) => {
  const filePath = path.join(__dirname, "/client/index.html");
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
