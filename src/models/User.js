import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  uid: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  photoURL: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;
