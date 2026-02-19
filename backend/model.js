import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    id1: {
      type: String,
      required: true,
    },
    id2: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Message = mongoose.model("Message", messageSchema);
