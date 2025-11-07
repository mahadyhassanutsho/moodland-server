import express from "express";

import Reflection from "../models/Reflection.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const reflection = await Reflection.create(req.body);
    res.status(201).json(reflection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (_req, res) => {
  try {
    const reflections = await Reflection.find().sort({ createdAt: -1 });
    res.json(reflections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
