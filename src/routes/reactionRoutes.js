import express from "express";

import Reaction from "../models/Reaction.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const reaction = await Reaction.create(req.body);
    res.status(201).json(reaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const reaction = await Reaction.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!reaction) {
      return res.status(404).json({ message: "Reaction not found" });
    }

    res.json(reaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const reaction = await Reaction.findByIdAndDelete(id);

    if (!reaction) {
      return res.status(404).json({ message: "Reaction not found" });
    }

    res.json(reaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (_req, res) => {
  try {
    const reactions = await Reaction.find().sort({ createdAt: -1 });
    res.json(reactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const reaction = await Reaction.findById(id);

    if (!reaction) {
      return res.status(404).json({ message: "Reaction not found" });
    }

    res.json(reaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
