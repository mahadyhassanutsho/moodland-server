import mongoose from "mongoose";

const reflectionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  color: { type: String, required: true },
  emoji: { type: String, required: true },
  note: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Reflection = mongoose.model("Reflection", reflectionSchema);

export default Reflection;
