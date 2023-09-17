import express from "express";
import cors from "cors";
import erroMiddleware from "./middleware/errorMiddleware.js";
import data from "./routes/data.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

export const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
const corsOption = {
  origin: process.env.FRONTEND_URI,
  methods: ["GET"],
  credentials: true,
};

app.use(cors());
app.use(express.json());
app.use(cors(corsOption));
app.use("/api/v1", data);
app.use(erroMiddleware);
