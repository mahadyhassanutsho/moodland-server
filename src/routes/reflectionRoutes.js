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

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const reflection = await Reflection.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!reflection) {
      return res.status(404).json({ message: "Reflection not found" });
    }

    res.json(reflection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const reflection = await Reflection.findByIdAndDelete(id);

    if (!reflection) {
      return res.status(404).json({ message: "Reflection not found" });
    }

    res.json(reflection);
  } catch (err) {
    res.status(500).json({ message: err.message });
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

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const reflection = await Reflection.findById(id);

    if (!reflection) {
      return res.status(404).json({ message: "Reflection not found" });
    }

    res.json(reflection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
