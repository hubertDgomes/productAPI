import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true,
    },
})

export default mongoose.model("productDatas" , productSchema)