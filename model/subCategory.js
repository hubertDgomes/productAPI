import mongoose from "mongoose";
import { Schema } from "mongoose";

const subCategory = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    
})

export default mongoose.model("subCategories" , subCategory)