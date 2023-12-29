import mongoose, { Schema } from "mongoose";
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  isImportant: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const List = mongoose.model("List", todoSchema);
