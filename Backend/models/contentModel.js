import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    value: { type: Number, required: true },
    title: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Content = mongoose.model("Content", contentSchema);
export default Content;
