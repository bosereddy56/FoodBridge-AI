import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(
  express.json({
    limit: "10mb",
  })
);
app.use(
  "/api/donations",
  donationRoutes
);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FoodBridge AI API Running",
  });
});

app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});