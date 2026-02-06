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
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    def: "subCategories"
  },
  
});

export default mongoose.model("productDatas", productSchema);
