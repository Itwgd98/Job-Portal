import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? true  // Allow same-origin in production
    : "http://localhost:5173",  // Allow localhost in development
  credentials: true,
};
app.use(cors(corsOptions));

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Version check endpoint - deploy timestamp: 2024-12-07 20:35
app.get("/api/v1/version", (req, res) => {
  res.json({
    version: "2.0.3",
    deployTime: "2024-12-07 20:35",
    pdfFix: "Frontend URL transform for direct PDF download"
  });
});

// ----------------------------
// SERVE FRONTEND FOR PRODUCTION
// ----------------------------

const __dirname = path.resolve();

// serve static files from build folder
app.use(express.static(path.join(__dirname, "build")));

// handle ALL routes → send index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// ----------------------------

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
