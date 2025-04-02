import { Schema, model } from "mongoose";

const urlSchema = new Schema({
  longUrl: String,
  shortCode: String,
  createdAt: { type: Date, default: Date.now }
});

const URL = model("URL", urlSchema);

export default URL;
