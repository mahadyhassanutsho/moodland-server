import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Dotenv Config
dotenv.config();
const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Simple Route
app.get("/", (_req, res) => {
  res.json({ message: "🚀 Moodland API is up and running." });
});

// Start Server
app.listen(port, () => console.log(`⚡ Server running on port ${port}`));
