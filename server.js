import "express-async-errors";
import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import cookieParser from "cookie-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import jobRoute from "./Routes/jobRoute.js";
import authRoute from "./Routes/authRoute.js";
import userRoute from "./Routes/userRoute.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import cors from "cors";
import Job from "./Model/Jobmodel.js";
import { v2 as cloudinary } from "cloudinary";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Vite's default dev server URL
    credentials: true, // Allow cookies to be sent
  })
);

const _dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(_dirname, "./public")));
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());

app.use("/api/v1/jobs", authenticateUser, jobRoute);
app.use("/api/v1/users", authenticateUser, userRoute);
app.use("/api/v1/auth", authRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "./public", "index.html"));
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found page" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3100;

app.get("api/v1/jobs", (req, res) => {
  res.send(Job.find({}));
});

try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
  app.listen(port,'0.0.0.0', (req, res) => {
    console.log(`server running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
