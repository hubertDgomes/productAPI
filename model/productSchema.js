import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    trim: true,
  },
  color: {
    type: String,
    trim: true,
  },
  ram: {
    type: String,
    trim: true,
  },
  storage: {
    type: String,
    trim: true,
  },

});

export default mongoose.model("productDatas", productSchema);
