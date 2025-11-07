import mongoose from "mongoose";

const reactionSchema = mongoose.Schema({
  userId: { type: String, required: true },
  reflectionId: { type: String, required: true },
  emoji: { type: String, required: true },
  cratedId: { type: Date, default: Date.now },
});

const Reaction = mongoose.model("Reaction", reactionSchema);

export default Reaction;
