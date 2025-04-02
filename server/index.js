import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import authRouter from "./routes/user.route.js";
import urlRouter from "./routes/url.route.js";
// import path from "path";
import cors from "cors";

dotenv.config();

// const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//middleware
app.use("/api/auth", authRouter);
app.use("/", urlRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(PORT, () => {
  connectDB();
  // mongoose.disconnect();
  console.log(`Server is running on port ${PORT}`);
});
